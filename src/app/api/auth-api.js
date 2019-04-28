import axios from 'Utils/axios';

/**
 * API list
 */
const fetchAuthUser = () => {
    return axios.get('/auth/user')
        .then(response => response)
        .catch(error => error);
};

/**
 * This function is for demo purpose
 */
const demoFetchAuthUser = () => {
    return {
        status: 200,
        id: 1,
        username: 'dqhuy78',
        roles: 'admin'
    };
};

export default {
    fetchAuthUser,
    demoFetchAuthUser
}
