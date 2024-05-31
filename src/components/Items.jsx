import StyledItems from './styles/Items.styled.js';
import { remove, ref } from 'firebase/database';
import { database } from '../firebase.js';

function Items({ items }) {
  const itemsArray = Object.entries(items);

  const itemList = itemsArray.map((item) => {
    const id = item[0];
    const shoppingItem = capitalize(item[1]);

    return (
      <li
        key={id}
        id={id}>
        {shoppingItem}
      </li>
    );
  });

  function handleClick(e) {
    const exactLocationOfStoryInDB = ref(database, `items/${e.target.id}`);
    remove(exactLocationOfStoryInDB);
  }

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <StyledItems>
      <ul onDoubleClick={handleClick}>
        {itemList.length ? (
          itemList
        ) : (
          <li id='no-items'>No Items Added Yet...</li>
        )}
      </ul>
    </StyledItems>
  );
}

export default Items;
