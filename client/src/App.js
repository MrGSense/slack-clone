import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';

import Chat from './components/Chat';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import db, { auth } from './firebase';

function App() {
  const [channels, setChannels] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const getChannels = () => {
    db.collection('channels').onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };

  const signOut = () => {
    auth
      .signOut()
      .then((res) => {
        setUser(null);
        localStorage.removeItem('user');
      })
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <div>
      <Router>
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
            <Header user={user} signOut={signOut} />
            <Main>
              <Sidebar user={user} channels={channels} />
              <Switch>
                <Route path='/chat/:channelId'>
                  <Chat user={user} />
                </Route>
                <Route path='/'>Select or Create a Channel</Route>
              </Switch>
            </Main>
          </Container>
        )}
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;
