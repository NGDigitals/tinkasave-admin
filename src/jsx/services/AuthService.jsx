/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../helper/config';

const URL = `${config.adminUrl}/api/v1/x-admin`;

class AuthService {
    login(data) {
        return axios.post(`${URL}/login`, data, {headers: {}});
    }

    verifyOTP(authorization, email, data) {
        return axios.post(`${URL}/otp/verify/${email}`, data, {
          headers: {
            Authorization: authorization,
          },
        });
    }

    resendOTP(authorization, email) {
        return axios.post(`${URL}/otp/resend/${email}`, {}, {
          headers: {
            Authorization: authorization,
          },
        });
    }
}

export default new AuthService();
