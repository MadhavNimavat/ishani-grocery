import { createSelector, createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: {
    isLoggedIn: false,
    userInfo: undefined,
  },
  reducers: {
    makeUserLoggedIn: (state, { payload }) => {
      return {
        ...state,
        isLoggedIn: true,
        userInfo: payload,
      };
    },
    clearUserAccess: (state) => {
      return {
        ...state,
        isLoggedIn: false,
        userInfo: undefined,
      };
    },
  },
});

export const {
  reducer: AuthReducer,
  actions: { makeUserLoggedIn, clearUserAccess },
} = AuthSlice;

const selectSelf = (state) => state.auth;

export const selectIsLoggedIn = createSelector(
  selectSelf,
  (state) => state.isLoggedIn
);
