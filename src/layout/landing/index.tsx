import React, {FunctionComponent} from 'react';
import {Header} from "../../components/header";

type LandingTemplateType = {
    children: any;
}

export const LandingTemplate: FunctionComponent<LandingTemplateType> = (props) => {
    const {children} = props;
    return <div>
        <Header showUserInfo={false}
                appLogoWidth={300}
                showLoginButton/>
        {children}
    </div>
}
