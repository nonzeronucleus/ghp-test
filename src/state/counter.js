export const types = {
    ADD:'COUNTER/ADD',
    SUBTRACT:'COUNTER/SUBTRACT'
}

const counter = (state = 0, action = {type:''} ) => {
    switch (action.type) {
        case types.ADD:
            return state+1;
        case types.SUBTRACT:
            return state-1;
        default:
            return state;
    }
}


export const actions = {
    add: () => ({type:types.ADD}),
    subtract: () => ({type:types.SUBTRACT})
}

export const selectors = {
    getSelectedCategory: (state) => state
}

export default counter;