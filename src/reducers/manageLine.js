import React from 'react';
import GenericLine from '../components/genericLine.component';
import {LINE_DRAG_START,LINE_BEING_DRAGGED,LINE_DRAG_END} from '../actions';

const initialState = {latestLineId:0,lines:[],lineDetails:[]};

function manageLineReducer(state = initialState,action) {

    switch(action.type){

        case LINE_DRAG_START:
            console.log("Drag start")
            var latestLineId = state.latestLineId;
            var line = <GenericLine          key = { latestLineId+1}
                                                id = { latestLineId+1}
                                                x1 = {action.e.clientX}
                                                y1 = {action.e.clientY}
                                                x2 = {action.e.clientX}
                                                y2 = {action.e.clientY}

            />;

            var lineDetails = {
                x1 : action.e.clientX,
                y1 : action.e.clientY,
                x2 : action.e.clientX,
                y2 : action.e.clientY

            };

            return {
                ...state,
                latestLineId:state.latestLineId+1,
                lines:[...state.lines,line],
                lineDetails:[...state.lineDetails,lineDetails]
            };

        case LINE_BEING_DRAGGED:
            console.log("Dragging")
            var latestLineId = state.latestLineId;

            return {
                latestLineId:state.latestLineId,
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

        case LINE_DRAG_END:
            console.log("Drag End")
            var latestLineId = state.latestLineId;

            return {
                latestLineId:state.latestLineId,
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

        default:
            return state;
}

}


export default manageLineReducer;