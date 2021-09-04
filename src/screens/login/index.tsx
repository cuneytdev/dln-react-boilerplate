import React from 'react';
import {Panel} from 'rsuite';
import {LoginTemplate} from "../../layout/login";
import LoginForm from "./loginForm";
import {useHistory} from "react-router-dom";

export default function LoginPage() {
    const history= useHistory();
    const onLoginButtonSubmitted = (formValue: { username: string, password: string }) => {
        console.log(formValue);
        history.push("/admin")
    }
    return <LoginTemplate>
        <div className="login-container content">
            <Panel className={"login-panel"} header="Login to App" shaded>
                <LoginForm onSubmit={onLoginButtonSubmitted}/>
            </Panel>
        </div>
    </LoginTemplate>
}
