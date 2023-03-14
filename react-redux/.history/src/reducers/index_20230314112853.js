import { combineReducers } from 'redux';
import changeTheNumber from "./incDec";
import mulDivTheNumber from "./mulDiv";
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
    changeTheNumber,
    mulDivTheNumber,
    todoReducer
});

export default rootReducer;