import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducer/GioHangReducer";




const rootReducer = combineReducers ({
    gioHangReducer: gioHangReducer,
});


export const store = createStore(rootReducer);