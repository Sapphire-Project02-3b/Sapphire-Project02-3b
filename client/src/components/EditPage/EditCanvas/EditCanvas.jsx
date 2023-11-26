import React from 'react';
import PublicCanvas from '../../ActivityPanels/BlocklyCanvasPanel/canvas/PublicCanvas';
import StudentCanvas from '../../ActivityPanels/BlocklyCanvasPanel/canvas/StudentCanvas';
import MentorCanvas from '../../ActivityPanels/BlocklyCanvasPanel/canvas/MentorCanvas';
import ContentCreatorCanvas from '../../ActivityPanels/BlocklyCanvasPanel/canvas/ContentCreatorCanvas';
import PublicEdit from "./PublicEdit";
import { useGlobalState } from '../../../Utils/userState';

const EditCanvas = ({ activity, isSandbox, setActivity }) => {
    const [value] = useGlobalState('currUser');

    const userRole = value.role;

    switch (userRole) {
        case 'DefaultUser':
            return <PublicEdit activity={activity} isSandbox={isSandbox} />;
        case 'Student':
            return <StudentCanvas activity={activity} />;
        case 'Mentor':
            return <MentorCanvas
                activity={activity}
                setActivity={setActivity}
                isSandbox={isSandbox}
                isMentorActivity={!activity.selectedToolbox && !isSandbox}
            />;
        case 'ContentCreator':
            return (
                <ContentCreatorCanvas
                    activity={activity}
                    setActivity={setActivity}
                    isSandbox={isSandbox}
                    isMentorActivity={!activity.selectedToolbox && !isSandbox}
                />
            );
        default:
            return <div></div>;
    }
};

export default EditCanvas;
