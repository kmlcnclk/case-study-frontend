import { Button, Flex, Heading, Input } from '@chakra-ui/react';
import React, { Component } from 'react';
import { changeUserInfo } from '../../store/userInfoSlice';

class LoginComponent extends Component {
  loginFormSubmit = async (e) => {
    e.preventDefault();

    const dt = {
      email: this.props.email,
      password: this.props.password,
    };

    const res = await fetch('http://localhost:5000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dt),
    });
    const data = await res.json();

    if (data.success) {
      await this.props.dispatch(changeUserInfo(data.access_token));

      this.props.router.push('/');
    } else {
      this.props.toast({
        title: data.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  render() {
    const { email, password, setEmail, setPassword, router, t } = this.props;

    return (
      <Flex h="100vh" justify="center" align="center">
        <Flex
          as="form"
          direction="column"
          bg="gray.100"
          onSubmit={this.loginFormSubmit}
          rounded={6}
          p="12"
          className="shadow-xl"
        >
          <Heading textAlign="center" mb={6}>
            {t.login}
          </Heading>

          <Input
            type="email"
            variant="filled"
            placeholder="large@gmail.com"
            mb={3}
            isRequired
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <Input
            type="password"
            variant="filled"
            placeholder="******"
            mb={6}
            isRequired
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />

          <Button
            type="submit"
            colorScheme="teal"
            mb={6}
            className="shadow-lg"
            _focus={{ ring: '0px' }}
          >
            {t.login}
          </Button>
          <Button
            type="button"
            colorScheme="red"
            className="shadow-lg"
            _focus={{ ring: '0px' }}
            onClick={() => router.push('/')}
          >
            {t.close}
          </Button>
        </Flex>
      </Flex>
    );
  }
}

export default LoginComponent;
