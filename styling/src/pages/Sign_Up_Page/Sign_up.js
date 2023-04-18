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

const SignUp = () => {
  return (
    <Background>
      <FormContainer>
        <Title>Sign Up</Title>
        <Input type="text" placeholder="First Name"/>
        <Input type="text" placeholder="Last Name"/>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Sign Up</Button>
        <Text>
            Already have an account? <Link to="/signin">Sign In</Link>
        </Text>
      </FormContainer>
    </Background>
);
};

export default SignUp;