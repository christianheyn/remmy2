const path = require('path');

module.exports = {
    reduxActions: path.resolve(__dirname, 'src/redux-store/actions/'),
    reduxStore: path.resolve(__dirname, 'src/redux-store/redux-store'),
    reduxDispatcher: path.resolve(__dirname, 'src/redux-store/dispatcher/'),
    reactComponents: path.resolve(__dirname, 'src/react-components/'),
    apiV1: path.resolve(__dirname, 'src/api/v1/index'),
    utils: path.resolve(__dirname, 'src/utils/'),
};
