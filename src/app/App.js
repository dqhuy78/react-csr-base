import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import routes from '../routes/';
import { consts } from 'Configs/'
import { authSelectors, authActions } from 'States/auth/';
import ScreenLoading from 'Components/Loading/ScreenLoading/'

class App extends Component {

    componentDidMount() {
        this.props.fetchAuthUser();
    }

    renderRoute = (routes) => (
        <Switch>
            {
                routes.map(route => (
                    <Route key={route.name} {...route} />
                ))
            }
        </Switch>
    )


    renderOption = (status, routes) => {
        switch (status) {
            case consts.STATUS.SUCCESS:
                return this.renderRoute(routes);
            case consts.STATUS.FAIL:
                return <h3>ERROR</h3>
            default:
                return <ScreenLoading />
        }
    }

    render() {
        const { fetchAuthStatus } = this.props;

        return (
            <div className="App" >
                {this.renderOption(fetchAuthStatus, routes)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    fetchAuthStatus: authSelectors.fetchAuthStatus(state)
});

const mapDispatchToProps = dispatch => ({
    fetchAuthUser: () => dispatch(authActions.fetchingAuthUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
