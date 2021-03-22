export const initialState = {
  query: '',
  status: 'idle',
  news: [],
  error: ''
};

export const searchInputReducer = (state, event) => {
  switch (event.type) {
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        query: event.query
      };
    case 'FETCH':
      return {
        ...state,
        status: 'loading'
      };
    case 'RESOLVE':
      return {
        ...state,
        status: 'success',
        news: event.data
      };
    case 'REJECT':
      return {
        ...state,
        status: 'failure',
        error: event.error
      };
    default:
      return state;
  }
};
