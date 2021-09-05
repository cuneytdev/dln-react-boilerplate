import React, {FunctionComponent} from 'react';
import LayoutWrapper from "../../components/layoutWrapper";

type LandingTemplateType = {
    children: any;
}

export const LandingTemplate: FunctionComponent<LandingTemplateType> = (props) => {
    const {children} = props;
    return <LayoutWrapper showSidebar={false}>
        {children}
    </LayoutWrapper>
}
