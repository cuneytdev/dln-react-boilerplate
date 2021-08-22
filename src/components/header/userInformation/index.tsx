import React, {FunctionComponent} from 'react';
import {Avatar, Badge, Dropdown, Menu} from "antd";
import {DownOutlined} from '@ant-design/icons';
import SwitchLanguage from '../switchLanguage';
import {useIntl} from "react-intl";

type UserInformationType = {
    user: string;
}

export const UserInformation: FunctionComponent<UserInformationType> = (props) => {
    const {user} = props;
    const intl = useIntl();

    const menu = (
        <Menu>
            <Menu.Item key="1">1st menu item</Menu.Item>
            <Menu.Item key="2">2nd menu item</Menu.Item>
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    );

    return <div className="header-user-information">
        <div className="user-info">
            <SwitchLanguage/>
            <Dropdown overlay={menu}>
                <div>
                    <Badge count={0}>
                        <Avatar shape="square"/>
                    </Badge>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <span>{intl.formatMessage({id: "user.greeting"})}{user}</span>
                    </a>
                    <DownOutlined/>
                </div>
            </Dropdown>
        </div>
    </div>
}
