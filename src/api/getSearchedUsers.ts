import axios from 'axios';
import {store} from '../redux/store.ts';
import {set as usersSet} from '../redux/usersSlice.ts';
import {set as loadingSet} from '../redux/loadingSlice.ts';

export const getSearchedUsers = (searchText: string) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/users?username=${searchText}`)
    .then(res => res.data)
    .then(data => {
      store.dispatch(usersSet(data));
      store.dispatch(loadingSet(false));
      return data;
    })
    .catch(err => {
      throw new Error(err.message);
    });
};
