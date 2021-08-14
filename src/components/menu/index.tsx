import React, {FunctionComponent, useState} from "react";
import {Menu} from "antd";
import SubMenu from "antd/lib/menu/SubMenu";

export type CustomMenuItem = {
    label: string;
    router?: string;
    items?: CustomMenuItem[];
    icon?: any;
    key: string
}

type CustomMenuType = {
    menu?: CustomMenuItem[];
}

export const CustomMenu: FunctionComponent<CustomMenuType> = (props) => {
    const {menu} = props;
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    const renderMenuItems = (menuItem: CustomMenuItem) => {
        if (menuItem.items) {
            return <SubMenu key={menuItem.key} icon={menuItem.icon} title={menuItem.label}>
                {menuItem.items.map(item => renderMenuItem(item))}
            </SubMenu>
        } else {
            return renderMenuItem(menuItem);
        }
    }

    const renderMenuItem = (menuItem: CustomMenuItem) => {
        return <Menu.Item key={menuItem.key}>{menuItem.label}</Menu.Item>
    }

    return (
        <div style={{width: 256}}>
            {/*<Button type="primary"
                    onClick={toggleCollapsed} style={{marginBottom: 16}}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>*/}
            <Menu
                mode="inline"
                inlineCollapsed={collapsed}>
                {menu?.map((item) => renderMenuItems(item))}
            </Menu>
        </div>
    );
}

