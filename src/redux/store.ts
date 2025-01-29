import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice.ts';
import usersReducer from './usersSlice.ts';
import loadingReducer from './loadingSlice.ts';
import searchTextReducer from './searchTextSlice.ts';
import authorizeReducer from './authorizeSlice.ts';
import darkModeReducer from './darkModeSlice.ts';

export const store = configureStore({
  reducer: combineReducers({
    user: userReducer,
    allUsers: usersReducer,
    loading: loadingReducer,
    searchText: searchTextReducer,
    auth: authorizeReducer,
    darkMode: darkModeReducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
