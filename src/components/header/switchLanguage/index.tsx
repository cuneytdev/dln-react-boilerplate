import React, {useEffect, useState} from 'react';
import {Dropdown, Menu} from "antd";
import {GlobalOutlined} from "@ant-design/icons";
import {languageMenu} from "../../../navigation/language";
import {CustomMenuItem} from "../../menu";
import {Loader} from "../../loader";
import {useDispatch, useSelector} from "react-redux";
import switchLanguage from "../../../store/actions/languageActions";
import {getCurrentLanguage} from "../../../store/reducers/languageReducer";

export default function SwitchLanguage() {
    const dispatch = useDispatch();
    const [menu, setMenu] = useState<any>();
    const [selectedMenu, setSelectedMenu] = useState<CustomMenuItem>()
    const currentLanguage = useSelector(getCurrentLanguage);

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
        setSelectedMenu(languageMenu.find(lang => lang.key === currentLanguage));
        setMenu(menu)
    }, []);

    const onLanguageMenuClicked = (menu: CustomMenuItem) => {
        return () => {
            setSelectedMenu(menu);
            dispatch(switchLanguage(menu.key));
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
