import React from 'react';
import { message } from 'antd';

// import { Container } from './styles';

function MessageUtil(props) {
    const [messageApi, contextHolder] = message.useMessage();

    const success = (msg) => {
        messageApi.open({
            type: 'success',
            content: msg,
        });
    };
    const error = (msg) => {
        messageApi.open({
            type: 'error',
            content: msg,
        });
    };

    const alerta = (value) => {
        if (value) return success;
        return error();
    };

    return alerta(props.name);
}

export default MessageUtil;
