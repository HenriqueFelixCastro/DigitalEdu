import {
  DIGITAL_CONTENT_SELECTED,
  DIGITAL_CONTENT_AVAILABLE,
  DIGITAL_CONTENT_FILTERED,
  BLOG_POST_SELECTED,
  VIDEO_SELECTED,
} from "./actionTypes";

import {
  ARTIFICIAL_INTELLIGENCE_VIDEOS,
  DATA_SCIENCE_VIDEOS,
  CLOUD_COMPUTING_VIDEOS,
  QUANTUM_COMPUTING_VIDEOS,
  ACADEMIC_WEEK_VIDEOS,
  OTHER_TECHNOLOGIES_VIDEOS,
} from "../database/video";

import {
  ARTIFICIAL_INTELLIGENCE_TUTORIALS,
  DATA_SCIENCE_TUTORIALS,
  CLOUD_COMPUTING_TUTORIALS,
  QUANTUM_COMPUTING_TUTORIALS,
  OTHER_TECHNOLOGIES_TUTORIALS,
} from "../database/tutorial";

import { BLOG_POSTS } from "../database/blogPosts";

export const digitalContentSelected = (content) => {
  let videos = null;
  let tutorials = null;

  if (content === DIGITAL_CONTENT_AVAILABLE.ARTIFICIAL_INTELLIGENCE) {
    videos = ARTIFICIAL_INTELLIGENCE_VIDEOS;
    tutorials = ARTIFICIAL_INTELLIGENCE_TUTORIALS;
  }
  if (content === DIGITAL_CONTENT_AVAILABLE.DATA_SCIENCE) {
    videos = DATA_SCIENCE_VIDEOS;
    tutorials = DATA_SCIENCE_TUTORIALS;
  }
  if (content === DIGITAL_CONTENT_AVAILABLE.CLOUD_COMPUTING) {
    videos = CLOUD_COMPUTING_VIDEOS;
    tutorials = CLOUD_COMPUTING_TUTORIALS;
  }
  if (content === DIGITAL_CONTENT_AVAILABLE.QUANTUM_COMPUTING) {
    videos = QUANTUM_COMPUTING_VIDEOS;
    tutorials = QUANTUM_COMPUTING_TUTORIALS;
  }
  if (content === DIGITAL_CONTENT_AVAILABLE.ACADEMIC_WEEK) {
    videos = ACADEMIC_WEEK_VIDEOS;
  }
  if (content === DIGITAL_CONTENT_AVAILABLE.OTHER_TECHNOLOGIES) {
    videos = OTHER_TECHNOLOGIES_VIDEOS;
    tutorials = OTHER_TECHNOLOGIES_TUTORIALS;
  }

  return {
    type: DIGITAL_CONTENT_SELECTED,
    payload: {
      content,
      videos,
      tutorials,
    },
  };
};

export const digitalContentFiltered = (value) => {
  return {
    type: DIGITAL_CONTENT_FILTERED,
    payload: {
      value,
    },
  };
};

export const blogPostSelected = (blogPostId) => {
  let blogPostFound = null;

  BLOG_POSTS.forEach((blogPost) => {
    if (blogPost.id === blogPostId) {
      blogPostFound = blogPost;
    }
  });

  return {
    type: BLOG_POST_SELECTED,
    payload: {
      blogPost: blogPostFound,
    },
  };
};

export const videoSelected = (videoId) => {
  let videoFound = null;

  // videoId is XX-Y
  // XX is Technology Track Y is ID
  if (videoId.length >= 4) {
    if (videoId.substring(0, 2) === "ai") {
      ARTIFICIAL_INTELLIGENCE_VIDEOS.forEach((video) => {
        if (video.id === videoId) {
          videoFound = video;
        }
      });
    }

    if (videoId.substring(0, 2) === "ds") {
      DATA_SCIENCE_VIDEOS.forEach((video) => {
        if (video.id === videoId) {
          videoFound = video;
        }
      });
    }

    if (videoId.substring(0, 2) === "cc") {
      CLOUD_COMPUTING_VIDEOS.forEach((video) => {
        if (video.id === videoId) {
          videoFound = video;
        }
      });
    }

    if (videoId.substring(0, 2) === "qc") {
      QUANTUM_COMPUTING_VIDEOS.forEach((video) => {
        if (video.id === videoId) {
          videoFound = video;
        }
      });
    }

    if (videoId.substring(0, 2) === "aw") {
      ACADEMIC_WEEK_VIDEOS.forEach((video) => {
        if (video.id === videoId) {
          videoFound = video;
        }
      });
    }

    if (videoId.substring(0, 2) === "ot") {
      OTHER_TECHNOLOGIES_VIDEOS.forEach((video) => {
        if (video.id === videoId) {
          videoFound = video;
        }
      });
    }
  }

  return {
    type: VIDEO_SELECTED,
    payload: {
      video: videoFound,
    },
  };
};
