const {override, addLessLoader} = require('customize-cra');

module.exports = override(
    addLessLoader({
        // If you are using less-loader@5 or older version, please spread the lessOptions to options directly.
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
                '@base-color': '#f44336',
                '@font-family-base': '"Poppins", sans-serif',
                '@font-size-base': '14px'
            }
        }
    })
);
