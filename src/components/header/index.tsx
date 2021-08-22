import React, {FunctionComponent, useState} from "react";
import {Avatar, Divider, Dropdown, Icon, Nav, Navbar} from "rsuite";
import {useIntl} from "react-intl";
import SwitchLanguage from "./switchLanguage";

type HeaderType = {
    appIcon?: string;
    userInfo?: any;
    showUserInfo?: boolean;
    showMenuItems?: boolean;
    onCollapseButtonClicked?: any;
    appLogoWidth: number,
    collapsable?: boolean;
}

export const Header: FunctionComponent<HeaderType> = (props) => {
    const {
        onCollapseButtonClicked,
        userInfo,
        collapsable
    } = props;
    const intl = useIntl();
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapseToggleButtonClicked = () => {
        setCollapsed(!collapsed);
        onCollapseButtonClicked(collapsed);
    }

    const renderCollapsedButton = () => {
        if (!collapsable) {
            return;
        }
        return <Nav.Item onClick={handleCollapseToggleButtonClicked}>
            {collapsed ? <Icon size="2x" icon="angle-double-right"/> : <Icon size="2x" icon="angle-double-left"/>}
        </Nav.Item>
    }

    return <Navbar className={"navbar"}>
        <Navbar.Header>
            <a href="#" className="navbar-logo">DLN APP</a>
        </Navbar.Header>
        <Navbar.Body>
            <Nav>
                {renderCollapsedButton()}
            </Nav>
            <Nav pullRight>
                <SwitchLanguage/>
                <Divider vertical/>
                <Nav.Item> <Avatar circle>U</Avatar></Nav.Item>
                <Dropdown title={intl.formatMessage({id: "user.greeting"}) + userInfo}>
                    <Dropdown.Item>Logout</Dropdown.Item>
                </Dropdown>
            </Nav>
        </Navbar.Body>
    </Navbar>
}
