// import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case 'UPDATE_PROGRESS_VALUE':
      return {
        ...state,
        uploadProgressValue: action.payload
      };
    case 'UPDATE_IS_UPLOADING':
      return {
        ...state,
        isUploading: action.payload
      };
    case 'UPDATE_IS_LOADING':
      return {
        ...state,
        isLoading: action.payload
      };
    case 'SET_ACTIVE_PAGE_INDEX':
      return {
        ...state,
        activePageIndex: action.payload
      };
    case 'SET_PREVIEW':
      return {
        ...state,
        preview: action.payload
      };
    case 'UPDATE_FRAME_COLOR':
      return {
        ...state,
        frameColor: action.payload
      };
    case 'UPDATE_FRAME_MATTING':
      return {
        ...state,
        frameMatting: action.payload
      };
    case 'UPDATE_FRAME_TYPE':
      return {
        ...state,
        selectedFrameType: action.payload
      };

    default:
      return state;
  }
};
