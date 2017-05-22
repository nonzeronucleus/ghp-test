import counterActions from './counterActionTypes';

const add = () => ({type:counterActions.ADD});
const subtract = () => ({type:counterActions.SUBTRACT});

export default {add, subtract};
