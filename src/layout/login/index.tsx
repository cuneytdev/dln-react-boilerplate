import React, {FunctionComponent} from "react";
import LayoutWrapper from "../../components/layoutWrapper";
import {useIntl} from "react-intl";
import {CustomMenuItem} from "../../components/menu";
import getNavigationTabMenu from "../../navigation/tabMenu";

type LoginTemplateType = {
    children: any;
}

export const LoginTemplate: FunctionComponent<LoginTemplateType> = (props) => {
    const {children} = props;

    const intl = useIntl();

    const getTabMenus = (): CustomMenuItem[] => {
        return getNavigationTabMenu(intl)
    }

    return <LayoutWrapper tabMenu={getTabMenus()} showSidebar={false}>
        {children}
    </LayoutWrapper>
}
