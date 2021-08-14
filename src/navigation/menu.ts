import {CustomMenuItem} from "../components/menu";

export const navigationMenu: CustomMenuItem[] = [
    {
        label: "Menu 1",
        router: "menu-1",
        key: 'menu-1'
    },
    {
        label: "Menu 2",
        key: 'menu-2',
        items: [
            {
                label: "Seb Menu 1",
                router: 'submenu1',
                key: 'submenu1'
            },
            {
                label: "Seb Menu 2",
                router: 'submenu2',
                key: 'submenu2'
            },
            {
                label: "Seb Menu 3",
                router: 'submenu3',
                key: 'submenu3'
            },

        ]
    },
    {
        label: "Menu 3",
        router: "menu-3",
        key: 'menu3'
    },
]
