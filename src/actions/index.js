export const LINE_DRAG_START = 'LINE_DRAG_START'
export const LINE_DRAG_END = 'LINE_DRAG_END'
export const LINE_BEING_DRAGGED = 'LINE_BEING_DRAGGED'
export const LINE_SELECTED = 'LINE_SELECTED'
export const ON_KEY_PRESS = 'ON_KEY_PRESS'


export function lineDragStart(e,id,lineType) {

    return {type: LINE_DRAG_START,e,id,lineType}
  }
  
  
  export function lineDragEnd(e,id,lineType) {
  
    return {type: LINE_BEING_DRAGGED,e,id,lineType}
  }
  
  
  export function lineBeingDragged(e,lineType) {
  
    return {type: LINE_BEING_DRAGGED,e,lineType}
  }



  export function lineSelected(e,id) {
  
    return {type: LINE_SELECTED,e,id}
  }

  export function onKeyPress(e) {
  
    return {type: ON_KEY_PRESS,e}
  }