import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
    name: "requests",
    initialState: null,
    reducers: {
        addRequests: (state, action) => action.payload,
        removeFromRequests: (state, action) => {
            const newArr = state.filter((r) => r._id !== action.payload);
            return newArr;
        },
        removeRequests: () => null
    }
});

export const { addRequests, removeFromRequests, removeRequests } = requestsSlice.actions;
export default requestsSlice.reducer;
