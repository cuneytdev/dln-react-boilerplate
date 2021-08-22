import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Badge, Dropdown, Icon} from "rsuite";
import {getCurrentLanguage} from "../../../store/reducers/languageReducer";

import {languageMenu} from "../../../navigation/language";
import {CustomMenuItem} from "../../menu";
import {Loader} from "../../loader";
import switchLanguage from "../../../store/actions/languageActions";

export default function SwitchLanguage() {
    const dispatch = useDispatch();
    const [selectedMenu, setSelectedMenu] = useState<CustomMenuItem>()
    const currentLanguage = useSelector(getCurrentLanguage);

    useEffect(() => {
        setSelectedMenu(languageMenu.find(lang => lang.key === currentLanguage));
    }, [currentLanguage]);

    const onLanguageMenuClicked = (menuKey: any) => {
        setSelectedMenu(languageMenu.find(lang => lang.key === menuKey));
        dispatch(switchLanguage(menuKey));
    }

    if (!selectedMenu) {
        return <Loader/>;
    }

    const renderLanguageTitle = () => {
        return <Badge content={currentLanguage.toUpperCase()}><Icon size="lg" icon="globe2"/></Badge>
    }

    const renderLanguageSwitchMenu = () => {
        return languageMenu
            .map(lang =>
                <Dropdown.Item
                    className={"dropdown-overlay"}
                    key={lang.key}
                    eventKey={lang.key}>
                    {lang.label}
                </Dropdown.Item>)
    }

    return <Dropdown title={renderLanguageTitle()}
                     onSelect={onLanguageMenuClicked}>
        {renderLanguageSwitchMenu()}</Dropdown>
}
