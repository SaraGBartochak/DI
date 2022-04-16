let initState = {
    count: 0
};

export const reducer = (state = initState, action = {})=> {

    switch(action.type){

        case 'DECREASE_COUNT':
            return{...state, count: --(state.count)}

        case 'INCREASE_COUNT':
            return {...state, count: ++(state.count)}

        default:
            return {...state}

    }

}