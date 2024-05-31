import styled from 'styled-components';

const Container = styled.div`

  border: 5px solid black;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background.container};

  max-width: 320px;
  width: 90vw;
  margin: 2rem auto;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem 0;

  img {
    width: 40%;
  }

  img:last-child {
    transform: rotateY(180deg) translatex(-50%);
  }

`;

export default Container;
