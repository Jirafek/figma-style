import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #e0f2f1; /* Mint color */
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #004d40; /* Dark green */
  margin-bottom: 24px;
`;

const Subheading = styled.h2`
  font-size: 24px;
  color: #004d40;
  margin-bottom: 24px;
`;

const Button = styled.button`
  background-color: #004d40;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 24px;
  cursor: pointer;
`;

const TestFinishPage = () => {
  return (
    <Container>
      <Heading>Test Completed!</Heading>
      <Subheading>Congratulations on finishing the test.</Subheading>
      <Button>Back to Home</Button>
    </Container>
  );
};

export default TestFinishPage;
