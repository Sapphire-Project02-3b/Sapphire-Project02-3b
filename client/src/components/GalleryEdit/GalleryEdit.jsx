import React, {useState} from 'react'
import './GalleryEdit.less'

function GalleryEdit(props) {

    
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>
              x
              </button>
            {props.children}
            <h2>{props.name}</h2>
            <h3>{props.author}</h3>
            <h3>{props.description}</h3>
        </div>
      
    </div>
  ) : "";
}

export default GalleryEdit
