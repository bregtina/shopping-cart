import styled from 'styled-components';

const StyledItems = styled.div`

  align-self: flex-start;
  width: 100%;
  overflow-wrap: break-word;

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: .7rem;
  }

  li {
    color: #432000;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.colors.background.StyledItems};
    padding: 1rem;
    border-radius: 10px;
    margin: 0;
    flex-grow: 1;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;
    user-select: none;
    transition: all .5s;
  }

  li#no-items {
    background-color: transparent;
    box-shadow: none;
    cursor: default;
  }

  li:hover {
    background-color: #ffecc7;
  }

`;

export default StyledItems;
