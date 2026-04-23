import React, { useState } from 'react';
import { AppstoreOutlined, LoginOutlined, MailOutlined, ProfileFilled, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router';
import { ThermometerSnowflake } from 'lucide-react';

type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
  {
    label: (<Link to="/login">Login</Link>),
    key: 'login',
    icon: <LoginOutlined />,
  },
  {
    label: (<Link to="/signup">Sign Up</Link>),
    key: 'signup',
    icon: <ProfileFilled />,
  },
  {
    label: (<Link to="/task">Task</Link>),
    key: 'task',
    icon: <ThermometerSnowflake />,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          { label: 'Option 1', key: 'setting:1' },
          { label: 'Option 2', key: 'setting:2' },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          { label: 'Option 3', key: 'setting:3' },
          { label: 'Option 4', key: 'setting:4' },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: (
      <Link to="/signup">Link</Link>
    ),
  },
];

const MenuComponent: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default MenuComponent;