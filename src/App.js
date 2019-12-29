import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector, useDispatch} from 'react-redux';
import {lineDragStart,lineBeingDragged,onKeyPress,onMenuSelect} from './actions';
import { Button,ButtonToolbar, ButtonGroup,Dropdown,Container,Row,Col} from 'react-bootstrap';

export default function App() {

  const dispatch = useDispatch();
  const lines = useSelector(state => state.manageLine.lines);
  const drawType = useSelector(state => state.manageLine.drawType);
  const manageLine = useSelector(state => state.manageLine);

  
  return (
<Container>
  <Row>
    <Col> 
      <ButtonToolbar>
      <Dropdown as={ButtonGroup}>
        <Button variant="info">{drawType}</Button>
        <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />
        <Dropdown.Menu className="super-colors">
          <Dropdown.Item eventKey="1" onClick={(e) => dispatch(onMenuSelect("Draw"))}>Draw</Dropdown.Item>
          <Dropdown.Item eventKey="2" onClick={(e) => dispatch(onMenuSelect("Select"))}>Select</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4" onClick={(e) => dispatch(onKeyPress(e))}>Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonToolbar>
    </Col>
  </Row>
  <Row  >

    <Col 
      > 

      <svg width={window.innerWidth} height={window.innerHeight} onMouseDown={(e) => dispatch(lineDragStart(e,null,"SIMPLE"))}
      onMouseMove ={(e) => dispatch(lineBeingDragged(e,"SIMPLE"))} >
    
      {lines.map(obj => (obj))}
      {manageLine.selectBox}
    
      </svg>
    </Col>

  </Row>
</Container>
  );
}