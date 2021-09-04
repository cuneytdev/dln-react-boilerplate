import React, {useState} from 'react';
import {UserInfo} from "../index";
import {Button, ButtonToolbar, ControlLabel, Form, FormControl, FormGroup, Schema} from "rsuite";
import {useIntl} from "react-intl";
import {isEmpty} from "../../../utils/utils";

type ForgotPasswordFormType = {
    userInfo: UserInfo,
    handleCancelSubmit: Function
}

const {StringType} = Schema.Types;

export default function ForgotPasswordForm(props: ForgotPasswordFormType) {
    const {userInfo, handleCancelSubmit} = props;
    const intl = useIntl();
    const [formError, setFormError] = useState({});
    const [formValue, setFormValue] = useState({username: userInfo.username, password: "", verifyPassword: ""});
    const [form, setForm] = useState<any>();


    const model = Schema.Model({
        username: StringType().isRequired(intl.formatMessage({id: "validation.required"})),
        password: StringType()
            .isRequired(intl.formatMessage({id: "validation.required"})),
        verifyPassword: StringType().addRule((value, data) => {
            return value === data.password;
        }, intl.formatMessage({id: "validation.passwordNotMatched"}))
            .isRequired(intl.formatMessage({id: "validation.required"}))
    });

    const checkButtonIsDisabled = () => {
        return !isEmpty(formError);
    }

    const handleSubmit = () => {
        if (!form.check()) {
            console.error(formError);
            return;
        }
    }

    const handleCancelClicked = () => {
        handleCancelSubmit()
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
            <ControlLabel>{intl.formatMessage({id: "label.verifyPassword"})}</ControlLabel>
            <FormControl
                name="verifyPassword"
                type="password"
                placeholder={intl.formatMessage({id: "label.verifyPassword"})}/>
        </FormGroup>
        <FormGroup>
            <ButtonToolbar>
                <Button onClick={handleCancelClicked}>{intl.formatMessage({id: "button.cancel"})}</Button>
                <Button type="submit"
                        disabled={checkButtonIsDisabled()}
                        onClick={handleSubmit}
                        appearance="primary">{intl.formatMessage({id: "button.submit"})}</Button>
            </ButtonToolbar>
        </FormGroup>
    </Form>
}
