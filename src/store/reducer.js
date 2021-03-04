const initialState = {
  nextStap: null,
  getImages: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "nextStap":
      return {
        ...state,
        nextStap: action.payload,
      };

    case "getImages":
      return {
        ...state,
        getImages: action.payload,
      };

    case "openModel":
      return {
        ...state,
        openModel: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
