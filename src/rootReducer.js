import { combineReducers } from "redux";
import appSlice from "./features/app/appSlice";
import settingSlice from "./features/setting/settingSlice";

const rootReducer = combineReducers({
  app: appSlice,
  setting: settingSlice
});

export default rootReducer;
