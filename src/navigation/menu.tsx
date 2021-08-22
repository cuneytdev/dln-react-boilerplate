import {CustomMenuItem} from "../components/menu";
import {Icon} from "rsuite";
import React from "react";

export default function getNavigationMenu(intl: any): CustomMenuItem[] {

    return [
        {
            label: intl.formatMessage({id: "menu.menu1"}),
            router: "menu-1",
            key: 'menu-1',
            icon: <Icon icon="bars"/>

        },
        {
            label: intl.formatMessage({id: "menu.menu2"}),
            key: 'menu-2',
            icon: <Icon icon="bars"/>,
            items: [
                {
                    label: intl.formatMessage({id: "menu.subMenu1"}),
                    router: 'submenu1',
                    icon: <Icon icon="bars"/>,
                    key: 'submenu1'
                },
                {
                    label: intl.formatMessage({id: "menu.subMenu2"}),
                    router: 'submenu2',
                    icon: <Icon icon="bars"/>,
                    key: 'submenu2'
                },
                {
                    label: intl.formatMessage({id: "menu.subMenu3"}),
                    router: 'submenu3',
                    icon: <Icon icon="bars"/>,
                    key: 'submenu3'
                },

            ]
        },
        {
            label: intl.formatMessage({id: "menu.menu3"}),
            router: "menu-3",
            icon: <Icon icon="bars"/>,
            key: 'menu3'
        },
    ]
}



