import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";
import fuse from "./fuse";
// reducers
import NetInfo from "./netInfo";
import UserInfo from "./userInfo";
import CardItem from "./CardItem";
import OnScroll from "./OnScroll";

const createReducer = asyncReducers => {
  const config = {
    key: "root",
    storage,
    fuse,
    ...asyncReducers,
    blacklist: ["NetInfo", "CardItem", "fuse", "OnScroll"]
  };

  return persistCombineReducers(config, {
    NetInfo: NetInfo,
    user: UserInfo,
    OnScroll: OnScroll,
    CardItem: CardItem,
    fuse: fuse,
    ...asyncReducers
  });
};

export default createReducer;
