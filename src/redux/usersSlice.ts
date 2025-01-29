import {createSlice} from '@reduxjs/toolkit';

export interface usersState {
  allUsers: [];
}

const initialState: usersState = {
  allUsers: [],
};

export const usersSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {
    set: (state: any, {payload}: {payload: any}) => {
      return {
        allUsers: payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {set} = usersSlice.actions;

export default usersSlice.reducer;
