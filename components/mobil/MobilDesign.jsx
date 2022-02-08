import React from 'react';
import Header from './Header';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import RightBar from '../tools/rightBar';
import { useDispatch, useSelector } from 'react-redux';
import en from '../../src/en';
import tr from '../../src/tr';

function MobilDesign({ userInfoData }) {
  const router = useRouter();
  const { locale } = router;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push('/', '/', { locale });
  };

  const [show, setShow] = useState(false);
  const t = locale === 'en' ? en : tr;

  const userInfo = useSelector((state) => state.userInfo.value);
  const dispatch = useDispatch();

  useEffect(() => {
    router.prefetch('/register');
    router.prefetch('/login');
    router.prefetch('/contact');
  }, [router]);

  return (
    <div className="w-full hidden desktop:hidden laptop:hidden tablet:block mobil:block">
      <Header {...{ onOpen, btnRef }} />
      <div className="w-full mr-[230px] p-5">
        <h1 className="font-semibold text-3xl text-gray-800">{t.loremMainH}</h1>
        <div className="mt-20">
          <h2 className="font-semibold text-2xl text-gray-700">{t.loremH1}</h2>
          <p className="mt-14 font-sans text-justify text-gray-600">
            {t.loremP1}
          </p>
        </div>
        <div className="mt-16">
          <h2 className="font-semibold text-2xl text-gray-700">{t.loremH2}</h2>
          <p className="mt-14 font-sans text-justify text-gray-600">
            {t.loremP2}
          </p>
        </div>
        <div className="mt-20">
          <h2 className="font-semibold text-2xl text-gray-700">{t.loremH3}</h2>
          <p className="mt-14 font-sans text-justify text-gray-600">
            {t.loremP3}
          </p>
        </div>
        <div className="mt-16">
          <h2 className="font-semibold text-2xl text-gray-700">{t.loremH4}</h2>
          <p className="mt-14 font-sans text-gray-600">{t.loremP4}</p>
        </div>
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Case Study</DrawerHeader>

          <DrawerBody>
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
                isMobil: true,
              }}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default MobilDesign;
