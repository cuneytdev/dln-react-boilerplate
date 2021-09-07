import React, {FunctionComponent, useState} from "react";
import {Avatar, Divider, Dropdown, Icon, Nav, Navbar} from "rsuite";
import {useIntl} from "react-intl";
import SwitchLanguage from "./switchLanguage";
import {useHistory} from "react-router-dom";
import classNames from "classnames";
import {CustomMenuItem} from "../menu";

enum MENU_ITEMS {
    LOGOUT = 'logout',
    LOGIN = 'login'
}

type HeaderType = {
    appIcon?: string;
    userInfo?: any;
    showMenuItems?: boolean;
    onCollapseButtonClicked?: any;
    appLogoWidth: number,
    menu?: CustomMenuItem[],
    isMobile?: boolean,
    showDrawer: Function
}

export const Header: FunctionComponent<HeaderType> = (props) => {
    const {
        onCollapseButtonClicked,
        userInfo,
        menu,
        isMobile,
        showDrawer
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
                history.push(key)
        }
    }

    const navBarClassnames = classNames({
        navbar: true,
        navbarAuthenticated: userInfo
    })

    const onShowDrawer = () => {
        showDrawer(true);
    }

    const renderCollapsedButton = () => {
        if (!userInfo || isMobile) {
            return;
        }
        return <Nav.Item onClick={handleCollapseToggleButtonClicked}>
            {collapsed ? <Icon size="2x" icon="angle-double-right"/> : <Icon size="2x" icon="angle-double-left"/>}
        </Nav.Item>
    }

    const renderUserInfoDropdownHeader = () => {
        return <><Avatar circle>U</Avatar><span
            className={"user-info-text"}>{intl.formatMessage({id: "user.greeting"}) + userInfo}</span></>
    }

    const renderTabMenus = () => {
        if (!menu || isMobile) {
            return;
        }
        return menu.map(item => <Nav.Item key={item.key}
                                          onSelect={onHandleMenuClicked}
                                          eventKey={item.router}>{item.label}</Nav.Item>)
    }

    const renderRightNavbar = () => {
        return <Nav pullRight>
            {!userInfo && <Nav.Item onSelect={onHandleMenuClicked}
                                    eventKey={MENU_ITEMS.LOGIN}>
                {intl.formatMessage({id: "button.login"})}
            </Nav.Item>}
            {renderTabMenus()}
            {userInfo && <>
                <Dropdown className={"user-info"}
                          onSelect={onHandleMenuClicked}
                          title={renderUserInfoDropdownHeader()}>
                    <Dropdown.Item
                        eventKey={MENU_ITEMS.LOGOUT}>
                        {intl.formatMessage({id: "button.logout"})}
                    </Dropdown.Item>
                </Dropdown>
                <Divider vertical/></>}
            <SwitchLanguage/>
        </Nav>
    }

    const renderDrawerButton = () => {
        if (!isMobile) {
            return;
        }
        return <div className={"drawer-collapse-button"} onClick={onShowDrawer}><Icon icon={"bars"}/></div>
    }

    return <Navbar className={navBarClassnames}>
        <Navbar.Header>
            {renderDrawerButton()}
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
