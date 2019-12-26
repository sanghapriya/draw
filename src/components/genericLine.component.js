import React from 'react';
import {useDispatch} from 'react-redux';
import {lineDragStart} from '../actions';








export default function GenericLine (props)  {

    const dispatch = useDispatch();
  
      return(
          
                
                    <line 
                    x1={props.x1} 
                    y1={props.y1} 
                    x2={props.x2} 
                    y2={props.y2} 
                    style={{   
    
                        stroke: props.color === undefined?"pink":props.color,
                        strokeWidth: "4",
                        pointerEvents:"visiblePoint"
                    }} 
                    onMouseUp= {(e) => dispatch(lineDragStart(e,props.id,"SIMPLE"))
                    }
                   />

          

      )
  }