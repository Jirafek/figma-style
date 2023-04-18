import React from 'react';
import { Header, Logo, LogOutButton, ProfileIcon } from '../CommonStyles/CommonStyles';

const Home = () => {
  return (
    <>
      <Header>
        <Logo>DIL</Logo>
        <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
          <ProfileIcon src="https://via.placeholder.com/40x40" alt="Profile Icon" />
          <LogOutButton>LogOut</LogOutButton>
        </div>
      </Header>
    </>
  );
};

export default Home;
