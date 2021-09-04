import React, {useState} from 'react';
import {Button, ButtonToolbar, ControlLabel, Form, FormControl, FormGroup, Schema} from 'rsuite';
import {useIntl} from "react-intl";
import {isEmpty} from "../../../utils/utils";

const {StringType} = Schema.Types;

type LoginFormType = {
    onSubmit: Function
}

export default function LoginForm(props: LoginFormType) {
    const {onSubmit} = props;
    const intl = useIntl();
    const [formError, setFormError] = useState({});
    const [formValue, setFormValue] = useState({username: "", password: ""});
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
                <Button type="submit"
                        disabled={checkButtonIsDisabled()}
                        onClick={handleSubmit}
                        appearance="primary">{intl.formatMessage({id: "button.login"})}</Button>
            </ButtonToolbar>
        </FormGroup>
    </Form>
}
