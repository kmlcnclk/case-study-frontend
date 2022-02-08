import { useRouter } from 'next/router';
import React from 'react';
import en from '../../src/en';
import tr from '../../src/tr';
import NextImage from 'next/image';

function LeftSide({}) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : tr;

  return (
    <div className="w-36 flex-col items-center column h-full flex py-10 px-3 fixed shadow-md bg-[#C34A36] text-white">
      <NextImage
        src="/nextjs.png"
        width="70px"
        height="70px"
        objectFit="contain"
        alt={t.siteLogo}
      />
      <h1 className=" mt-8 font-semibold">Case Study</h1>
    </div>
  );
}

export default LeftSide;
