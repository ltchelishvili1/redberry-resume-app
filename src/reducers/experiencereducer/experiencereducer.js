export const EXPERIENCEREDUCER = {
  UPDATE_COUNT: "updateCount",
  UPDATE_SHOW_MODAL: "updateShowModal",
  CLOSE_MODAL: "closeModal",
};

export const experienceReducer = (state, action) => {
  switch (action.type) {
    case EXPERIENCEREDUCER.UPDATE_COUNT:
      return {
        ...state,
        count: [...state.count, state.count[state.count.length - 1] + 1],
      };
    case EXPERIENCEREDUCER.UPDATE_SHOW_MODAL:
      return { ...state, showModal: true };
    case EXPERIENCEREDUCER.CLOSE_MODAL:
      return { ...state, showModal: false };
    default:
      return state;
  }
};
