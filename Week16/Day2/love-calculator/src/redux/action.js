export const setFirstName = (value) => {
    return {
        type:'SET_FNAME',
        payload: value
    }
}

export const setSecondName = (value) => {
    return {
        type:'SET_SNAME',
        payload: value
    }
}

export const setNames = (type, value)=> {
    return {
        type: type,
        payload: value
    }
}