import React, {useEffect, useState} from 'react';
import {Dropdown, Menu} from "antd";
import {GlobalOutlined} from "@ant-design/icons";
import {languageMenu} from "../../../navigation/language";
import {CustomMenuItem} from "../../menu";
import {Loader} from "../../loader";
import {useDispatch} from "react-redux";
import switchLanguage from "../../../store/actions/languageActions";

export default function SwitchLanguage() {
    const dispatch = useDispatch();
    const [menu, setMenu] = useState<any>();
    const [selectedMenu, setSelectedMenu] = useState<CustomMenuItem>()

    useEffect(() => {
        if (!languageMenu) {
            return;
        }
        const menu =
            <Menu>{languageMenu.map((menu) =>
                <Menu.Item onClick={onLanguageMenuClicked(menu)}>
                    {menu.label}
                </Menu.Item>)}
            </Menu>;
        setSelectedMenu(languageMenu[0])
        setMenu(menu)
    }, []);

    const onLanguageMenuClicked = (menu: CustomMenuItem) => {
        return () => {
            setSelectedMenu(menu);
            // dispatch(switchLanguage(menu));
        }
    }

    if (!selectedMenu) {
        return <Loader/>;
    }

    return <div className="switch-language">
        <Dropdown overlay={menu}>
            <div>
                <GlobalOutlined/>
                {selectedMenu.shortLabel}
            </div>
        </Dropdown>
    </div>
}
