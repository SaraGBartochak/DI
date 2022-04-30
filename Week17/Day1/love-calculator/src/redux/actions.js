// export const setFirstName = (value) => {
//   return {
//     type: 'SET_FNAME',
//     payload: value
//   }
// }
//
// export const setSecondName = (value) => {
//   return{
//     type:'SET_SNAME',
//     payload:value
//   }
// }

export const setNames = (value1,value2) => {
  return{
    type:value1,
    payload:value2
  }
}

export const setResults = (data) => {
  return {
    type:'RESULT',
    payload: data
  }
}
