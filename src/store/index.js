import { createStore } from 'redux';
const initialState = {
  count: 8
};

const reducer = (state = initialState, action) => {
  console.log('reducer running', action);

  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, { count: state.count + 1 });
    default:
      return state;
  }

  return state;
};
const store = createStore(reducer);
export default store;

// import reducer1 from './reducer1';
// import reducer2 from './reducer2';
// export default combineReducers({
//   reducer1: reducer1,
//   reducer2: reducer2
// });
