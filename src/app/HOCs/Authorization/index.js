import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import toastr from 'toastr'

import { consts } from 'Configs/'
import { authSelectors } from 'States/auth/';

const Authorization = (WrappedComponent) => (roles) => {
    class WithAuthorization extends React.Component {

        getAuthorizeRoles = (roles) => {
            let authorizeRoles
            if (typeof (roles) != 'undefined') {
                authorizeRoles = roles.map(role => consts.ROLE[role]);
            } else {
                authorizeRoles = [];
            }

            return authorizeRoles;
        }

        isAuthenticate = () => {
            return this.props.user.get('id') !== null;
        }



        render() {
            const authorizeRoles = this.getAuthorizeRoles(roles);

            /**
             * Every user can access event if not login
             */
            if (authorizeRoles.length === 0) {
                return <WrappedComponent {...this.props} />
            }

            /**
             * Redirect user is unauthenticate
             */
            if (!this.isAuthenticate()) {
                toastr.warning('Unauthenticate', 'Warning', { timeOut: 2000 });
                return <Redirect to='/' />
            }

            /**
             * Render if user is authorization
             */
            const userRole = this.props.user.get('role');
            if (authorizeRoles.includes(userRole)) {
                return <WrappedComponent {...this.props} />
            }

            /**
             * Redirect if user unauthorization
             */
            toastr.warning('Unathorization', 'Warning', { timeOut: 2000 });
            return <Redirect to='/' />
        }
    }

    const mapStateToProps = state => ({
        user: authSelectors.authUser(state),
    });

    return connect(mapStateToProps)(WithAuthorization)
}

export default Authorization;
