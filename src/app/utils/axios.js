import axios from 'axios';
import { env } from 'Configs/';

const instance = axios.create({
    baseUrl: env.BASE_API_URL
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
