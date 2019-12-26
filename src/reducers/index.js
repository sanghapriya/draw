import { combineReducers} from 'redux';
import  manageLineReducer from './manageLine';
import lineselectedReducer from './selectLine';


const combinedReducers = combineReducers({
    manageLine: manageLineReducer,
    lineSelected: lineselectedReducer
});

export default combinedReducers;
