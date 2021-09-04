import React, {FunctionComponent, useEffect, useState} from "react";
import {Header} from "../../components/header";
import {Sidebar} from "../../components/sidebar";
import CustomMenu from "../../components/menu";
import {useIntl} from "react-intl";
import getNavigationMenu from "../../navigation/menu";

type PageContainerType = {
    children: any;
}

const initialSidebarWidth = 270;
const collapsedSidebarWidth = 56;

export const AdminTemplate: FunctionComponent<PageContainerType> = (props) => {
    const {children} = props;
    const intl = useIntl();
    const [collapsed, setCollapsed] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(initialSidebarWidth);

    const onHeaderCollapsed = () => {
        setCollapsed(!collapsed);
    }

    const getMenu = () => {
        return getNavigationMenu(intl);
    }

    useEffect(() => {
        if (collapsed) {
            setSidebarWidth(collapsedSidebarWidth)
        } else {
            setSidebarWidth(initialSidebarWidth)
        }
    }, [collapsed])

    return <div>
        <Header onCollapseButtonClicked={onHeaderCollapsed}
                collapsable
                appLogoWidth={sidebarWidth}
                showUserInfo
                userInfo={'Mehmet Cüneyt Dalan'}/>
        <Sidebar width={sidebarWidth}>
            <CustomMenu
                menu={getMenu()}
                collapsed={collapsed}/>
        </Sidebar>
        <div style={{marginLeft: sidebarWidth}}
             className="page-content">
            {children}
        </div>
    </div>
}
