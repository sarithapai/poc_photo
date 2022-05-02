import React, { createContext, useReducer } from 'react';
import {
  DEFAULT_PROJECT_HEIGHT,
  DEFAULT_PROJECT_WIDTH
} from '../Utils/Constants';
import AppReducer from './AppReducer';
import { FRAME_COLORS, FRAME_MATTINGS, UNFRAMED } from '../Utils/Constants';

const initialState = {
  isUploading: false,
  uploadProgressValue: 0,
  isLoading: false,
  projectWidth: DEFAULT_PROJECT_WIDTH,
  projectHeight: DEFAULT_PROJECT_HEIGHT,
  activePageIndex: 0,
  preview: null,
  selectedFrameType: UNFRAMED,
  frameColor: FRAME_COLORS.NAT,
  frameMatting: FRAME_MATTINGS.DEFAULT
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions for changing state

  function updateProgressValue(value) {
    dispatch({
      type: 'UPDATE_PROGRESS_VALUE',
      payload: value
    });
  }

  function updateIsUploading(value) {
    dispatch({
      type: 'UPDATE_IS_UPLOADING',
      payload: value
    });
  }

  function updateIsLoading(value) {
    dispatch({
      type: 'UPDATE_IS_LOADING',
      payload: value
    });
  }

  function setActivePageIndex(index) {
    dispatch({
      type: 'SET_ACTIVE_PAGE_INDEX',
      payload: index
    });
  }

  function setPreview(inPreviewData) {
    dispatch({
      type: 'SET_PREVIEW',
      payload: inPreviewData
    });
  }

  function updateFrameColor(value) {
    dispatch({
      type: 'UPDATE_FRAME_COLOR',
      payload: value
    });
  }

  function updateFrameMatting(value) {
    dispatch({
      type: 'UPDATE_FRAME_MATTING',
      payload: value
    });
  }

  function updateFrameType(value) {
    dispatch({
      type: 'UPDATE_FRAME_TYPE',
      payload: value
    });
  }

  const values = {
    uploadProgressValue: state.uploadProgressValue,
    isUploading: state.isUploading,
    isLoading: state.isLoading,
    projectWidth: state.projectWidth,
    projectHeight: state.projectHeight,
    activePageIndex: state.activePageIndex,
    preview: state.preview,
    frameColor: state.frameColor,
    frameMatting: state.frameMatting,
    selectedFrameType: state.selectedFrameType,
    setActivePageIndex,
    setPreview,
    updateProgressValue,
    updateIsUploading,
    updateIsLoading,
    updateFrameColor,
    updateFrameMatting,
    updateFrameType
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};
