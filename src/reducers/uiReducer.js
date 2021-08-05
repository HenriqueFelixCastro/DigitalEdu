import {
  DIGITAL_CONTENT_AVAILABLE,
  DIGITAL_CONTENT_SELECTED,
} from "../actions/actionTypes";
import { ARTIFICIAL_INTELLIGENCE_VIDEOS } from "../database/video";
import { ARTIFICIAL_INTELLIGENCE_TUTORIALS } from "../database/tutorial";

const initialState = {
  content: DIGITAL_CONTENT_AVAILABLE.ARTIFICIAL_INTELLIGENCE,
  videos: ARTIFICIAL_INTELLIGENCE_VIDEOS,
  tutorials: ARTIFICIAL_INTELLIGENCE_TUTORIALS,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case DIGITAL_CONTENT_SELECTED:
      return {
        ...state,
        content: action.payload.content,
        videos: action.payload.videos,
        tutorials: action.payload.tutorials,
      };

    default:
      return state;
  }
};

export default uiReducer;
