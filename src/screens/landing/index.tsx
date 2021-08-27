import React from "react";
import {LandingTemplate} from "../../layout/landing";
import {useHistory} from 'react-router-dom';
import {Button} from "rsuite";
import {useIntl} from "react-intl";

export default function Landing() {
    const history = useHistory()
    const intl = useIntl();

    const redirectToAdmin = () => {
        history.push('/admin');
    }

    return <LandingTemplate>
        {intl.formatMessage({id: "app.message"})}
        <Button onClick={redirectToAdmin}>Go To Admin</Button>
    </LandingTemplate>
}
