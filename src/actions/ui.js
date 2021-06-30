import { DIGITAL_CONTENT_SELECTED } from "./actionTypes";

export const digitalContentSelected = (content) => {
  return {
    type: DIGITAL_CONTENT_SELECTED,
    payload: {
      content,
    },
  };
};
