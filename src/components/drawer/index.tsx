import React from 'react';
import {Drawer} from "rsuite";
import {TypeAttributes} from 'rsuite/es/@types/common';

type Placement4 = TypeAttributes.Placement4;
type Size = TypeAttributes.Size;

type CustomDrawerType = {
    size: Size;
    placement: Placement4;
    show: boolean;
    title?: string;
    children: any,
    onHide: Function
}

export default function CustomDrawer(props: CustomDrawerType) {
    const {size, placement, show, title, children, onHide} = props;

    const onHideDrawer = () => {
        onHide(false)
    }

    return <Drawer
        size={size}
        placement={placement}
        show={show}
        onHide={onHideDrawer}>
        <Drawer.Header>
            <Drawer.Title>{title}</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
            {children}
        </Drawer.Body>
    </Drawer>
}
