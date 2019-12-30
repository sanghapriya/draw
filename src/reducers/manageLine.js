import React from 'react';
import GenericLine from '../components/genericLine.component';
import SelectBox from '../components/selectBox.component';
import {LINE_DRAG_START,LINE_BEING_DRAGGED,LINE_DRAG_END, ON_KEY_PRESS,ON_MENU_SELECT} from '../actions';
import { act } from 'react-dom/test-utils';

const initialState = {latestLineId:0,lines:[],lineDetails:[],isDraw:false,selected:[],drawType:'Draw',selectBox:[],selectBoxDetail:[]};

function manageLineReducer(state = initialState,action) {

    switch(action.type){

        case ON_MENU_SELECT:
            return {
                ...state,
                drawType:action.menuOption
            }

        case LINE_DRAG_START:

            action.e.persist();

            var isDraw = !state.isDraw
            switch(state.drawType){

                case "Draw":
                    {
                        

                        if(state.isDraw & !isDraw){
                            return {
                                    ...state,
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
                                
                
                                    return {
                                        ...state,
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
                            selectBox:[],
                            selectBoxDetail:[],
                            selected:state.selected,
                            latestLineId:state.latestLineId+1,
                            lines:[...state.lines,line],
                            lineDetails:[...state.lineDetails,lineDetails],
                            isDraw:isDraw
                        };

                }

                case "Select":
                {

                    // Selection ends here
                    // isDraw = false
                    // Change color of the selected lines
                    // destroy the selection box and coordinates





                    console.log(action.e.clientX)
                    if(state.isDraw & !isDraw){
                        return {
                            ...state,
                            isDraw:false,
                            selected:state.lineDetails.filter((lineDetail,index) => 
                                                                ((state.lineDetails[index].x1 >= state.selectBoxDetail.x1 &
                                                                    state.lineDetails[index].y1 >= state.selectBoxDetail.y1)&
                                                                    (action.e.clientX >= state.lineDetails[index].x2 &
                                                                    action.e.clientY >= state.lineDetails[index].y2 )))
                                                      .map((lineDetail) =>(lineDetail.id)),

                            lines:state.lines.map((line,index) => ((state.lineDetails[index].x1 >= state.selectBoxDetail.x1 &
                                                                    state.lineDetails[index].y1 >= state.selectBoxDetail.y1)&
                                                                    (action.e.clientX >= state.lineDetails[index].x2 &
                                                                     action.e.clientY >= state.lineDetails[index].y2 ))?
                                                                        <GenericLine          
                                                                            key = { index+1}
                                                                            id = { index+1}
                                                                            color = "blue"
                                                                            x1 = {state.lineDetails[index].x1}
                                                                            y1 = {state.lineDetails[index].y1}
                                                                            x2 = {state.lineDetails[index].x2}
                                                                            y2 = {state.lineDetails[index].y2}
                                                                        />:
                                                                        <GenericLine          
                                                                        key = { index+1}
                                                                        id = { index+1}
                                                                        color = "red"
                                                                        x1 = {state.lineDetails[index].x1}
                                                                        y1 = {state.lineDetails[index].y1}
                                                                        x2 = {state.lineDetails[index].x2}
                                                                        y2 = {state.lineDetails[index].y2}
                                                                    />),
                            selectBox:[],
                            selectBoxDetail:[]
                                        
                                    }
                                }
                    else{

                        return {
                            ...state,
                            isDraw:true,
                            selectBox:<SelectBox          
                                        x1 = {action.e.clientX}
                                        y1 = {action.e.clientY}
                                        x2 = {action.e.clientX}
                                        y2 = {action.e.clientY} />,
                            selectBoxDetail:
                                        {
                                            x1 : action.e.clientX,
                                            y1 : action.e.clientY,
                                            x2 : action.e.clientX,
                                            y2 : action.e.clientY

                                        }
                                        }
                            }
                }

                default:
                    return state;
            }

        case LINE_BEING_DRAGGED:
            // console.log(state.lineDetails)
            action.e.persist();

            switch(state.drawType){

                case "Draw":
                    {

                            var latestLineId = state.latestLineId;

                            if(state.isDraw & state.isDraw != null)
                            {

                                    return {
                                        ...state,
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
                        }
                case "Select":
                    {

                        
                        
                        if(!state.isDraw){
                            return state;
                        }
                        else{
                            console.log("Drag End at"+state.selectBoxDetail.x1)
                            return {
                                ...state,
                                isDraw:true,
                                selectBox:<SelectBox          
                                                x1 = {state.selectBoxDetail.x1}
                                                y1 = {state.selectBoxDetail.y1}
                                                x2 = {action.e.clientX}
                                                y2 = {action.e.clientY} />,
                                selectBoxDetail:
                                            {
                                                x1 : state.selectBoxDetail.x1,
                                                y1 : state.selectBoxDetail.y1,
                                                x2 : action.e.clientX,
                                                y2 : action.e.clientY

                                            }
                            }
                        }
                    }

            default:
                return state;
                }

        case LINE_DRAG_END:
            console.log("Drag End at"+action.e.clientX+","+action.e.clientY)
            var latestLineId = state.latestLineId;

            return {
                ...state,
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
                    ...state,
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