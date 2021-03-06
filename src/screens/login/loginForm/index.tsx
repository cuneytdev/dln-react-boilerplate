import React, {useState} from 'react';
import {Button, ButtonToolbar, ControlLabel, Form, FormControl, FormGroup, Schema} from 'rsuite';
import {useIntl} from "react-intl";
import {isEmpty} from "../../../utils/utils";
import {UserInfo} from "../index";

const {StringType} = Schema.Types;

type LoginFormType = {
    onSubmit: Function,
    userInfo: UserInfo,
    showForgotPassword: Function
}

export default function LoginForm(props: LoginFormType) {
    const {onSubmit, userInfo, showForgotPassword} = props;
    const intl = useIntl();
    const [formError, setFormError] = useState({});
    const [formValue, setFormValue] = useState(userInfo);
    const [form, setForm] = useState<any>();

    const model = Schema.Model({
        username: StringType().isRequired(intl.formatMessage({id: "validation.required"})),
        password: StringType()
            .isRequired(intl.formatMessage({id: "validation.required"}))
    });

    const handleSubmit = () => {
        if (!form.check()) {
            console.error(formError);
            return;
        }
        onSubmit(formValue);
    }

    const handleForgotPassword = () => {
        showForgotPassword(true);
    }

    const checkButtonIsDisabled = () => {
        return !isEmpty(formError);
    }

    return <Form fluid
                 model={model}
                 formValue={formValue}
                 ref={(ref: any) => setForm(ref)}
                 onChange={formValue => setFormValue(formValue as any)}
                 onCheck={formError => setFormError(formError as any)}>
        <FormGroup>
            <ControlLabel>{intl.formatMessage({id: "label.username"})}</ControlLabel>
            <FormControl
                name="username"
                placeholder={intl.formatMessage({id: "label.username"})}/>
        </FormGroup>
        <FormGroup>
            <ControlLabel>{intl.formatMessage({id: "label.password"})}</ControlLabel>
            <FormControl
                name="password"
                type="password"
                placeholder={intl.formatMessage({id: "label.password"})}/>
        </FormGroup>
        <FormGroup>
            <ButtonToolbar>
                <Button onClick={handleForgotPassword}>{intl.formatMessage({id: "button.forgotPassword"})}</Button>
                <Button type="submit"
                        disabled={checkButtonIsDisabled()}
                        onClick={handleSubmit}
                        appearance="primary">{intl.formatMessage({id: "button.login"})}</Button>
            </ButtonToolbar>
        </FormGroup>
    </Form>
}
