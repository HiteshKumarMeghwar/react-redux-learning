import { combineReducers } from 'redux';
import changeTheNumber from "./incDec";
import mulDivTheNumber from "./mulDiv";

const rootReducer = combineReducers({
    changeTheNumber,
    mulDivTheNumber,
});

export default rootReducer;