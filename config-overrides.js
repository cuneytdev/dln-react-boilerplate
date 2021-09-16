const {override, addLessLoader} = require('customize-cra');

module.exports = override(
    addLessLoader({
        // If you are using less-loader@5 or older version, please spread the lessOptions to options directly.
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
                '@base-color': '#ff8000',
                '@font-family-base': '"Poppins", sans-serif',
                '@font-size-base': '14px',
                '@border-radius-base': '8px',
                '@nav-bar-default-bg': '#f2f4f9',
                '@nav-bar-default-font-color': '#838da6',
                '@sidenav-subtle-bg': '#000',
                '@sidenav-default-bg':'#fefefe',
                '@nav-bar-height':'70px'
            }
        }
    })
);
