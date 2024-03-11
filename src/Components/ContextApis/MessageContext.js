import React, { createContext, useState, useContext } from 'react';
import { message as DisplayMessage } from 'antd';

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("success");
  
    const contextValue = {
      message,
      setMessage,
      messageType,
      setMessageType,
    };

    const showMessage = () => {
        switch(messageType) {
            case 'success' : 
            return DisplayMessage.success(message);
            case 'error' :
            return DisplayMessage.error(message);
            default :
            return DisplayMessage.info(message);
        }
    };
  
    return (
        <>
      <MessageContext.Provider value={contextValue}>
        {children}
      </MessageContext.Provider>
       { showMessage()}
       </>
    );
  };
  
  export const useMessageContext = () => {
    const context = useContext(MessageContext);
    if (!context) {
      throw new Error('useIpContext must be used within an IpProvider');
    }
    return context;
  };