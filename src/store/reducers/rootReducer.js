import { combineReducers } from "redux";
import authReducer from "./authReducer";
import adminReducer from "./adminReducer";
import vendorReducer from "./vendorReducer";
import passengerReducer from "./passengerReducer";
import driverReducer from "./driverReducer";

const rootReducer = combineReducers({
    authReducer,
    adminReducer,
    vendorReducer,
    passengerReducer,
    driverReducer,
});

export default rootReducer;