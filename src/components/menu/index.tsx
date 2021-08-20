import React, {FunctionComponent} from "react";
import {Menu} from "antd";
import SubMenu from "antd/lib/menu/SubMenu";

export type CustomMenuItem = {
    label: string;
    router?: string;
    items?: CustomMenuItem[];
    icon?: any;
    key: string;
    [key: string]: any
}

type CustomMenuType = {
    menu?: CustomMenuItem[];
    collapsed: boolean;
}

export const CustomMenu: FunctionComponent<CustomMenuType> = (props) => {
    const {menu, collapsed} = props;

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
        return <Menu.Item key={menuItem.key} icon={menuItem.icon}>{menuItem.label}</Menu.Item>
    }

    return (
        <div style={{width: '100%'}}>
            <Menu
                mode="inline"
                inlineCollapsed={collapsed}>
                {menu?.map((item) => renderMenuItems(item))}
            </Menu>
        </div>
    );
}

