import Button from './components/Button.jsx';
import Items from './components/Items.jsx';
import StyledInput from './components/styles/Input.styled.js';
import GlobalStyles from './components/styles/Global.styled.js';
import Container from './components/styles/Container.js';
import InnerContainer from './components/styles/ContainerInner.styled.js';

import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import foxImage from './assets/lis.svg';
import { shoppingListInDB, push, onValue } from './firebase.js';

const theme = {
  colors: {
    background: {
      container: '#fff',
      input: '#dce1eb',
      button: '#FF6600',
      item: '#ffdf8',
    },
  },
};

function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState({});

  useEffect(() => {
    onValue(shoppingListInDB, (snapshot) => {
      if (!snapshot.exists()) {
        return setList({});
      }
      setList(snapshot.val());
    });
  }, []);

  function handleInput(e) {
    const value = e.target.value;
    setInput(value);
  }

  function addToCart() {
    clearInput();

    const items = Object.values(list);

    if (!input) {
      return;
    }

    if (items.includes(input)) {
      return;
    }

    push(shoppingListInDB, input);
  }

  function clearInput() {
    setInput('');
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <div>
            <img
              src={foxImage}
              alt='Picture of half a cartoon fox facing right'
            />
            <img
              src={foxImage}
              alt='Picture of half a cartoon fox facing left'
            />
          </div>
          <InnerContainer>
            <StyledInput
              type='text'
              id='input-field'
              placeholder='Add item...'
              onChange={handleInput}
              value={input}
            />
            <Button handleClick={addToCart} />
            <Items items={list} />
          </InnerContainer>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
