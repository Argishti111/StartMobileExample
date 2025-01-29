import {createSlice} from '@reduxjs/toolkit';

export interface userState {
  currentUser: {};
}

const initialState: userState = {
  currentUser: {},
};

export const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    set: (state: any, {payload}: {payload: any}) => {
      return {
        currentUser: payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {set} = userSlice.actions;

export default userSlice.reducer;
