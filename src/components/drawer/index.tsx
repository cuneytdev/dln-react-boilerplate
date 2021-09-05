import React, {useState} from 'react';
import {Drawer} from "rsuite";
import {TypeAttributes} from "rsuite/es/@types/common";
import Size = TypeAttributes.Size;
import Placement4 = TypeAttributes.Placement4;

type CustomDrawerType = {
    size: Size;
    placement: Placement4;
    show: boolean;
    children: any;
    title?: string
}

export default function CustomDrawer(props: CustomDrawerType) {
    const {size, placement, show, children, title} = props;
    const [showDrawer, setShowDrawer] = useState(show)

    const onHideDrawer = () => {
        setShowDrawer(false)
    }

    return <Drawer
        size={size}
        placement={placement}
        show={showDrawer}
        onHide={onHideDrawer}>
        <Drawer.Header>
            <Drawer.Title>{title}</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
            {children}
        </Drawer.Body>
    </Drawer>
}
