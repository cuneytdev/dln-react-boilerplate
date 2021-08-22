import React from 'react';
import {AdminTemplate} from "../../layout/admin";
import {useIntl} from "react-intl";

export default function Admin() {
    const intl = useIntl();

    return <AdminTemplate>
        {intl.formatMessage({id: "app.message"})}
    </AdminTemplate>
}
