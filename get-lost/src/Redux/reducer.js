const initialState = {
    value: null,
    _isMounted: false,
    items: []
}

export default function rootReducer(state = initialState, action){

    if (action.type == "DELETE_DATA") {
        return Object.assign({}, state, action.payload)
    }
    else if (action.type == "GET_DATA") {
        //manipulate your state howeever you want

        return Object.assign({}, state, action.payload)
    }

    else if (action.type == "ERROR"){
        return Object.assign({}, state, action.payload)
    }
    return state

    
}