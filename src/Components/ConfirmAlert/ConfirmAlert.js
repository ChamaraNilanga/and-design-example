import React from "react";
import { Alert , Space , Button , Modal } from "antd";

const ConfirmAlert = (props) => {
    const { handleCancel , deleteLocation , isModalOpen} = props;
    return (
        <div>
            <Modal title="Modal" open={isModalOpen} onOk={deleteLocation} onCancel={handleCancel}>
                <h3>Are you sure you want to delete this location?</h3>
            </Modal>
        </div>
    );
}

export default ConfirmAlert;