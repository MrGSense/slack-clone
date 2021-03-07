import React from 'react';
import styled from 'styled-components';

import { auth, provider } from '../firebase';

function Login(props) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        const newUser = {
          name: res.user.displayName,
          photoURL: res.user.photoURL,
        };

        props.setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
      })
      .catch((err) => alert(err.message));
  };

  return (
    <Container>
      <Content>
        <SlackImg
          src='https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png'
          alt='Slack Logo'
        />
        <h1>Sign into Slack</h1>
        <SignInButton onClick={signIn}>Sign In With Google</SignInButton>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background: white;
  padding: 100px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgb(0, 0, 0, 0.12), 0 1px 2px rgb(0, 0, 0, 0.24);
`;

const SlackImg = styled.img`
  height: 100px;
  margin-bottom: 19px;
`;

const SignInButton = styled.button`
  margin-top: 50px;
  background-color: #0a8d48;
  color: white;
  border: none;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
`;
