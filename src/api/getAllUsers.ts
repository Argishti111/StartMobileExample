import axios from 'axios';
import {set as usersSet} from '../redux/usersSlice.ts';
import {set as loadingSet} from '../redux/loadingSlice.ts';
import {store} from '../redux/store.ts';

export const getAllUsers = () => {
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res => res.data)
    .then(data => {
      store.dispatch(usersSet(data));
      return data;
    })
    .catch(err => {
      throw new Error(err.message);
    })
    .finally(() => {
      store.dispatch(loadingSet(false));
    });
};
