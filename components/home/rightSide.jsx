import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import en from '../../src/en';
import tr from '../../src/tr';
import RightBar from '../tools/rightBar';

function RightSide({ userInfoData }) {
  const router = useRouter();
  const { locale } = router;
  const [show, setShow] = React.useState(false);
  const t = locale === 'en' ? en : tr;

  const userInfo = useSelector((state) => state.userInfo.value);
  const dispatch = useDispatch();

  useEffect(() => {
    router.prefetch('/register');
    router.prefetch('/login');
    router.prefetch('/contact');
  }, [router]);

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push('/', '/', { locale });
  };

  return (
    <div className="w-[230px] fixed shadow-md right-0 h-full bg-[#C34A36] px-3 py-10 flex flex-col items-center">
      <RightBar
        {...{
          locale,
          changeLanguage,
          userInfo,
          t,
          show,
          router,
          setShow,
          dispatch,
          userInfoData,
          isMobil: false,
        }}
      />
    </div>
  );
}

export default RightSide;
