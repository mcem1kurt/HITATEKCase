import {configureStore} from "@reduxjs/toolkit"
import newReducer from "./features/newSlice"

export const store = configureStore({
    reducer:{
        news : newReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
