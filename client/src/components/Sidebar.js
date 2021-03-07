import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// Remove later when real database exists
import { sidebarItemsData } from '../data/SidebarData';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';

function Sidebar(props) {
  const history = useHistory();

  const goToChannel = (id) => {
    if (id) {
      history.push(`/chat/${id}`);
    }
  };

  const addChannel = () => {
    const promptName = prompt('Enter channel name');

    if (promptName) {
      db.collection('channels').add({
        name: promptName,
      });
    }
  };

  return (
    <div>
      <Container>
        <WorkspaceContainer>
          <Name>{props.user.name}</Name>
          <NewMessage>
            <AddCircleOutlineIcon />
          </NewMessage>
        </WorkspaceContainer>
        <MainChannels>
          {sidebarItemsData.map((item, i) => {
            return (
              <MainChannelItem key={i}>
                {item.icon}
                {item.text}
              </MainChannelItem>
            );
          })}
        </MainChannels>
        <ChannelsContainer>
          <NewChannelContainer>
            <div>Channels</div>
            <AddIcon cursor='pointer' onClick={addChannel} />
          </NewChannelContainer>
          <ChannelsList>
            {props.channels.map((channel) => {
              return (
                <Channel
                  key={channel.id}
                  onClick={() => goToChannel(channel.id)}>
                  # {channel.name}
                </Channel>
              );
            })}
          </ChannelsList>
        </ChannelsContainer>
      </Container>
    </div>
  );
}

export default Sidebar;

const Container = styled.div`
  background: #3f0e40;
  height: 100%;
`;

const WorkspaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`;

const Name = styled.div``;

const NewMessage = styled.div`
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 19px;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 19px;
`;

const MainChannelItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;

  &:hover {
    background: #350d36;
  }
`;

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 19px;
`;

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 19px;
`;

const ChannelsList = styled.div``;

const Channel = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  cursor: pointer;

  &:hover {
    background: #350d36;
  }
`;
