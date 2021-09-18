import * as actions from "../actions";

const initialValues = {
  poolData: [],
};

const poolReducer = (state = initialValues, action) => {
  switch (action.type) {
    case actions.GET_DATA:
      return {
        ...state,
        poolData: action.data,
      };

    default:
      return state;
  }
};

export default poolReducer;
