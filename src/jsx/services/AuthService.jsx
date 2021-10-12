/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../helper/config';

const URL = `${config.url}/api/v1/x-auth`;

class AuthService {
    login(data) {
        return axios.post(`${URL}/login`, data, {headers: {}});
    }
}

export default new AuthService();
