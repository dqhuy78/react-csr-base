const authUser = state => state.get('auth').get('user');
const fetchAuthStatus = state => state.get('auth').get('fetchStatus');

export default {
    authUser,
    fetchAuthStatus
}
