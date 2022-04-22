import { CHANGE_SEARCH_FIELD }from './constants';

const initState = {
    serachField: ''
}

export const searchRobots = (state=initState, action = {}) => {
    switch (action.type) {
        case 'CHANGE_SERACH_FIELD':
            return {...state, serachField:action.payload}
        default:
            return {...state}   
    }
}
