import counterActionTypes from 'actions/counterActionTypes';

const counter = (state = 0, action = {type:''} ) => {
    switch (action.type) {
        case counterActionTypes.ADD:
            return state+1;
        case counterActionTypes.SUBTRACT:
            return state-1;
        default:
            return state;
    }
}

export default counter;