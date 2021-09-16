import React, {FunctionComponent} from "react";
import {useIntl} from "react-intl";
import getNavigationMenu from "../../navigation/menu";
import LayoutWrapper from "../../components/layoutWrapper";

type PageContainerType = {
    children: any;
}

export const AdminTemplate: FunctionComponent<PageContainerType> = (props) => {
    const {children} = props;
    const intl = useIntl();

    const getMenu = () => {
        return getNavigationMenu(intl);
    }
    return <LayoutWrapper sidebarMenu={getMenu()} showSidebar={true} userInfo={"Cüneyt Dalan"}>
        {children}
    </LayoutWrapper>
}

