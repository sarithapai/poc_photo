import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  isUploading: false,
  uploadProgressValue: 0,
  isLoading: false
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

  return (
    <GlobalContext.Provider
      value={{
        uploadProgressValue: state.uploadProgressValue,
        isUploading: state.isUploading,
        isLoading: state.isLoading,
        updateProgressValue,
        updateIsUploading,
        updateIsLoading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
