import {createSlice} from '@reduxjs/toolkit';

export interface loadingState {
  state: boolean;
}

const initialState: loadingState = {
  state: false,
};

export const loadingSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    set: (state: any, {payload}: {payload: any}) => {
      return {
        state: payload,
      };
    },
  },
});

export const {set} = loadingSlice.actions;

export default loadingSlice.reducer;
