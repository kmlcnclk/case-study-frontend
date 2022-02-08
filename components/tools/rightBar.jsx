import React from 'react';
import { changeUserInfo } from '../../store/userInfoSlice';
import { Button, Collapse, Flex, Select, useToast } from '@chakra-ui/react';

function RightBar({
  locale,
  changeLanguage,
  userInfo,
  t,
  show,
  setShow,
  dispatch,
  router,
  userInfoData,
  isMobil,
}) {
  const toast = useToast();

  const logout = async () => {
    const res = await fetch('http://localhost:5000/user/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo}`,
      },
    });
    const data = await res.json();

    if (data.success) {
      toast({
        title: data.message,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      setShow(!show);
      dispatch(changeUserInfo(''));
    } else {
      toast({
        title: data.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <Select
        size="sm"
        className="shadow-lg"
        rounded="md"
        w="170px"
        _focus={{ ring: '0px' }}
        variant="filled"
        defaultValue={locale}
        onChange={changeLanguage}
      >
        <option value="en">en</option>
        <option value="tr">tr</option>
      </Select>

      {userInfo != '' ? (
        <Button
          mt={5}
          className="shadow-lg"
          mb={5}
          colorScheme="whiteAlpha"
          _active={{ bgColor: isMobil ? '#C34A36' : '#f3f3f3' }}
          w="full"
          _focus={{ ring: '0px' }}
          size="sm"
          _hover={{ bgColor: isMobil ? '#C34A36' : '#f3f3f3' }}
          bgColor={isMobil ? '#C34A36' : 'white'}
          color={isMobil ? 'white' : '#C34A36'}
          onClick={() => router.push('/contact')}
        >
          {t.contact}
        </Button>
      ) : null}

      {userInfo != '' ? null : (
        <Flex direction="column">
          <Button
            className="shadow-lg"
            colorScheme="whiteAlpha"
            mt={5}
            _focus={{ ring: '0px' }}
            _hover={{ bgColor: isMobil ? '#C34A36' : '#f3f3f3' }}
            _active={{ bgColor: isMobil ? '#C34A36' : '#f3f3f3' }}
            bgColor={isMobil ? '#C34A36' : 'white'}
            color={isMobil ? 'white' : '#C34A36'}
            w="full"
            size="sm"
            onClick={() => router.push('/register')}
          >
            {t.register}
          </Button>
          <Button
            mt={5}
            colorScheme="whiteAlpha"
            _focus={{ ring: '0px' }}
            className="shadow-lg"
            _active={{ bgColor: isMobil ? '#C34A36' : '#f3f3f3' }}
            w="full"
            size="sm"
            _hover={{ bgColor: isMobil ? '#C34A36' : '#f3f3f3' }}
            bgColor={isMobil ? '#C34A36' : 'white'}
            color={isMobil ? 'white' : '#C34A36'}
            onClick={() => router.push('/login')}
          >
            {t.login}
          </Button>
        </Flex>
      )}

      {userInfo != '' ? (
        <Flex direction="column">
          <Button
            mt={5}
            className="shadow-lg"
            mb={5}
            colorScheme="whiteAlpha"
            _active={{ bgColor: isMobil ? '#C34A36' : '#f3f3f3' }}
            w="full"
            _focus={{ ring: '0px' }}
            size="sm"
            _hover={{ bgColor: isMobil ? '#C34A36' : '#f3f3f3' }}
            bgColor={isMobil ? '#C34A36' : 'white'}
            color={isMobil ? 'white' : '#C34A36'}
            onClick={() => setShow(!show)}
          >
            {t.username}
          </Button>
          <Collapse startingHeight={0} in={show}>
            <div
              className={`${
                isMobil ? 'text-[#C34A36]' : 'text-white'
              } font-semibold`}
            >
              {userInfoData?.name}
            </div>
            <div
              className={`${
                isMobil ? 'text-[#C34A36]' : 'text-white'
              } mt-3 font-semibold`}
            >
              {userInfoData?.email}
            </div>
            <Button
              className="mt-3 shadow-lg"
              colorScheme="whiteAlpha"
              w="full"
              _active={{ bgColor: isMobil ? '#C34A36' : '#f3f3f3' }}
              _focus={{ ring: '0px' }}
              size="sm"
              _hover={{ bgColor: isMobil ? '#C34A36' : '#f3f3f3' }}
              bgColor={isMobil ? '#C34A36' : 'white'}
              color={isMobil ? 'white' : '#C34A36'}
              onClick={() => logout()}
            >
              {t.logout}
            </Button>
          </Collapse>
        </Flex>
      ) : null}
    </div>
  );
}

export default RightBar;
