import {CustomMenuItem} from "../components/menu";
import {Icon} from "rsuite";
import React from "react";

export default function getNavigationTabMenu(intl: any): CustomMenuItem[] {
    return [
        {
            label: intl.formatMessage({id: "menu.services"}),
            router: "services",
            key: 'services',
            icon: <Icon icon="bars"/>

        },
        {
            label: intl.formatMessage({id: "menu.faq"}),
            router: "faq",
            icon: <Icon icon="bars"/>,
            key: 'menu3'
        },
        {
            label: intl.formatMessage({id: "menu.contact"}),
            router: "contact",
            icon: <Icon icon="bars"/>,
            key: 'menu3'
        },
        {
            label: intl.formatMessage({id: "menu.login"}),
            router: "login",
            icon: <Icon icon="bars"/>,
            key: 'menu3'
        }
    ]
}
