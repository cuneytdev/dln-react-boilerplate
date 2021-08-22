import {FunctionComponent} from "react";

import {Loader as RSLoader} from "rsuite";

type LoaderType = {
    message?: string;
}

export const Loader: FunctionComponent<LoaderType> = (props) => {
    const {message} = props;

    return <div className="loader-container">
        <RSLoader size="md" content={message} vertical/>
    </div>
}
