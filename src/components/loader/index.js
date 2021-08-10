import {LoadingOutlined} from "@ant-design/icons";
import {Spin} from "antd";
import PropTypes from "prop-types";

export function Loader(props) {
    const {message} = props;
    const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>;

    return <div className="loader-container">
        <Spin indicator={antIcon}>{message}</Spin>
    </div>
}

Loader.propTypes = {
    message: PropTypes.string
}
