import React, {FunctionComponent} from 'react';

type LandingTemplateType = {
    children: any;
}

export const LandingTemplate: FunctionComponent<LandingTemplateType> = (props) => {
    const {children} = props;
    return <div><h1>LANDING TEMPLATE</h1>
        {children}
    </div>
}
