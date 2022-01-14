import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
};

export const kingdomSlice = createSlice({
  name: 'kingdom',
  initialState,
  reducers: {
    chooseSelectedKingdom: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const {
  chooseSelectedKingdom,
} = kingdomSlice.actions;

export const selectKingdom = (state) => state.kingdom.value;

export default kingdomSlice.reducer;