import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
};

export const importantServicesSlice = createSlice({
    name: 'importantServices',
    initialState,
    reducers: {
        loadImportantServices: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {
    loadImportantServices
} = importantServicesSlice.actions;

export const selectImportantServices = (state) => state.importantServices.value;

export default importantServicesSlice.reducer;