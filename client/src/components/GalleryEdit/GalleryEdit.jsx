import React from 'react'
import './GalleryEdit.less'
import EditPage from '../EditPage/EditPage'
import { CloseOutlined } from '@ant-design/icons';

function GalleryEdit(props) {

    // Creates a popup window for the edit mode
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>
                    <CloseOutlined/>
                </button>
                {props.children}

                <div>
                    <EditPage/>
                </div>
            </div>

        </div>
    ) : "";
}

export default GalleryEdit
