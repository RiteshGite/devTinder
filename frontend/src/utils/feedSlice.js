import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: "feed",
    initialState: null,
    reducers: {
        addFeed: (state, action) => action.payload,
        removeFromFeed: (state, action) => {
            const newArr = state.filter((f) => f._id !== action.payload)
            return newArr;
        },
        removeFeed: () => null
    }
})

export const { addFeed, removeFeed, removeFromFeed } = feedSlice.actions;
export default feedSlice.reducer;