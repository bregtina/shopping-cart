import styled from 'styled-components';

const StyledButton = styled.button`

  border: 2px solid transparent;
  background-color: ${({ theme }) => theme.colors.background.button};
  font-family: inherit;
  cursor: pointer;
  width: 100%;
  padding: .7rem;
  border-radius: 5px;
  text-align: center;
  text-transform: capitalize;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.background.container};
  transition: background-color .5s;

  &:hover {
    background-color: #000;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }

`;

export default StyledButton;
