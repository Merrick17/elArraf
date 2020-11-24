const initmodalState = false;

const modalReducer = (state = initmodalState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return true;
    case 'HIDE_MODAL':
      return false;

    default:
      return state;
  }
};

export default modalReducer;
