import {createSlice} from '@reduxjs/toolkit';

export interface searchTextState {
  searchText: string;
}

const initialState: searchTextState = {
  searchText: '',
};

export const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    set: (state: any, {payload}: {payload: any}) => {
      return {
        searchText: payload,
      };
    },
  },
});

export const {set} = searchTextSlice.actions;

export default searchTextSlice.reducer;
