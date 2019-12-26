import React from 'react';
import GenericLine from '../components/genericLine.component';
import {LINE_DRAG_START,LINE_BEING_DRAGGED,LINE_DRAG_END, ON_KEY_PRESS} from '../actions';
import { act } from 'react-dom/test-utils';

const initialState = {latestLineId:0,lines:[],lineDetails:[],isDraw:false,selected:null};

function manageLineReducer(state = initialState,action) {

    switch(action.type){

        case LINE_DRAG_START:

            action.e.persist();
            var isDraw = !state.isDraw

            if(state.isDraw & !isDraw){
                 return {
                        latestLineId:state.latestLineId,
                        isDraw:false,
                        lines:state.lines.map((line,index) => (index === latestLineId-1?
                                                                <GenericLine          
                                                                key = { latestLineId}
                                                                color = "blue"
                                                                id = { latestLineId}
                                                                x1 = {state.lineDetails[latestLineId-1].x1}
                                                                y1 = {state.lineDetails[latestLineId-1].y1}
                                                                x2 = {action.e.clientX}
                                                                y2 = {action.e.clientY}
                                                                />:line)),

                        lineDetails:state.lineDetails.map((lineDetail,index) => (index === latestLineId-1?
                                                                                    {id:latestLineId,
                                                                                    color:"blue",
                                                                                    x1: state.lineDetails[latestLineId-1].x1,
                                                                                    y1: state.lineDetails[latestLineId-1].y1,
                                                                                    x2:action.e.clientX,
                                                                                    y2:action.e.clientY}:lineDetail))
                                                                                    };
                }

                
            if (typeof(action.e.target.x1) == "object")
            {
                console.log(action.id);
                if(action.id === null){
                    console.log(state)
                    return state
                }
                else {
                        console.log("got an id")
                        console.log(state.latestLineId)
                        return {
                            latestLineId:state.latestLineId,
                            isDraw:false,
                            selected:action.id,
                            lines:state.lines.map((line,index) => (index === latestLineId-1?
                                                                    <GenericLine          
                                                                    key = { latestLineId}
                                                                    id = { latestLineId}
                                                                    color = "pink"
                                                                    x1 = {state.lineDetails[latestLineId-1].x1}
                                                                    y1 = {state.lineDetails[latestLineId-1].y1}
                                                                    x2 = {action.e.clientX}
                                                                    y2 = {action.e.clientY}
                                                                    />:line)),

                            lineDetails:state.lineDetails.map((lineDetail,index) => (index === latestLineId-1?
                                                                                        {id:latestLineId,
                                                                                        color: "pink",
                                                                                        x1: state.lineDetails[latestLineId-1].x1,
                                                                                        y1: state.lineDetails[latestLineId-1].y1,
                                                                                        x2:action.e.clientX,
                                                                                        y2:action.e.clientY}:lineDetail))
                                                                                        };

                                                                            }
            
            }
            
            var latestLineId = state.latestLineId;
            var line = <GenericLine          key = { latestLineId+1}
                                                id = { latestLineId+1}
                                                color = "red"
                                                x1 = {action.e.target.x1}
                                                y1 = {action.e.target.y1}
                                                x2 = {action.e.target.x1}
                                                y2 = {action.e.target.y1}

            />;

            var lineDetails = {
                color: "red",
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
            // console.log(state.lineDetails)
            action.e.persist();
            var latestLineId = state.latestLineId;

            if(state.isDraw & state.isDraw != null)
            {

                    return {
                        latestLineId:state.latestLineId,
                        isDraw:true,
                        lines:state.lines.map((line,index) => (index === latestLineId-1?
                                                                <GenericLine          key = { latestLineId}
                                                                id = { latestLineId}
                                                                color= {state.lineDetails[latestLineId-1].color}
                                                                x1 = {state.lineDetails[latestLineId-1].x1}
                                                                y1 = {state.lineDetails[latestLineId-1].y1}
                                                                x2 = {action.e.clientX}
                                                                y2 = {action.e.clientY}
                                                                />:line)),

                        lineDetails:state.lineDetails.map((lineDetail,index) => (index === latestLineId-1?
                                                                                    {id:latestLineId,
                                                                                    color:state.lineDetails[latestLineId-1].color,
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
                                                        color = {"red"}
                                                        id = { latestLineId}
                                                        x1 = {state.lineDetails[latestLineId-1].x1}
                                                        y1 = {state.lineDetails[latestLineId-1].y1}
                                                        x2 = {action.e.target.x1}
                                                        y2 = {action.e.target.y1}
                                                        />:line)),

                lineDetails:state.lineDetails.map((lineDetail,index) => (index === latestLineId-1?
                                                                            {id:latestLineId,
                                                                            color: "red",
                                                                             x1: state.lineDetails[latestLineId-1].x1,
                                                                             y1: state.lineDetails[latestLineId-1].y1,
                                                                             x2:action.e.target.x1,
                                                                             y2:action.e.target.y1}:lineDetail))
                                                                            };
                                                                    

        case ON_KEY_PRESS:
                 
                 return {
                    latestLineId:state.latestLineId,
                    isDraw:false,
                    lines:state.lines.map((line,index) => (index === state.selected-1?
                                                            <div key= {state.selected}></div>:line)),
    
                    lineDetails:state.lineDetails.map((lineDetail,index) => (index === latestLineId-1?
                                                                                {}:lineDetail))
                                                                                };                                                          
                                                
                 
        default:
            return state;
}

}


export default manageLineReducer;