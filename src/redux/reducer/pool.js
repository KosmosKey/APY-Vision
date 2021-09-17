const initialValues = {
  headerStats: [],
  poolData: [],
  wallet: null,
};

const poolReducer = (state = initialValues, action) => {
  switch (action.type) {
    case "Get":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default poolReducer;
