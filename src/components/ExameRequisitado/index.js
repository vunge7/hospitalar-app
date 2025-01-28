import React from 'react';
import { CaretRightOutlined, SettingOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const getItems = (panelStyle) => [
    {
        key: '1',
        label: 'This is panel header 1',
        children: <p>{text}</p>,
        style: panelStyle,
        extra: genExtra(),
    },
    {
        key: '2',
        label: 'This is panel header 2',
        children: <p>{text}</p>,
        style: panelStyle,
        extra: genExtra(),
    },
    {
        key: '3',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
        style: panelStyle,
        extra: genExtra(),
    },
];

const genExtra = () => <span>Progresso</span>;
const ExameRequisitado = () => {
    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 9,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };
    return (
        <div
            style={{
                flexDirection: 'row',
            }}
        >
            <form>
                <div style={{ marginBottom: 10 }}>
                    <button onClick={(e) => e.preventDefault()}>
                        Adicionar
                    </button>
                </div>
            </form>

            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
                style={{
                    background: token.colorBgContainer,
                }}
                items={getItems(panelStyle)}
            />
        </div>
    );
};
export default ExameRequisitado;
