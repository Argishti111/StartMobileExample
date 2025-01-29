import {createSlice} from '@reduxjs/toolkit';

export interface authState {
  isAuthorized: boolean;
}

const initialState: authState = {
  isAuthorized: false,
};

export const authorizeSlice = createSlice({
  name: 'isAuthorized',
  initialState,
  reducers: {
    set: (state: any, {payload}: {payload: any}) => {
      return {
        isAuthorized: payload,
      };
    },
  },
});

export const {set} = authorizeSlice.actions;

export default authorizeSlice.reducer;
