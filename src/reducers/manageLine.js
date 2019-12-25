import React from 'react';
import GenericLine from '../components/genericLine.component';
import {LINE_DRAG_START,LINE_BEING_DRAGGED,LINE_DRAG_END} from '../actions';

const initialState = {latestLineId:0,lines:[],lineDetails:[],isDraw:false};

function manageLineReducer(state = initialState,action) {

    switch(action.type){

        case LINE_DRAG_START:
            console.log("Drag start" +action.e.clientX+" "+action.e.clientY)
            var isDraw = !state.isDraw
            
            var latestLineId = state.latestLineId;
            var line = <GenericLine          key = { latestLineId+1}
                                                id = { latestLineId+1}
                                                x1 = {action.e.target.x1}
                                                y1 = {action.e.target.y1}
                                                x2 = {action.e.target.x1}
                                                y2 = {action.e.target.y1}

            />;

            var lineDetails = {
                x1 : action.e.clientX,
                y1 : action.e.clientY,
                x2 : action.e.target.x1,
                y2 : action.e.target.y1

            };

            return {
                latestLineId:state.latestLineId+1,
                lines:[...state.lines,line],
                lineDetails:[...state.lineDetails,lineDetails],
                isDraw:isDraw
            };

        case LINE_BEING_DRAGGED:
            console.log("Drag move at "+action.e.clientX+","+action.e.clientY)
            var latestLineId = state.latestLineId;

            if(state.isDraw)
            {

                    return {
                        latestLineId:state.latestLineId,
                        isDraw:true,
                        lines:state.lines.map((line,index) => (index === latestLineId-1?
                                                                <GenericLine          key = { latestLineId}
                                                                id = { latestLineId}
                                                                x1 = {state.lineDetails[latestLineId-1].x1}
                                                                y1 = {state.lineDetails[latestLineId-1].y1}
                                                                x2 = {action.e.clientX}
                                                                y2 = {action.e.clientY}
                                                                />:line)),

                        lineDetails:state.lineDetails.map((lineDetail,index) => (index === latestLineId-1?
                                                                                    {id:latestLineId,
                                                                                    x1: state.lineDetails[latestLineId-1].x1,
                                                                                    y1: state.lineDetails[latestLineId-1].y1,
                                                                                    x2:action.e.clientX,
                                                                                    y2:action.e.clientY}:lineDetail))
                                                                                    };
                }
            else {
                    return state;
                }

        case LINE_DRAG_END:
            console.log("Drag End at"+action.e.target.x1+","+action.e.target.y1)
            var latestLineId = state.latestLineId;

            return {
                latestLineId:state.latestLineId,
                isDraw:false,
                lines:state.lines.map((line,index) => (index === latestLineId-1?
                                                        <GenericLine          key = { latestLineId}
                                                        id = { latestLineId}
                                                        x1 = {state.lineDetails[latestLineId-1].x1}
                                                        y1 = {state.lineDetails[latestLineId-1].y1}
                                                        x2 = {action.e.target.x1}
                                                        y2 = {action.e.target.y1}
                                                        />:line)),

                lineDetails:state.lineDetails.map((lineDetail,index) => (index === latestLineId-1?
                                                                            {id:latestLineId,
                                                                             x1: state.lineDetails[latestLineId-1].x1,
                                                                             y1: state.lineDetails[latestLineId-1].y1,
                                                                             x2:action.e.target.x1,
                                                                             y2:action.e.target.y1}:lineDetail))
                                                                            };

        default:
            return state;
}

}


export default manageLineReducer;