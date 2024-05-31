import StyledButton from './styles/Button.styled.js';

function Button({ handleClick }) {
  return (
    <>
      <StyledButton
        id='add-button'
        onClick={handleClick}>
        Add to cart
      </StyledButton>
    </>
  );
}

export default Button;
