import { PictureOutlined, SendOutlined } from "@ant-design/icons";
import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";


const MessageForm = (props)=>{
    const [value, setValue] = useState('');
    const { chatID, creds }= props;

    const handleChange = (e) =>{
        
        setValue(e.target.value);

    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        const text = value.trim();

        if(text.length > 0) sendMessage( creds, chatID, { text });

        setValue('');
    }
    const handleUpload = (e) =>{
        sendMessage(creds, chatID, { file: e.target.value , text: ''});
    }
    

    return(
        <form className="message-form" onSubmit={handleSubmit}>
            <input 
                className="message-input"
                placeholder="Send a message...."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon"/>
                </span>
            </label>
            <input 
                type="file" 
                multiple={false}
                id="upload-button"
                style={{ display: 'none' }}
                onChange={handleUpload}
            />
            <button type="submit" className="send-button">
                <SendOutlined  className="send-button"/>
            </button>
            <label></label>
        </form>
    );
}

export default MessageForm;