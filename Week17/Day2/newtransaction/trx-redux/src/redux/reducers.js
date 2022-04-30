import { INSERT, UPDATE, DELETE, UPDATE_INDEX } from "./actions";
import {addToLoacalStorage, adToLocalStorage, getFromLocalStorage} from '../utils/storage';

const initState = {
    currenIndex: -1,
    list: getFromLocalStorage('trexes')
}

export const reducer = (state=initState, action = {}) => {
    switch (action.type) {
        case INSERT:
            state.list[state.currenIndex] = action.payload;
            addToLoacalStorage('trxes', [...state.list]);
            return {...state, list:[...state.list], currenIndex:-1}
        case DELETE:
            state.list.push(action.payload)
            addToLoacalStorage('trxes', [...state.list]);
            return {...state, list:[...state.list], currenIndex:-1}
        default:
            break;
    }
}