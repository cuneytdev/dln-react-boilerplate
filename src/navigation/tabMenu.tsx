import {CustomMenuItem} from "../components/menu";
import {Icon} from "rsuite";
import React from "react";

export default function getNavigationTabMenu(intl: any): CustomMenuItem[] {
    return [
        {
            label: intl.formatMessage({id: "menu.menu1"}),
            router: "menu-1",
            key: 'menu-1',
            icon: <Icon icon="bars"/>

        },
        {
            label: intl.formatMessage({id: "menu.menu3"}),
            router: "menu-3",
            icon: <Icon icon="bars"/>,
            key: 'menu3'
        },
    ]
}
