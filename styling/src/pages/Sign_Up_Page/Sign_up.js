import React from 'react';
import {
  Background,
  FormContainer,
  Title,
  Input,
  Button,
  Text,
  Link,
  Select,
} from '../../CommonStyles/CommonStyles';

const SignUp = () => {
  return (
    <Background>
      <FormContainer>
        <Title>Sign Up</Title>
        <Select>
          <option value="teacher">I am Teacher</option>
          <option value="student">I am Student</option>
        </Select>
        <Input type="text" placeholder="First Name"/>
        <Input type="text" placeholder="Last Name"/>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <Button>Sign Up</Button>
        <Text>
            Already have an account? <Link to="/signin">Sign In</Link>
        </Text>
      </FormContainer>
    </Background>
);
};

export default SignUp;