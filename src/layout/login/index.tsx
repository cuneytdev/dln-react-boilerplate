import React, {FunctionComponent} from "react";
import LayoutWrapper from "../../components/layoutWrapper";

type LoginTemplateType = {
    children: any;
}

export const LoginTemplate: FunctionComponent<LoginTemplateType> = (props) => {
    const {children} = props;
    return <LayoutWrapper showSidebar={false}>
        {children}
    </LayoutWrapper>
}
