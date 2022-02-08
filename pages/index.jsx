import Head from 'next/head';
import Footer from '../components/footer';
import RightSide from '../components/home/rightSide';
import HomeComponent from '../components/home/homeComponent';
import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import LeftSide from '../components/home/leftSide';
import { useSelector } from 'react-redux';
import MobilDesign from '../components/mobil/MobilDesign';
import { useRouter } from 'next/router';
import en from '../src/en';
import tr from '../src/tr';

const Home = () => {
  const userAccessToken = useSelector((state) => state.userInfo.value);

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : tr;
  const toast = useToast();

  const [userInfoData, setUserInfo] = useState({});

  useEffect(() => {
    const userInfoFunc = async () => {
      const res = await fetch('http://localhost:5000/user/userinfo', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
        },
      });

      const data = await res.json();

      if (data && data.success) {
        setUserInfo(data.data);
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
  }, [userAccessToken, toast, setUserInfo]);

  return (
    <div>
      <Head>
        <title>Case Study</title>
        <meta name="description" content="Case Study" />
        <link rel="icon" href="/nextjs.png" />
      </Head>

      <div className="w-full flex desktop:flex laptop:flex tablet:hidden mobil:hidden">
        <LeftSide />
        <HomeComponent t={t} />
        <RightSide {...{ userInfoData }} />
      </div>
      <MobilDesign {...{ userInfoData }} />

      <Footer />
    </div>
  );
};

export default Home;
