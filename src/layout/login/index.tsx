import React, {FunctionComponent} from "react";
import {Header} from "../../components/header";

type LoginTemplateType = {
    children: any;
}

export const LoginTemplate: FunctionComponent<LoginTemplateType> = (props) => {
    const {children} = props;
    return <div>
        <Header showUserInfo={false} appLogoWidth={300}/>
        {children}
    </div>
}
