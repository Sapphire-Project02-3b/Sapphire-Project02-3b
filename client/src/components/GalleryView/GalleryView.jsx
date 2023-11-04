import React, { useState, useEffect } from 'react';
import { Table, Popconfirm, message } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import {
    getAuthorizedWorkspaces,
    getClassroomWorkspace,
    getSubmission,
    deleteAuthorizedWorkspace,
  } from '../../Utils/requests';


export default function GalleryView({searchParams, setSearchParams, classroomId}){
    const [workspaceList, setWorkspaceList] = useState([]);
    const [tab, setTab] = useState(
      searchParams.has('tab') ? searchParams.get('tab') : 'home'
    );
    const [page, setPage] = useState(
      searchParams.has('page') ? parseInt(searchParams.get('page')) : 1
    );
    useEffect(() => {
      const fetchData = async () => {
        try {
          let wsResponse;
          if (classroomId) {
            wsResponse = await getClassroomWorkspace(classroomId);
          } else {
            wsResponse = await getAuthorizedWorkspaces();
          }
      
          console.log('API Response:', wsResponse);
      
          setWorkspaceList(wsResponse.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
  
      fetchData();
    }, [classroomId]);
    
    const wsColumn = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          editable: true,
          width: '20%',
          align: 'center',
          render: (_, key) => key.name,
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
          editable: true,
          width: '40%',
          align: 'center',
          render: (_, key) => key.description,
        },
        {
          title: 'Open Workspace',
          dataIndex: 'open',
          key: 'open',
          editable: false,
          width: '10%',
          align: 'center',
          render: (_, key) => (
            <Link
              onClick={() =>
                localStorage.setItem('sandbox-activity', JSON.stringify(key))
              }
              to={'/sandbox'}
            >
              Open
            </Link>
          ),
        },
        {
          title: 'Views',
          dataIndex: 'Views',
          key: 'Views',
          editable: true,
          width: '10%',
          align: 'left',
          //will need to change rendering to render the views
          render: (_, key) => key.description,
        },
        {
          title: 'Delete',
          dataIndex: 'delete',
          key: 'delete',
          width: '10%',
          align: 'center',
          render: (_, key) => (
            <Popconfirm
              title={'Are you sure you want to delete this workspace?'}
              icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
              onConfirm={async () => {
                const res = await deleteAuthorizedWorkspace(key.id);
                if (res.err) {
                  message.error(res.err);
                } else {
                  setWorkspaceList(
                    workspaceList.filter((ws) => {
                      return ws.id !== key.id;
                    })
                  );
                  message.success('Delete success');
                }
              }}
            >
              <button id={'link-btn'}>Delete</button>
            </Popconfirm>
          ),
        },
    ];

    return (
        <div>
          <div
            id='content-creator-table-container'
            style={{ marginTop: '6.6vh' }}
          >
            <Table
              columns={wsColumn}
              dataSource={workspaceList}
              rowClassName='editable-row'
              rowKey='id'
              onChange={(Pagination) => {
                setPage(Pagination.current);
                setSearchParams({ tab, page: Pagination.current });
              }}
              pagination={{ current: page ? page : 1 }}
            ></Table>
          </div>
        </div>
    )
}