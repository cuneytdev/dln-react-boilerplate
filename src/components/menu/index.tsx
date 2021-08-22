import React from "react";
import {Dropdown, Nav, Sidenav} from "rsuite";

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

export default function CustomMenu(props: CustomMenuType) {
    const {menu, collapsed} = props;

    const renderMenuItems = (menuItem: CustomMenuItem) => {
        if (menuItem.items) {
            return <Dropdown
                placement="rightStart"
                eventKey={menuItem.key}
                title={menuItem.label}
                icon={menuItem.icon}>
                {menuItem.items.map(item => <Dropdown.Item icon={menuItem.icon} eventKey={item.key}>{item.label}</Dropdown.Item>)}
            </Dropdown>
        } else {
            return renderMenuItem(menuItem);
        }
    }

    const renderMenuItem = (menuItem: CustomMenuItem) => {
        return <Nav.Item eventKey={menuItem.key} icon={menuItem.icon}>{menuItem.label}</Nav.Item>
    }

    return <Sidenav
        expanded={!collapsed}>
        <Sidenav.Body>
            <Nav>
                {menu?.map((item) => renderMenuItems(item))}
            </Nav>
        </Sidenav.Body>
    </Sidenav>
}

