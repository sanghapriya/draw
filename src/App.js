import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {lineDragStart,lineBeingDragged,lineDragEnd} from './actions';

export default function App() {

  const dispatch = useDispatch();
  const lines = useSelector(state => state.manageLine.lines);

  
  return (
    
    <svg width={window.innerWidth} height={window.innerHeight}
      onMouseDown ={(e) => dispatch(lineDragStart(e,"SIMPLE"))}
       onMouseMove ={(e) => dispatch(lineBeingDragged(e,"SIMPLE"))}
        onMouseUp ={(e) => dispatch(lineDragEnd(e,"SIMPLE"))} 
        
        >
    {lines.map(obj => (obj))}
    
    </svg>
  );
}