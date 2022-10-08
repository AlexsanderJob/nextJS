import 'normalize.css/normalize.css';
import React, {Component} from 'react';
import {wrapper} from '../redux/index';

class MyApp extends React.Component {
    render() {
        const {Component, pageProps} = this.props;
        return <Component {...pageProps} />;
    }
}

export default wrapper.withRedux(MyApp);
