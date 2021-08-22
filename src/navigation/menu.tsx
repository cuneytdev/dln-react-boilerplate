import {CustomMenuItem} from "../components/menu";
import {AppstoreOutlined} from "@ant-design/icons";

export default function getNavigationMenu(intl: any): CustomMenuItem[] {

    return [
        {
            label: intl.formatMessage({id: "menu.menu1"}),
            router: "menu-1",
            key: 'menu-1',
            icon: <AppstoreOutlined/>
        },
        {
            label: intl.formatMessage({id: "menu.menu2"}),
            key: 'menu-2',
            icon: <AppstoreOutlined/>,
            items: [
                {
                    label: intl.formatMessage({id: "menu.subMenu1"}),
                    router: 'submenu1',
                    icon: <AppstoreOutlined/>,
                    key: 'submenu1'
                },
                {
                    label: intl.formatMessage({id: "menu.subMenu2"}),
                    router: 'submenu2',
                    icon: <AppstoreOutlined/>,
                    key: 'submenu2'
                },
                {
                    label: intl.formatMessage({id: "menu.subMenu3"}),
                    router: 'submenu3',
                    icon: <AppstoreOutlined/>,
                    key: 'submenu3'
                },

            ]
        },
        {
            label: intl.formatMessage({id: "menu.menu3"}),
            router: "menu-3",
            icon: <AppstoreOutlined/>,
            key: 'menu3'
        },
    ]
}



