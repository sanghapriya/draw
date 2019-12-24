import React from 'react';
import {useDispatch} from 'react-redux';
import {lineBeingDragged,lineDragEnd} from '../actions';




const line =  {   
    "stroke":"rgb(255,0,0)",
    "strokeWidth":4,
};




export default function GenericLine (props)  {

    const dispatch = useDispatch();
  
      return(
          
                <svg height = {props.y2} width = {props.x2}>
                    <line x1={props.x1} y1={props.y1} x2={props.x2} y2={props.y2} style={line} />
                </svg>
          

      )
  }