import React, { useState } from 'react';
import { HeartOutlined, HeartFilled, CopyOutlined, EditOutlined } from '@ant-design/icons';
import placeholderImage from "../../assets/placeholder-gallery-image.jpg";
import './GalleryView.less';
import DemoData from "../../../DemoData.json"


export default function GalleryView({searchParams, setSearchParams, filterText, classroomId, privacySetting}){
    const [tab, setTab] = useState(
        searchParams.has('tab') ? searchParams.get('tab') : 'home'
    );
    const [page, setPage] = useState(
        searchParams.has('page') ? parseInt(searchParams.get('page')) : 1
    );

    const [HeartIcon, setHeartIcon] = useState(HeartOutlined);
    const [CopyIcon, setCopyIcon] = useState(CopyOutlined);
    const [EditIcon, setEditIcon] = useState(EditOutlined);

    const handleOpenGallery = (name) => {
        alert("Workspace page will open");
    };

    const handleLike = (name) => {
        alert("Workspace will be liked");
        if (HeartIcon === HeartOutlined)
            setHeartIcon(HeartFilled);
        else
            setHeartIcon(HeartOutlined);
    };

    const handleCopyEdit = (id) => {
        alert("Workspace will be copied/edited");
    }


    // Set workspaceList with the entries from JSON data and filter for privacy setting
    const filteredData = DemoData.entries
        .filter((entry) => entry.privacy.toLowerCase().includes(privacySetting.toLowerCase()));

    // Filters the workspaceList based on input item name or author (not case-sensitive)
    const filteredGallery = filteredData.filter((entry) =>
        entry.author.toLowerCase().includes(filterText.toLowerCase()) |
        entry.name.toLowerCase().includes(filterText.toLowerCase()));

    // The list is displayed as cards and filters as input is typed in the search bar
    // TODO: Check margins if format looks weird
    const galleryList = filteredGallery.map(directory => {
        return (
            <div key={directory.id} id='gallery-class-card'>
                <div id='card-upper-content-container' onClick={() => handleOpenGallery(directory.name)}>
                  <img src={placeholderImage} alt='placeholder'/>
                </div>

                <div id='card-lower-content-container'>
                  <div id='card-lower-left-content-container'>
                    {directory.name}
                  </div>

                  <div id='card-lower-right-content-container'>
                    <button id='likeButton' onClick={() => handleLike(directory.name)}>
                        <HeartIcon/>
                    </button>
                  </div>
                </div>
            </div>
        )
    })
    return (
        <div id='gallery-card-container'>
            {galleryList}
        </div>
    );
}
/*
<button id='copy-edit-button' onClick={() => handleCopyEdit(DemoData.id)}>
                      <CopyIcon size={64} />/
                      <EditIcon size={64} />
                  </button>
*/