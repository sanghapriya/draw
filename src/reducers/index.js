import { combineReducers} from 'redux';
import  manageLineReducer from './manageLine';

const combinedReducers = combineReducers({
    manageLine: manageLineReducer
});

export default combinedReducers;
