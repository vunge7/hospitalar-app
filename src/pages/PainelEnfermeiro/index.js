import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Menu } from 'antd';
import { AuthContext } from '../../contexts/auth';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeFilled,
    PoweroffOutlined,
} from '@ant-design/icons';

function PainelEnfermeiro({ children }) {
    const [menu, setmenu] = useState([]);

    useEffect(() => {
        let items;

        items = [
            {
                key: '/enf',
                icon: <HomeFilled />,
                label: 'Home',
            },
            {
                key: '/enf/triagem',
                icon: <HomeFilled />,
                label: 'Triagem',
            },
            {
                key: '/enf/so',
                icon: <HomeFilled />,
                label: 'Sala de Obersavação',
            },
            {
                key: '/enf/bo',
                icon: <HomeFilled />,
                label: 'Bloco Operatório',
            },
            {
                key: '/enf/ce',
                icon: <HomeFilled />,
                label: 'Consultas Externas',
            },
            {
                key: '/enf/pc',
                icon: <HomeFilled />,
                label: 'Permanência de Cirurgua',
            },
            {
                key: '/logout',
                icon: <PoweroffOutlined />,
                label: 'Signout',
                danger: true,
            },
        ];

        setmenu([...items]);
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                height: '100vh',
            }}
        >
            <Header />
            <div
                style={{
                    width: 'auto',
                    display: 'flex',
                    flexDirection: 'row',
                    flex: 1,
                }}
            >
                <SideMenu menu={menu} />
                <Content>{children}</Content>
            </div>
            <Footer />
        </div>
    );
}

function SideMenu(props) {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);
    const onClick = ({ key }) => {
        if (key === '/logout') {
            logout();
        } else navigate(key);
    };
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div>
            <Button
                type="primary"
                onClick={toggleCollapsed}
                style={{
                    marginBottom: 16,
                }}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>

            <Menu
                onClick={({ key }) => onClick({ key })}
                defaultSelectedKeys={[window.location.pathname]}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="light"
                inlineCollapsed={collapsed}
                items={props.menu}
            />
        </div>
    );
}

function Content({ children }) {
    return <div style={{ marginTop: 10, marginLeft: 50 }}>{children}</div>;
}

function Header() {
    return (
        <div
            style={{
                height: 60,
                backgroundColor: '#000',
                color: '#FFF',
                marginBottom: 2,
            }}
        >
            Painel do Enfermeiro
        </div>
    );
}

function Footer() {
    return (
        <div
            style={{
                height: 60,
                backgroundColor: 'lightskyblue',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                fontWeight: 'bold',
            }}
        >
            Footer
        </div>
    );
}

export default PainelEnfermeiro;
