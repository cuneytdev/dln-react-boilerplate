import React, {FunctionComponent, useState} from "react";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {Avatar, Badge} from "antd";

type HeaderType = {
    appIcon?: string;
    userInfo?: any;
    showUserInfo?: boolean;
    showMenuItems?: boolean;
    onCollapseButtonClicked?: any;
    appLogoWidth: number
}

export const Header: FunctionComponent<HeaderType> = (props) => {
    const {showMenuItems, onCollapseButtonClicked, appLogoWidth} = props;
    const headerTitle = 'Company';
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapseToggleButtonClicked = () => {
        console.log("on collapse button clicked");
        setCollapsed(!collapsed);
        onCollapseButtonClicked(collapsed);
    }

    const renderCollapsedButton = () => {
        return collapsed
            ? <MenuUnfoldOutlined onClick={handleCollapseToggleButtonClicked}/>
            : <MenuFoldOutlined onClick={handleCollapseToggleButtonClicked}/>
    }

    const renderCollapsedAppIcon = () => {
        return <div className="header-logo">
            <div style={{width: appLogoWidth}} className={collapsed ? 'collapsed' : ''}>
                <span>LOGO</span>
                <a href="/">{!collapsed ? headerTitle : ''}</a>
            </div>
        </div>
    }

    const renderHeaderMenu = () => {
        if (!showMenuItems) {
            return;
        }
        return <nav>
            <a href="#">Home</a>
            <a href="#" className="selected">Blog</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
            <a href="#">Faq</a>
            <a href="#">Contact</a>
        </nav>
    }

    const renderUserInformation = () => {
        return <div className="header-user-information">
            <Badge count={5}>
                <Avatar shape="square" size="large"/>
            </Badge>
            <div className="user-info">
                <span>Hi, </span>
                Mehmet Cüneyt Dalan
            </div>
        </div>
    }

    return <header className="header-container">
        <div className="header">
            {renderCollapsedAppIcon()}
            <div className="collapse-menu-container">
                {renderCollapsedButton()}
            </div>
            <div className="header-menu">
                {renderHeaderMenu()}
            </div>
            {renderUserInformation()}
        </div>

    </header>
}
