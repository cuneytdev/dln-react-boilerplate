import React, {useState} from 'react';
import {Panel} from 'rsuite';
import {LoginTemplate} from "../../layout/login";
import LoginForm from "./loginForm";
import {useHistory} from "react-router-dom";
import SubmitCodeForm from './submitCode';
import ForgotPasswordForm from "./forgotPassword";

export interface UserInfo {
    username: string;
    password: string;
}

export default function LoginPage() {
    const history = useHistory();
    const [userInfo, setUserInfo] = useState<UserInfo>({username: "", password: ""});
    const [showCodeValidation, setShowCodeValidation] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    const onLoginButtonSubmitted = (formValue: UserInfo) => {
        setUserInfo(formValue);
        history.push("/admin")
    }

    const onCodeValidationChecked = () => {
        setShowCodeValidation(false);
        setShowForgotPassword(true);
    }

    const handleCancelSubmit = () => {
        setShowCodeValidation(false);
        setShowForgotPassword(false);
    }

    const renderFormType = () => {
        if (showForgotPassword) {
            return <ForgotPasswordForm userInfo={userInfo} handleCancelSubmit={handleCancelSubmit}/>
        } else if (showCodeValidation) {
            return <SubmitCodeForm onCodeValidation={onCodeValidationChecked} username={userInfo.username}/>
        } else {
            return <LoginForm showForgotPassword={setShowCodeValidation} userInfo={userInfo}
                              onSubmit={onLoginButtonSubmitted}/>
        }
    }

    return <LoginTemplate>
        <div className="login-container content">
            <Panel className={"login-panel"} header="Login to App" shaded>
                {renderFormType()}
            </Panel>
        </div>
    </LoginTemplate>
}
