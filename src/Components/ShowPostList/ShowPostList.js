import React from "react";
import {  } from "antd";
import { getPost } from "../../Service/axiosService";
import { useEffect , useState } from "react";
import TableList from "../Table/Table";

const ShowPostList = (props) => {
    const fetchData = async () => {
        try {
            const results = await getPost();
            props.setChangedList(results.data.locations.reverse());
            console.log(results);
        } catch (error) {
            console.log('error', error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
    <div>
        <TableList setChangedList={props.setChangedList} changedList={props.changedList}/>
    </div>
    );
};

export default ShowPostList;