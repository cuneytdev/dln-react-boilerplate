import React, {FunctionComponent, useEffect, useState} from "react";
import {Header} from "../header";
import {CustomMenu} from "../menu";
import {navigationMenu} from "../../navigation/menu";
import {Sidebar} from "../sidebar";

type PageContainerType = {
    children: any;
}

const initialSidebarWidth = 300;

export const PageContainer: FunctionComponent<PageContainerType> = (props) => {
    const {children} = props;
    const [collapsed, setCollapsed] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(initialSidebarWidth);

    const onHeaderCollapsed = () => {
        setCollapsed(!collapsed);
    }

    useEffect(() => {
        if (collapsed) {
            setSidebarWidth(80)
        } else {
            setSidebarWidth(initialSidebarWidth)
        }
    }, [collapsed])
    return <div>
        <Header onCollapseButtonClicked={onHeaderCollapsed}/>
        <Sidebar width={sidebarWidth}>
            <CustomMenu menu={navigationMenu} collapsed={collapsed}/>
        </Sidebar>
        <div style={{marginLeft: sidebarWidth}} className="page-content">
            {children}
        </div>
    </div>

}
