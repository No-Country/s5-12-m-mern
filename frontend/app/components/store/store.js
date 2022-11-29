import userSlice from "./userSlice.js"
import { createWrapper } from "next-redux-wrapper"
import { configureStore } from "@reduxjs/toolkit";

const makeStore = () => configureStore({
    reducer: {
        users: userSlice,
    },
    devTools: true,
});

export const wrapper = createWrapper(makeStore);