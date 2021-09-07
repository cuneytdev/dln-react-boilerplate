import React, {useEffect, useState} from 'react';
import CustomMenu, {CustomMenuItem} from "../menu";
import {Header} from "../header";
import {Sidebar} from "../sidebar";
import CustomDrawer from "../drawer";

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
    const [isMobile, setIsMobile] = useState<boolean>();
    const [showDrawer, setShowDrawer] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
            setCollapsed(false);
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
    }, [])

    useEffect(() => {
        if (collapsed) {
            setSidebarWidth(collapsedSidebarWidth)
        } else {
            setSidebarWidth(initialSidebarWidth)
        }
    }, [collapsed]);

    const onHeaderCollapsed = () => {
        setCollapsed(!collapsed);
    }

    const renderSidebar = () => {
        if (!showSidebar || isMobile) {
            return;
        }
        return <Sidebar width={sidebarWidth}>
            <CustomMenu
                menu={sidebarMenu}
                collapsed={collapsed}/>
        </Sidebar>
    }

    const contentStyles = () => {
        if (isMobile || !showSidebar) {
            return {marginLeft: 0}
        }
        return {marginLeft: sidebarWidth}
    }

    return <div>
        <Header onCollapseButtonClicked={onHeaderCollapsed}
                menu={tabMenu}
                isMobile={isMobile}
                showDrawer={setShowDrawer}
                appLogoWidth={sidebarWidth}
                userInfo={userInfo}/>
        <CustomDrawer size={"xs"} placement={"left"} show={showDrawer} onHide={setShowDrawer}>
            <CustomMenu
                menu={userInfo ? sidebarMenu : tabMenu}
                collapsed={collapsed}/>
        </CustomDrawer>
        {renderSidebar()}
        <div style={contentStyles()} className="content">
            {children}
        </div>
    </div>
}
