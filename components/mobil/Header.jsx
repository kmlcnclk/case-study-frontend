import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';

function Header({ btnRef, onOpen }) {
  return (
    <div className="w-full flex items-center justify-between p-4 h-14 bg-[#C34A36]">
      <h1 className="text-white text-lg font-semibold">Case Study</h1>
      <HamburgerIcon
        w="25px"
        cursor="pointer"
        h="25px"
        ref={btnRef}
        color="white"
        onClick={onOpen}
      />
    </div>
  );
}

export default Header;
