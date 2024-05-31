import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue, remove } from 'firebase/database';

const appSettings = {
  databaseURL:
    'https://shopping-list-1ee31-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, 'items');

export { database, shoppingListInDB, push, onValue, remove };
