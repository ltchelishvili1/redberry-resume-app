export const EDUCATIONREDUCER = {
  TOGGLE_MODAL: "TOGGLE_MODAL",
  UPDATE_COUNT: "UPDATE_COUNT",
  TOGGLE_LOADING: "TOGGLE_LOADING",
};

export const educationReducer = (prevState, action) => {
  switch (action.type) {
    case EDUCATIONREDUCER.TOGGLE_MODAL:
      return { ...prevState, showModal: !prevState.showModal };
    case EDUCATIONREDUCER.UPDATE_COUNT:
      return { ...prevState, count: [...prevState.count, action.payload] };
    case EDUCATIONREDUCER.TOGGLE_LOADING:
      return { ...prevState, isLoading: !prevState.isLoading };
    default:
      return prevState;
  }
};
