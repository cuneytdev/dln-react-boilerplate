import React, {useState} from 'react';
import {Button, ButtonToolbar, ControlLabel, Form, FormControl, FormGroup, Schema} from "rsuite";
import {useIntl} from "react-intl";
import {isEmpty} from "../../../utils/utils";

const {StringType} = Schema.Types;

type SubmitCodeFormType = {
    username: string,
    onCodeValidation: Function
}

export default function SubmitCodeForm(props: SubmitCodeFormType) {
    const {username, onCodeValidation} = props;
    const intl = useIntl()
    const [formError, setFormError] = useState({});
    const [formValue, setFormValue] = useState({username});
    const [form, setForm] = useState<any>();

    const model = Schema.Model({
        username: StringType().isRequired(intl.formatMessage({id: "validation.required"})),
        code: StringType()
            .isRequired(intl.formatMessage({id: "validation.required"}))
    });

    const handleSubmit = () => {
        if (!form.check()) {
            console.error(formError);
            return;
        }
        onCodeValidation()
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
            <ControlLabel>{intl.formatMessage({id: "label.code"})}</ControlLabel>
            <FormControl
                name="code"
                placeholder={intl.formatMessage({id: "label.code"})}/>
        </FormGroup>
        <FormGroup>
            <ButtonToolbar>
                <div/>
                <Button type="submit"
                        disabled={checkButtonIsDisabled()}
                        onClick={handleSubmit}
                        appearance="primary">{intl.formatMessage({id: "button.submit"})}</Button>
            </ButtonToolbar>
        </FormGroup>
    </Form>
}
