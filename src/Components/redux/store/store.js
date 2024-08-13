import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../reducer/cart"
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
import { combineReducers } from "@reduxjs/toolkit";

const storageConfig = {
    key: "root",
    storage
}

const allReducers = combineReducers({
    cart: cartSlice
})

const persistFuntion = persistReducer(storageConfig, allReducers)

const store = configureStore({

    reducer: persistFuntion
});



export default store

