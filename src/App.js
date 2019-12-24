import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {lineDragStart,lineBeingDragged,lineDragEnd} from './actions';

export default function App() {

  const dispatch = useDispatch();
  const lines = useSelector(state => state.manageLine.lines);

  
  return (
    
    <div>
    <div onDragStart={(e) => dispatch(lineDragStart(e,"SIMPLE"))} onDrag={(e) => dispatch(lineBeingDragged(e,null,"SIMPLE"))} onDragEnd={(e) => dispatch(lineDragEnd(e,null,"SIMPLE"))}><h1>h</h1></div>
    {lines.map(obj => (obj))}
    
    </div>
  );
}