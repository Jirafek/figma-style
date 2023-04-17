import React from 'react';
import {
  Background,
  FormContainer,
  Title,
  Input,
  Button,
  Text,
  Link,
} from '../../CommonStyles/CommonStyles';

const SignIn = () => {
  return (
    <Background>
      <FormContainer>
        <Title>Sign In</Title>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Sign In</Button>
        <Text>
          Don't have an account?
          <Link href="#">SignUp</Link>
        </Text>
      </FormContainer>
    </Background>
  );
};

export default SignIn;
