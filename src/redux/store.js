import { configureStore } from '@reduxjs/toolkit';
import kingdomReducer from './kingdom';


export const store = configureStore({
  reducer: {
    kingdom: kingdomReducer,
  }
});