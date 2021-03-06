import React, { useState } from 'react';
import styled from 'styled-components';

import SendIcon from '@material-ui/icons/Send';

function ChatInput({ sendMessage }) {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    sendMessage(text);
    setText('');
  };

  return (
    <Container>
      <InputContainer>
        <form>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type='text'
            placeholder='Message here...'
          />
          <SendButton onClick={onSubmit}>
            <SendIcon />
          </SendButton>
        </form>
      </InputContainer>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;
`;

const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 5px;

  form {
    display: flex;
    height: 42px;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;

    input {
      flex: 1;
      border: none;
      font-size: 13px;

      &:focus {
        outline: none;
      }
    }
  }
`;

const SendButton = styled.button`
  background: #007a5a;
  border-radius: 2px;
  border: none;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  cursor: pointer;

  svg {
    width: 18px;
    color: #d9d9d9;
  }

  &:hover {
    background: #148567;
  }
`;
