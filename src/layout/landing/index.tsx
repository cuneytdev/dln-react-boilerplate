import React, {FunctionComponent} from 'react';
import LayoutWrapper from "../../components/layoutWrapper";
import {useIntl} from "react-intl";
import getNavigationTabMenu from "../../navigation/tabMenu";
import {CustomMenuItem} from "../../components/menu";

type LandingTemplateType = {
    children: any;
}

export const LandingTemplate: FunctionComponent<LandingTemplateType> = (props) => {
    const {children} = props;
    const intl = useIntl();

    const getTabMenus = (): CustomMenuItem[] => {
        return getNavigationTabMenu(intl)
    }

    return <LayoutWrapper tabMenu={getTabMenus()} showSidebar={false}>
        {children}
    </LayoutWrapper>
}
