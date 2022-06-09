const initialState = {
  tasks: [],
  task: [],
  loading: true,
  error: {}
};

function taskReducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
}

export default taskReducer;
