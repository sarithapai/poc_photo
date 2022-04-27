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

    default:
      return state;
  }
};
