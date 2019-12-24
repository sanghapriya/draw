export const LINE_DRAG_START = 'LINE_DRAG_START'
export const LINE_DRAG_END = 'LINE_DRAG_END'
export const LINE_BEING_DRAGGED = 'LINE_BEING_DRAGGED'


export function lineDragStart(e,lineType) {

    return {type: LINE_DRAG_START,e,lineType}
  }
  
  
  export function lineDragEnd(e,id,lineType) {
  
    return {type: LINE_BEING_DRAGGED,e,lineType}
  }
  
  
  export function lineBeingDragged(e,id,lineType) {
  
    return {type: LINE_BEING_DRAGGED,e,lineType}
  }