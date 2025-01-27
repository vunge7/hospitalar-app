import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Menu } from 'antd';
import { AuthContext } from '../../contexts/auth';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    DashboardOutlined,
    HomeFilled,
    PoweroffOutlined,
    UserOutlined,
    UserAddOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons';

function PainelAdministrativo({ children }) {
    const [menu, setmenu] = useState([]);

    useEffect(() => {
        let items;

        items = [
            {
                key: '/admin',
                icon: <HomeFilled />,
                label: 'Home',
            },
            {
                key: '/admin/dashboard',
                icon: <DashboardOutlined />,
                label: 'Dashbord',
            },
            {
                key: '/admin/paciente',
                icon: <UserAddOutlined />,
                label: 'Paciente',
            },
            {
                key: '4',
                icon: <UnorderedListOutlined />,
                label: 'Documentos',
            },
            {
                key: '/userList',
                icon: <UnorderedListOutlined />,
                label: 'Lista de Usuários',
                children: [
                    { label: 'Usuários Activos', key: 'userActivos' },
                    { label: 'Usuários Desactivos', key: 'userDesactivos' },
                ],
            },
            {
                key: '6',
                icon: <UserOutlined />,
                label: 'Perfil',
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
                height: 80,
                backgroundColor: '#506175',
                color: '#FFF',
                marginBottom: 2,
            }}
        >
            Painel Administrativo
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

export default PainelAdministrativo;
