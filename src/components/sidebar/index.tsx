import React, {FunctionComponent} from 'react';

type SidebarType = {
    children: any;
    width?: number;
}

export const Sidebar: FunctionComponent<SidebarType> = (props) => {
    const {children, width} = props;
    return <div style={{width}} className="sidebar-container">
        {children}
    </div>
}
