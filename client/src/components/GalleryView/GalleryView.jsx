import React, { useState } from 'react';
import { HeartOutlined, HeartFilled, CopyOutlined, EditOutlined } from '@ant-design/icons';
import './GalleryView.less';
import DemoData from '../../../DemoData.json';
import GalleryEdit from '../GalleryEdit/GalleryEdit';

export default function GalleryView({searchParams,setSearchParams,filterText,classroomId, privacySetting,}) {
  const [tab, setTab] = useState(
    searchParams.has('tab') ? searchParams.get('tab') : 'home'
  );
  const [page, setPage] = useState(
    searchParams.has('page') ? parseInt(searchParams.get('page')) : 1
  );

  // Modify the state management for each gallery
  const [galleryStates, setGalleryStates] = useState(
    DemoData.entries.map(() => ({
      HeartIcon: HeartOutlined,
      CopyIcon: CopyOutlined,
      EditIcon: EditOutlined,
      GalleryEditBtn: false,
    }))
  );

  const handleOpenGallery = () => {
    alert('Workspace page will open');
  };

  const handleLike = (index) => {
    alert('Workspace will be liked');
    setGalleryStates((prevStates) => {
      const updatedStates = [...prevStates];
      const newHeartIcon =
        prevStates[index].HeartIcon === HeartOutlined
          ? HeartFilled
          : HeartOutlined;
      updatedStates[index] = { ...prevStates[index], HeartIcon: newHeartIcon };
      return updatedStates;
    });
  };

  const handleCopyEdit = (index, value) => {
    setGalleryStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = { ...prevStates[index], GalleryEditBtn: value };
      return updatedStates;
    });
  };

  // Set workspaceList with the entries from JSON data and filter for privacy setting
  const filteredData = DemoData.entries.filter((entry) =>
    entry.privacy.toLowerCase().includes(privacySetting.toLowerCase())
  );

  // Filters the workspaceList based on input item name or author (not case-sensitive)
  const filteredGallery = filteredData.filter(
    (entry) =>
      entry.author.toLowerCase().includes(filterText.toLowerCase()) ||
      entry.name.toLowerCase().includes(filterText.toLowerCase())
  );

  // The list is displayed as cards and filters as input is typed in the search bar
  const galleryList = filteredGallery.map((directory, index) => {
    const {
      HeartIcon: GalleryHeartIcon,
      CopyIcon: GalleryCopyIcon,
      EditIcon: GalleryEditIcon,
      GalleryEditBtn: GalleryEditBtnState,
    } = galleryStates[index];

    return (
      <div key={directory.id} id="gallery-class-card">
        <div id="card-left-content-container">
          <h1 id="card-title">{directory.name}</h1>
          <h1 id="card-title">Created by: {directory.author}</h1>
          <div id="card-button-container" className="flex flex-row">
            <button onClick={() => handleOpenGallery()}>Open</button>
          </div>
        </div>
        <div id="card-right-content-container">
          <button
            id="likeButton"
            style={{ marginBottom: '0vh' }}
            onClick={() => handleLike(index)}
          >
            <GalleryHeartIcon size={64} />
          </button>
          <button
            id="copy-edit-button"
            onClick={() => handleCopyEdit(index, true)}
          >
            <GalleryCopyIcon size={64} style={{ marginTop: '0vh' }} />/
            <GalleryEditIcon size={64} style={{ marginTop: '0vh' }} />
          </button>
          <GalleryEdit
            trigger={GalleryEditBtnState}
            setTrigger={(value) => handleCopyEdit(index, value)}
            name={directory.name}
            author={directory.author}
            description={directory.description}
          >
            <h3>Edit</h3>
          </GalleryEdit>
          <div
            id="divider"
            style={{ marginTop: '0vh', marginBottom: '2vh' }}
          />
          <div id="student-number-container">
            <h1 id="number">0</h1>
            <p id="label">Views</p>
          </div>
        </div>
      </div>
    );
  });

  return <div id="gallery-card-container">{galleryList}</div>;
}
