import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {lineDragStart,lineBeingDragged,onKeyPress} from './actions';
import { Button } from 'react-bootstrap';

export default function App() {

  const dispatch = useDispatch();
  const lines = useSelector(state => state.manageLine.lines);

  
  return (
    <div>
      
  <Button variant="primary" onClick={(e) => dispatch(onKeyPress(e))}>Delete</Button>
  
    <svg width={window.innerWidth} height={window.innerHeight}
      onMouseUp={(e) => dispatch(lineDragStart(e,null,"SIMPLE"))}
       onMouseMove ={(e) => dispatch(lineBeingDragged(e,"SIMPLE"))}
        
        
        >
    
    {lines.map(obj => (obj))}
    
    </svg>
    </div>
  );
}