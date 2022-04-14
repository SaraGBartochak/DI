const initState = {
    fname:'',
      sname:'',
      results: {}
}

export const reducer = (state=initState, action={} => {
    switch (action.type) {
        case 'SET_FNAME':
            return {...state, fname:action.payload}
            break;
        case 'SET_SNAME':
            return {...state, sname:action.payload}
            break;
        case 'RESULT':
            return {...state, results.action.payload}
        default:
            break;
    }
})