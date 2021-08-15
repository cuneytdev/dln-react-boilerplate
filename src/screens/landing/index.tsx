import React from "react";
import {LandingTemplate} from "../../layout/landing";
import {useHistory} from 'react-router-dom';
import {Button} from "antd";

export default function Landing() {
    const history = useHistory()

    const redirectToAdmin = () => {
        history.push('/admin');
    }

    return <LandingTemplate>
        HELLO I AM ADMIN
        <Button onClick={redirectToAdmin}>Go To Admin</Button>
    </LandingTemplate>
}
