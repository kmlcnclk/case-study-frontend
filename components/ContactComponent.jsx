import { Button, Flex, Heading, Input, Textarea } from '@chakra-ui/react';
import React, { Component } from 'react';
import { CountryDropdown } from 'react-country-region-selector';

class ContactComponent extends Component {
  contactFormSubmit = async (e) => {
    e.preventDefault();

    const dt = {
      email: this.props.email,
      name: this.props.name,
      country: this.props.country,
      message: this.props.message,
    };

    const res = await fetch('http://localhost:5000/user/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dt),
    });
    const data = await res.json();

    if (data.success) {
      this.props.toast({
        title: data.message,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      setTimeout(() => {
        this.props.router.push('/');
      }, 2000);
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
    const {
      name,
      email,
      message,
      setName,
      setEmail,
      setMessage,
      country,
      setCountry,
      router,
      t,
    } = this.props;

    return (
      <Flex h="100vh" justify="center" align="center">
        <Flex
          as="form"
          className="shadow-xl"
          direction="column"
          bg="gray.100"
          onSubmit={this.contactFormSubmit}
          rounded={6}
          p="12"
        >
          <Heading textAlign="center" mb={6}>
            {t.contact}
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
          <CountryDropdown
            className="bg-[#edf2f7] mb-3 text-[#9ca3bf] px-3 py-1"
            value={country}
            defaultOptionLabel={t.selectCountry}
            onChange={(val) => setCountry(val)}
          />
          <Textarea
            mb={3}
            placeholder={t.message}
            resize="both"
            variant="outline"
            size="md"
            isRequired
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
          />
          <Button
            type="submit"
            colorScheme="teal"
            mb={6}
            className="shadow-lg"
            _focus={{ ring: '0px' }}
          >
            {t.send}
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

export default ContactComponent;
