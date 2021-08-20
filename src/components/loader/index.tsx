import {FunctionComponent} from "react";

import {LoadingOutlined} from "@ant-design/icons";
import {Spin} from "antd";

type LoaderType = {
    message?: string;
}

export const Loader: FunctionComponent<LoaderType> = (props) => {
    const {message} = props;
    const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>;

    return <div className="loader-container">
        <Spin indicator={antIcon}>{message}</Spin>
    </div>
}
