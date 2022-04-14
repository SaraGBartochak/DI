let initState = {
    propOne: 'one from store',
    propTwo: 'Two from store',
    propThree: ''
}

export const reducer  = (state=initState,action={})=> {
    switch (action.type) {

        case 'prop_one':
            return {...state, propOne:action.payload}

            case 'prop_two':
                return {...state, propTwo:action.payload}

            case 'CLICK_MY_BUTTON':
            return {...state,propThree: PopStateEvent.propOne+state.propTwo}

            default:
            return {...state}

    }
    
}

export const clickOnAButton = () => {
    return {
        type:'CLICK_MY_BUTTON'
    }

}