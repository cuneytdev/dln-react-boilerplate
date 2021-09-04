import React, {FunctionComponent, useState} from "react";
import {Avatar, Divider, Dropdown, Icon, Nav, Navbar} from "rsuite";
import {useIntl} from "react-intl";
import SwitchLanguage from "./switchLanguage";
import {useHistory} from "react-router-dom";
import classNames from "classnames";

enum MENU_ITEMS {
    LOGOUT = 'logout',
    LOGIN = 'login'
}

type HeaderType = {
    appIcon?: string;
    userInfo?: any;
    showUserInfo?: boolean;
    showMenuItems?: boolean;
    onCollapseButtonClicked?: any;
    appLogoWidth: number,
    collapsable?: boolean;
    showLoginButton?: boolean
}

export const Header: FunctionComponent<HeaderType> = (props) => {
    const {
        onCollapseButtonClicked,
        userInfo,
        collapsable,
        showUserInfo,
        showLoginButton
    } = props;
    const history = useHistory();
    const intl = useIntl();
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapseToggleButtonClicked = () => {
        setCollapsed(!collapsed);
        onCollapseButtonClicked(collapsed);
    }

    const onHandleMenuClicked = (key: string) => {
        switch (key) {
            case MENU_ITEMS.LOGOUT:
                history.push('/');
                break;
            case MENU_ITEMS.LOGIN:
                history.push('/login')
                break;
            default:
                break;
        }
    }

    const navBarClassnames = classNames({
        navbar: true,
        navbarAuthenticated: showUserInfo
    })

    const renderCollapsedButton = () => {
        if (!collapsable) {
            return;
        }
        return <Nav.Item onClick={handleCollapseToggleButtonClicked}>
            {collapsed ? <Icon size="2x" icon="angle-double-right"/> : <Icon size="2x" icon="angle-double-left"/>}
        </Nav.Item>
    }

    const renderUserInfoDropdownHeader = () => {
        return <><Avatar circle>U</Avatar><span className={"user-info-text"}>{intl.formatMessage({id: "user.greeting"}) + userInfo}</span></>
    }

    const renderRightNavbar = () => {
        return <Nav pullRight>
            <SwitchLanguage/>
            {showLoginButton && <Nav.Item onSelect={onHandleMenuClicked} eventKey={MENU_ITEMS.LOGIN}> Login</Nav.Item>}
            {showUserInfo && <> <Divider vertical/>
                <Dropdown className={"user-info"} onSelect={onHandleMenuClicked} title={renderUserInfoDropdownHeader()}>
                    <Dropdown.Item
                        eventKey={MENU_ITEMS.LOGOUT}>{intl.formatMessage({id: "button.logout"})}</Dropdown.Item>
                </Dropdown></>}
        </Nav>
    }

    return <Navbar className={navBarClassnames}>
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
