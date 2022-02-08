import { useToast } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RegisterComponent from '../components/auth/RegisterComponent';
import { useRouter } from 'next/router';
import Footer from '../components/footer';
import en from '../src/en';
import tr from '../src/tr';
import Head from 'next/head';

function Register() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const toast = useToast();
  const router = useRouter();
  const dispatch = useDispatch();
  const { locale } = router;
  const t = locale === 'en' ? en : tr;

  useEffect(() => {
    router.prefetch('/');
  }, [router]);

  return (
    <div>
      <Head>
        <title>Case Study</title>
        <meta name="description" content="Case Study" />
        <link rel="icon" href="/nextjs.png" />
      </Head>
      <RegisterComponent
        {...{
          name,
          email,
          password,
          setName,
          setEmail,
          setPassword,
          dispatch,
          toast,
          router,
          t,
        }}
      />
      <Footer />
    </div>
  );
}

export default Register;
