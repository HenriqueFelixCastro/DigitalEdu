import {
  DIGITAL_CONTENT_AVAILABLE,
  DIGITAL_CONTENT_SELECTED,
  DIGITAL_CONTENT_FILTERED,
  BLOG_POST_SELECTED,
  VIDEO_SELECTED,
} from "../actions/actionTypes";
import { ARTIFICIAL_INTELLIGENCE_VIDEOS } from "../database/video";
import { ARTIFICIAL_INTELLIGENCE_TUTORIALS } from "../database/tutorial";

const initialState = {
  content: DIGITAL_CONTENT_AVAILABLE.ARTIFICIAL_INTELLIGENCE,
  videos: ARTIFICIAL_INTELLIGENCE_VIDEOS,
  tutorials: ARTIFICIAL_INTELLIGENCE_TUTORIALS,
  blogPost: {},
  videoSelected: {},
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

    case DIGITAL_CONTENT_FILTERED:
      const newVideos = state.videos.filter((video) => {
        if (video.videoTitle.search(action.payload.value) !== -1) {
          return true;
        }
        if (video.videoDescription.search(action.payload.value) !== -1) {
          return true;
        }

        return false;
      });

      const newTutorials = state.tutorials.filter((tutorial) => {
        if (tutorial.tutorialTitle.search(action.payload.value) !== -1) {
          return true;
        }
        if (tutorial.tutorialDescription.search(action.payload.value) !== -1) {
          return true;
        }

        return false;
      });

      return {
        ...state,
        videos: newVideos,
        tutorials: newTutorials,
      };

    case BLOG_POST_SELECTED:
      return {
        ...state,
        blogPost: action.payload.blogPost,
      };

    case VIDEO_SELECTED:
      return {
        ...state,
        videoSelected: action.payload.video,
      };

    default:
      return state;
  }
};

export default uiReducer;
