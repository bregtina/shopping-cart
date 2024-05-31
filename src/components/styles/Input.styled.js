import styled from 'styled-components';

const StyledInput = styled.input`

  background-color: ${({ theme }) => theme.colors.background.input};
  color: ${({ theme }) => theme.colors.background.background};
  font-family: inherit;
  border: none;
  width: 100%;
  padding: .7rem;
  border-radius: 5px;
  text-align: center;
  text-transform: capitalize;
  font-size: 1.2rem;
  font-weight: 500;
  margin: .7rem 0;

  &:focus::placeholder {
    opacity: 0;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }

  &::placeholder {
    font-weight: 300;
  }

`;

export default StyledInput;
