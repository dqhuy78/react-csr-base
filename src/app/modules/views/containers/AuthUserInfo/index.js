import { connect } from 'react-redux';

import UserInfo from 'Components/UserInfo/'
import { authSelectors } from 'States/auth/';

const mapStateToProps = state => ({
    user: authSelectors.authUser(state),
});

const AuthUserInfo = connect(
    mapStateToProps
)(UserInfo);

export default AuthUserInfo;
