export const insert = data => {
    return {
        type: 'INSERT',
        payload: data
    }
}
export const update = data => {
    return {
        type: 'UPDATE',
        payload: data  
    }
}
 
export const Delete = data => {
    return {
        type: 'DELETE',
        payload: data

    }
}

export const updateIndex = index => {
    return { 
        type: 'UPDATE-INDEX',
        payload: index  
    }
}
