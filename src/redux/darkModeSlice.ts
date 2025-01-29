import {createSlice} from '@reduxjs/toolkit';

export interface darkModeState {
  isDarkMode: boolean;
}

const initialState: darkModeState = {
  isDarkMode: false,
};

export const darkModeSlice = createSlice({
  name: 'isDarkMode',
  initialState,
  reducers: {
    set: (state: any, {payload}: {payload: any}) => {
      return {
        isDarkMode: payload,
      };
    },
  },
});

export const {set} = darkModeSlice.actions;

export default darkModeSlice.reducer;
