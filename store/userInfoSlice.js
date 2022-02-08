import { createSlice } from '@reduxjs/toolkit';

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    value: '',
  },
  reducers: {
    changeUserInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
