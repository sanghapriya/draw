import React from 'react';
import GenericLine from '../components/genericLine.component';
import {LINE_DRAG_START,LINE_BEING_DRAGGED,LINE_DRAG_END, ON_KEY_PRESS} from '../actions';
import { act } from 'react-dom/test-utils';

const initialState = {latestLineId:0,lines:[],lineDetails:[],isDraw:false,selected:[]};

function manageLineReducer(state = initialState,action) {

    switch(action.type){

        case LINE_DRAG_START:

            action.e.persist();
            var isDraw = !state.isDraw

            if(state.isDraw & !isDraw){
                 return {
                        latestLineId:state.latestLineId,
                        isDraw:false,
                        selected:state.selected,
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
                
                if(action.id === null){
                    // console.log(state)
                    return state
                }
                else {
                        console.log("got an id")
                        console.log(action.id)
                        console.log(state)
     
                        return {
                            latestLineId:state.latestLineId,
                            isDraw:false,
                            selected:state.selected.includes(action.id)? state.selected.filter((id) => (id !== action.id)):[...state.selected,action.id],
                            lines:state.lines.map((line,index) => (index === action.id-1?
                                                                        (state.selected.includes(action.id)?
                                                                        <GenericLine          
                                                                            key = { action.id}
                                                                            id = { action.id}
                                                                            color = "red"
                                                                            x1 = {state.lineDetails[action.id-1].x1}
                                                                            y1 = {state.lineDetails[action.id-1].y1}
                                                                            x2 = {state.lineDetails[action.id-1].x2}
                                                                            y2 = {state.lineDetails[action.id-1].y2}
                                                                        />:
                                                                        <GenericLine          
                                                                            key = { action.id}
                                                                            id = { action.id}
                                                                            color = "blue"
                                                                            x1 = {state.lineDetails[action.id-1].x1}
                                                                            y1 = {state.lineDetails[action.id-1].y1}
                                                                            x2 = {state.lineDetails[action.id-1].x2}
                                                                            y2 = {state.lineDetails[action.id-1].y2}
                                                                        />):
                                                                        line)),

                            lineDetails:state.lineDetails.map((lineDetail,index) => (index === action.id-1?
                                                                                        (state.selected.includes(action.id)?
                                                                                            {   id:action.id,
                                                                                                color: "red",
                                                                                                x1: state.lineDetails[action.id-1].x1,
                                                                                                y1: state.lineDetails[action.id-1].y1,
                                                                                                x2: state.lineDetails[action.id-1].x2,
                                                                                                y2: state.lineDetails[action.id-1].y2,
                                                                                            }:

                                                                                            {
                                                                                                id:action.id,
                                                                                                color: "blue",
                                                                                                x1: state.lineDetails[action.id-1].x1,
                                                                                                y1: state.lineDetails[action.id-1].y1,
                                                                                                x2: state.lineDetails[action.id-1].x2,
                                                                                                y2: state.lineDetails[action.id-1].y2,
                                                                                            }):
                                                                                        
                                                                                        lineDetail))
                                                                                        };

                                                                            }
            
            }
            // New Line creation
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
                ...state,
                selected:state.selected,
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
                        selected:state.selected,
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
                selected:state.selected,
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
                 action.e.persist();
                 return {
                    latestLineId:state.latestLineId,
                    isDraw:false,
                    lines:state.lines.map((line,index) => (state.selected.includes(index+1)?
                                                            <div key= {index+1}></div>:line)),
    
                    lineDetails:state.lineDetails.map((lineDetail,index) => (state.selected.includes(index+1)?
                                                                                {}:lineDetail)),

                    selected:[]
                                                                                };                                                          
                                                
                 
        default:
            return state;
}

}


export default manageLineReducer;