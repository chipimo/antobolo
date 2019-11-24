import * as Actions from "../../store/actions/fuse/index";
import navigationConfig from "../../../fuse-configs/navigationConfig";

const initialState = navigationConfig;

const navigation = function(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_NAVIGATION: {
      return [...state];
    }
    case Actions.SET_NAVIGATION: {
      return [...action.navigation];
    }
    case Actions.RESET_NAVIGATION: {
      return [...initialState];
    }
    default: {
      return state;
    }
  }
};

export default navigation;