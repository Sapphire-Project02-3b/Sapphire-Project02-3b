import React, {useState} from 'react'
import './GalleryEdit.less'

function GalleryEdit(props) {

    
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>x</button>
            {props.children}
            <h2>{props.gallery.name}</h2>
        </div>
      
    </div>
  ) : "";
}

export default GalleryEdit
