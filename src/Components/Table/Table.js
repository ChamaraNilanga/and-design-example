import React, { useState } from "react";
import { Button, Table , message } from "antd";
import { deletePost } from "../../Service/axiosService";
import ConfirmAlert from "../ConfirmAlert/ConfirmAlert";

const TableList = (props) => {
    const {changedList,setChangedList} = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState('');

    const deleteLocation = async () => {
        console.log('id', id);
        try {
            const results = await deletePost(id);
            console.log('results', results.status);
            if(results.status === 200) {
                console.log('res',results)
                message.success('Location Deleted Successfully');
                setChangedList(changedList.filter((item) => item.id !== id));
                setIsModalOpen(false);
            }
        } catch (error) {
            console.log('error', error);
            message.error(error.response.data.message);
            setIsModalOpen(false);
        }
    }

    const deleteLocationModalShow = (id) => {
        setId(id);
        setIsModalOpen(true);
    }

    const deleteLocationModalHide = () => {
        setIsModalOpen(false);
    }

    const columns = [
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
            width : '250px'
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'action',
            width : '50px',
            render: (_, record) => (
                    <Button onClick={() => deleteLocationModalShow(record.id)} danger ghost>Delete</Button>
                )
          }
      ];
  return (
    <div className="scrollable-table-container">
        <ConfirmAlert isModalOpen={isModalOpen} deleteLocation={deleteLocation} handleCancel={deleteLocationModalHide}/>
        <Table 
            style={{
                maxWidth: '90%',
                width: '700px !important',
                marginTop : 50,
                alignContent : 'center'
            }}
            dataSource={props.changedList} columns={columns} />;
    </div>
  );
}

export default TableList;