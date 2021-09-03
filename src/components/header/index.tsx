import React, {FunctionComponent, useState} from "react";
import {Avatar, Divider, Dropdown, Icon, Nav, Navbar} from "rsuite";
import {useIntl} from "react-intl";
import SwitchLanguage from "./switchLanguage";
import {useHistory} from "react-router-dom";

enum MENU_ITEMS {
    LOGOUT = 'logout'
}

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
        collapsable,
    } = props;
    const history = useHistory();
    const intl = useIntl();
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapseToggleButtonClicked = () => {
        setCollapsed(!collapsed);
        onCollapseButtonClicked(collapsed);
    }

    const onHandleMenuClicked = (key: string) => {
        console.log(key);
        if (key === MENU_ITEMS.LOGOUT) {
            history.push('/')
        }
    }

    const renderCollapsedButton = () => {
        if (!collapsable) {
            return;
        }
        return <Nav.Item onClick={handleCollapseToggleButtonClicked}>
            {collapsed ? <Icon size="2x" icon="angle-double-right"/> : <Icon size="2x" icon="angle-double-left"/>}
        </Nav.Item>
    }

    const renderRightNavbar = () => {
        return <Nav pullRight>
            <SwitchLanguage/>
            {userInfo && <> <Divider vertical/>
                <Nav.Item> <Avatar circle>U</Avatar></Nav.Item>
                <Dropdown onSelect={onHandleMenuClicked} title={intl.formatMessage({id: "user.greeting"}) + userInfo}>
                    <Dropdown.Item
                        eventKey={MENU_ITEMS.LOGOUT}>{intl.formatMessage({id: "button.logout"})}</Dropdown.Item>
                </Dropdown></>}
        </Nav>
    }

    return <Navbar className={"navbar"}>
        <Navbar.Header>
            <a href="/" className="navbar-logo">DLN APP</a>
        </Navbar.Header>
        <Navbar.Body>
            <Nav>
                {renderCollapsedButton()}
            </Nav>
            {renderRightNavbar()}
        </Navbar.Body>
    </Navbar>
}
