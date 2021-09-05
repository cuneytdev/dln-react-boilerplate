import React, {useEffect, useState} from 'react';
import CustomMenu, {CustomMenuItem} from "../menu";
import {Header} from "../header";
import {Sidebar} from "../sidebar";

type LayoutWrapperType = {
    sidebarMenu?: CustomMenuItem[],
    tabMenu?: CustomMenuItem[],
    children: any,
    showSidebar: boolean,
    userInfo?: any
}

const initialSidebarWidth = 270;
const collapsedSidebarWidth = 56;

export default function LayoutWrapper(props: LayoutWrapperType) {
    const {sidebarMenu, children, showSidebar, userInfo, tabMenu} = props;
    const [collapsed, setCollapsed] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(initialSidebarWidth);

    useEffect(() => {
        if (collapsed) {
            setSidebarWidth(collapsedSidebarWidth)
        } else {
            setSidebarWidth(initialSidebarWidth)
        }
    }, [collapsed])

    const onHeaderCollapsed = () => {
        setCollapsed(!collapsed);
    }

    const renderSidebar = () => {
        if (!showSidebar) {
            return;
        }
        return <Sidebar width={sidebarWidth}>
            <CustomMenu
                menu={sidebarMenu}
                collapsed={collapsed}/>
        </Sidebar>
    }

    return <div>
        <Header onCollapseButtonClicked={onHeaderCollapsed}
                menu={tabMenu}
                appLogoWidth={sidebarWidth}
                userInfo={userInfo}/>
        {renderSidebar()}
        <div style={userInfo && {marginLeft: sidebarWidth}} className="content">
            {children}
        </div>
    </div>
}
