import { configureStore } from "@reduxjs/toolkit";
import pharmacyReducer from "./features/pharmacy.slice";


const store = configureStore({
    pharmacy:   pharmacyReducer
})

export default store;