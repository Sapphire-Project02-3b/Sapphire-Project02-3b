import React, {useState} from 'react'
import './GalleryEdit.less'
import EditPage from '../EditPage/EditPage'
import BlocklyPage from "../../views/BlocklyPage/BlocklyPage";
import { CloseOutlined } from '@ant-design/icons';

function GalleryEdit(props) {


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
