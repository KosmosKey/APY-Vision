import * as actions from "../actions";

const initialValues = {
  poolData: [],
  navBoolean: false,
};

const poolReducer = (state = initialValues, action) => {
  switch (action.type) {
    case actions.GET_DATA:
      return {
        ...state,
        poolData: action.data,
      };

    case actions.TOGGLE_NAVBAR:
      return {
        ...state,
        navBoolean: !state.navBoolean,
      };

    default:
      return state;
  }
};

export default poolReducer;
