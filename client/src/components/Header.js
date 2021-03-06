import React from 'react';
import styled from 'styled-components';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header(props) {
  return (
    <div>
      <Container>
        <Main>
          <AccessTimeIcon cursor='pointer' />
          <SearchContainer>
            <Search>
              <input type='text' placeholder='Search...' />
            </Search>
          </SearchContainer>
          <HelpOutlineIcon cursor='pointer' />
        </Main>
        <UserContainer>
          <Name>{props.user.name}</Name>
          <UserImage onClick={props.signOut}>
            <img
              src={
                props.user.photoURL
                  ? props.user.photoURL
                  : 'https://i.imgur.com/6VBx3io.png'
              }
              alt='Current User'
            />
          </UserImage>
        </UserContainer>
      </Container>
    </div>
  );
}

export default Header;

const Container = styled.div`
  background: #350d36;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  poisition: relative;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  margin-right: 16px;
`;

const SearchContainer = styled.div`
  min-width: 400px;
  margin-left: 16px;
  margin-right: 16px;
`;

const Search = styled.div`
  width: 100%;
  box-shadow: inset 0 0 0 1px rgb(104, 74, 104);
  border-radius: 6px;

  input {
    background-color: transparent;
    width: 95%;
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    color: white;
    padding-top: 4px;
    padding-bottom: 4px;

    &:focus {
      outline: none;
    }
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`;

const Name = styled.div`
  padding-right: 16px;
`;

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid #161616;
  border-radius: 3px;
  cursor: pointer;

  img {
    width: 100%;
  }
`;
