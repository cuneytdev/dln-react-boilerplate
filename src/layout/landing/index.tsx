import React, {FunctionComponent} from 'react';
import {Header} from "../../components/header";

type LandingTemplateType = {
    children: any;
}

export const LandingTemplate: FunctionComponent<LandingTemplateType> = (props) => {
    const {children} = props;
    return <div>
        <Header appLogoWidth={300}/>
        {children}
    </div>
}
