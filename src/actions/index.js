export const setPresidents = (presidents) => ({
  type: 'SET_PRESIDENTS',
  presidents
});

export const toggleLoading = (bool) => ({
  type: 'TOGGLE_LOADING',
  bool
});

export const setError = (message) => ({
  type: 'SET_ERROR',
  message
});

