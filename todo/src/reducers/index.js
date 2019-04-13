//REDUCERS

import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})


// import { INCREMENT, DECREMENT } from '../actions';

// const initialState = {
//   count: 0
// }

// // Our reducer that handles our two action cases:
// // increment and decrement. It receives the state
// // of our redux store, along with an action created
// // by our action creator. What does the reducer
// // need to do with the count in each case?
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//     // Fill in the body of this case
//     return {
//       ...state,
//       count: state.count + 1 // is this showing in push?
//     }
//     case DECREMENT:
//     // Fill in the body of this case
//     return{
//       ...state,
//       count: state.count - 1
//     }
//     default:
//       return state;
//   }
// };

// REDUCER








//REDUCERS
