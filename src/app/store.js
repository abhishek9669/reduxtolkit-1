import { rootReducerFunction } from "../features/counter/counterSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer:rootReducerFunction
});