import { Button , Form , Input , TextArea} from 'antd';
import React, { useState } from 'react';
import { addPost } from '../../Service/axiosService';
import ClipLoader from 'react-spinners/ClipLoader';
import { useMessageContext } from '../ContextApis/MessageContext';
import { Modal } from 'antd';

const PostAddForm = (props) => {
    const { message, setMessage, messageType, setMessageType, } = useMessageContext();

    console.log('message', message);
    console.log(messageType);

    const {changedList,setChangedList,setLoading,loading,isModalOpen,handleOk,handleCancel} = props;
    const [ newList , setNewList] = useState([]);
    const [location, setLocation] = useState('');
    const onFinish = async (values) => {
        setLoading(true);
        console.log('Success:', values);
        const requestBody = {
            location: location
        }
       try{ 
        const results = await addPost(requestBody);
        console.log('results', results);
        if(results.status === 201 || results.status === 200) {
            setLoading(false);
            console.log('res',results)
            setMessage('Location Added Successfully');
            setMessageType('success');
            setChangedList((list) => [...list,{...requestBody , id : results.data.location_id}].reverse());
            console.log('props.changedList', newList);
            handleOk();
        }} catch (error) {
            setLoading(false);
            console.log('error', error);
            setMessage(error.response.data.message);
            setMessageType('error');
            handleOk();
        }
    }
    return (
        <div>  
            <Modal title="Modal" open={isModalOpen} onOk={onFinish} onCancel={handleCancel}>
            <Form  
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                    marginTop : 50
                }}
                initialValues={{
                    remember: false,
                }}
                onFinish={onFinish}
                //   onFinishFailed={onFinishFailed}
                autoComplete="off">
                    <Form.Item
                    label="Location"
                    name="location"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your location!',
                        },
                    ]}
                    >
                    <Input placeholder="Enter Post Title" onChange={(e)=>setLocation(e.target.value)}/>
                    </Form.Item>
                    {/* <Form.Item
                    label="Body"
                    name="body"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your post content!',
                        },
                    ]}
                    >
                    <Input.TextArea rows={4} placeholder="Enter Post Content"/>
                    </Form.Item> */}
                    {/* <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    </Form.Item> */}
                </Form>
                {/* <ClipLoader
                    color={"#ffffff"}
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> */}
            </Modal> 
            </div>
    );};

export default PostAddForm;