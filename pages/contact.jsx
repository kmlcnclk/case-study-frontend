import { useToast } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import ContactComponent from '../components/ContactComponent';
import Footer from '../components/footer';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import en from '../src/en';
import tr from '../src/tr';
import Head from 'next/head';

function Contact() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [country, setCountry] = React.useState('');

  const userAccessToken = useSelector((state) => state.userInfo.value);

  const toast = useToast();
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : tr;

  useEffect(() => {
    router.prefetch('/');

    if (userAccessToken == '') {
      router.push('/');
    }

    const userInfoFunc = async () => {
      const res = await fetch('http://localhost:5000/user/userinfo', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
        },
      });

      const data = await res.json();

      if (data && data.success) {
        setName(data.data.name);
        setEmail(data.data.email);
      } else {
        toast({
          title: data.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    };
    if (userAccessToken != '') {
      userInfoFunc();
    }
  }, [userAccessToken, toast, router]);

  return (
    <div>
      <Head>
        <title>Case Study</title>
        <meta name="description" content="Case Study" />
        <link rel="icon" href="/nextjs.png" />
      </Head>
      <ContactComponent
        {...{
          name,
          email,
          message,
          setName,
          setEmail,
          setMessage,
          router,
          toast,
          country,
          setCountry,
          t,
        }}
      />
      <Footer />
    </div>
  );
}

export default Contact;
