import { combineReducers } from "redux";
import appSlice from "./features/app/appSlice";
import settingSlice from "./features/setting/settingSlice";
import feedSlice from "./features/feed/feedSlice";

const rootReducer = combineReducers({
  app: appSlice,
  setting: settingSlice,
  feed: feedSlice
});

export default rootReducer;
