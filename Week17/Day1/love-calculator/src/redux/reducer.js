const { combineReducers } = require("redux")

const initState = {
  fname:'',
  sname:'',
  results: {}
}

// export const reducer = (state=initState, action={}) => {
//   switch (action.type) {
//     case 'SET_FNAME':
//       return {...state, fname:action.payload}
//     case 'SET_SNAME':
//       return {...state, sname:action.payload}
//     case 'RESULT':
//       return {...state, results:action.payload}
//     default:
//       return {...state}
//   }
// }

export const reducer = (state=initState, action={}) => {
  switch (type.action) {
    case 'SET_FNAME':
      return {...state, fname:action.payload}
    default:
      return {...state}
}
}

export const reducer1 = (state=initState, action={}) => {
  switch (type.action) {
    case 'SET_SNAME':
      return {...state, sname:action.payload}
    default:
      return {...state}
  }
}

const reducer2 = (state=initState, action={}) => {
  switch (type.action) {
    case 'RESULT':
      return {...state, results:action.payload}
    default:
     return {...state}
  }
}

export default combineReducers ({
  reducer 
 })export 