import { configureStore } from '@reduxjs/toolkit';
import userInfoSlice from '../store/userInfoSlice';

export default configureStore({
  reducer: { userInfo: userInfoSlice },
});
