import { DIGITAL_CONTENT_SELECTED } from "../actions/actionTypes";

const initialState = {
  openDigitalContent: false,
  content: undefined,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case DIGITAL_CONTENT_SELECTED:
      return {
        ...state,
        openDigitalContent: true,
        content: action.payload.content,
      };

    default:
      return state;
  }
};

export default uiReducer;
