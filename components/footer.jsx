import { useRouter } from 'next/router';
import React from 'react';
import en from '../src/en.js';
import tr from '../src/tr.js';

function Footer() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : tr;

  return (
    <div className="w-full flex justify-center items-center h-24 bg-slate-100">
      {t.footer}
    </div>
  );
}

export default Footer;
