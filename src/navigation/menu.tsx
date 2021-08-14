import {CustomMenuItem} from "../components/menu";
import {AppstoreOutlined} from "@ant-design/icons";

export const navigationMenu: CustomMenuItem[] = [
    {
        label: "Menu 1",
        router: "menu-1",
        key: 'menu-1',
        icon: <AppstoreOutlined/>
    },
    {
        label: "Menu 2",
        key: 'menu-2',
        icon: <AppstoreOutlined/>,
        items: [
            {
                label: "Seb Menu 1",
                router: 'submenu1',
                icon: <AppstoreOutlined/>,
                key: 'submenu1'
            },
            {
                label: "Seb Menu 2",
                router: 'submenu2',
                icon: <AppstoreOutlined/>,
                key: 'submenu2'
            },
            {
                label: "Seb Menu 3",
                router: 'submenu3',
                icon: <AppstoreOutlined/>,
                key: 'submenu3'
            },

        ]
    },
    {
        label: "Menu 3",
        router: "menu-3",
        icon: <AppstoreOutlined/>,
        key: 'menu3'
    },
]
