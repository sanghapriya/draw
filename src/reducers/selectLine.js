import {LINE_SELECTED} from '../actions';


const initialState = {latestLineId:0,lines:[],lineDetails:[],isDraw:false,lineSelected:[]};

function lineselectedReducer(state = initialState,action) {

    switch(action.type){

        case LINE_SELECTED:
                console.log(action.id);
                return {
                    ...state,
                    lineSelected:action.id};

        default:
            return state;


    }



}

export default lineselectedReducer;

