import React from "react";
import PostAddForm from "../PostAddForm/PostAddFrom";
import ShowPostList from "../ShowPostList/ShowPostList";
import { useState , CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {Button} from 'antd'

const LocationPage = () => {    
    const [changedList, setChangedList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    return (
    <div>
        <h1 style={{textAlign: 'center'}}>Location Page</h1>
        <Button type="primary" onClick={showModal}>
            Add New Location
        </Button>
        <PostAddForm  setChangedList={setChangedList} changedList={changedList} setLoading={setLoading} isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>
        <ShowPostList setChangedList={setChangedList} changedList={changedList} setLoading={setLoading}/>
        <ClipLoader
            color={"#ffffff"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </div>
    );
}

export default LocationPage;