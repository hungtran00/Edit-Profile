import {configureStore} from "@reduxjs/toolkit"
import useReducer  from "./useSlice"
import postReducer from "./postSlice"

export default configureStore({
    reducer: {
        user: useReducer,
        post: postReducer,
    }
})