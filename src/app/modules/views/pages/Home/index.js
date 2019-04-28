import React, { Component, Fragment } from 'react';

import Header from 'Components/Header/';
import AuthUserInfo from 'Containers/AuthUserInfo/';
import Footer from 'Components/Footer/';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <AuthUserInfo />
                <Footer />
            </Fragment>
        )
    }
}

export default Home;
