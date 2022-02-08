import { Button, Flex, Heading, Input } from '@chakra-ui/react';
import React, { Component } from 'react';
import { changeUserInfo } from '../../store/userInfoSlice';

class RegisterComponent extends Component {
  registerFormSubmit = async (e) => {
    e.preventDefault();

    const dt = {
      name: this.props.name,
      email: this.props.email,
      password: this.props.password,
    };

    const res = await fetch('http://localhost:5000/user/register', {
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
    const { name, email, password, setName, setEmail, setPassword, router, t } =
      this.props;

    return (
      <Flex h="100vh" justify="center" align="center">
        <Flex
          as="form"
          className="shadow-xl"
          direction="column"
          bg="gray.100"
          onSubmit={this.registerFormSubmit}
          rounded={6}
          p="12"
        >
          <Heading textAlign="center" mb={6}>
            {t.register}
          </Heading>
          <Input
            type="text"
            variant="filled"
            placeholder="John Doe"
            mb={3}
            isRequired
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
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
            {t.register}
          </Button>
          <Button
            type="button"
            _focus={{ ring: '0px' }}
            colorScheme="red"
            className="shadow-lg"
            onClick={() => router.push('/')}
          >
            {t.close}
          </Button>
        </Flex>
      </Flex>
    );
  }
}

export default RegisterComponent;
