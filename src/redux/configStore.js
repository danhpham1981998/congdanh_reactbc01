import { combineReducers, createStore } from "redux";
import { BaiTapGameReducer } from "./reducer/BaiTapGameXucXacReducer";
import { gioHangReducer } from "./reducer/GioHangReducer";




const rootReducer = combineReducers ({
    gioHangReducer: gioHangReducer,
    //state thoe từng nghiệp vụ
    BaiTapGameReducer//giống gioHangReducer nhưng ngắn hơn
});


export const store = createStore(rootReducer);



