import React, {FunctionComponent, useEffect, useState} from "react";
import {Header} from "../../components/header";
import {CustomMenu} from "../../components/menu";
import {navigationMenu} from "../../navigation/menu";
import {Sidebar} from "../../components/sidebar";

type PageContainerType = {
    children: any;
}

const initialSidebarWidth = 270;
const collapsedSidebarWidth = 80;

export const AdminTemplate: FunctionComponent<PageContainerType> = (props) => {
    const {children} = props;
    const [collapsed, setCollapsed] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(initialSidebarWidth);

    const onHeaderCollapsed = () => {
        setCollapsed(!collapsed);
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
                userInfo={'Mehmet Cüneyt Dalan'}/>
        <Sidebar width={sidebarWidth}>
            <CustomMenu
                menu={navigationMenu}
                collapsed={collapsed}/>
        </Sidebar>
        <div style={{marginLeft: sidebarWidth}}
             className="page-content">
            {children}
        </div>
    </div>
}
