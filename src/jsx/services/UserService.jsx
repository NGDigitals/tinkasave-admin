/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../helper/config';
import { getCurrentUser } from '../helper/utils';

const URL = `${config.adminUrl}/api/v1/x-admin`;

class UserService {
  fetch(page, limit) {
    const currentUser = getCurrentUser();
    return axios.get(`${URL}/users/${page}/${limit}`, {
      headers: {
        Authorization: currentUser.authorization,
      },
    });
  }

  search(keyword, page, limit) {
    const currentUser = getCurrentUser();
    return axios.post(`${URL}/users/${page}/${limit}`, {keyword: keyword}, {
      headers: {
        Authorization: currentUser.authorization,
      },
    });
  }

  fetchServices(service, userID) {
    const currentUser = getCurrentUser();
    return axios.get(`${URL}/users/${userID}/${service}`, {
      headers: {
        Authorization: currentUser.authorization,
      },
    });
  }

  fetchReferral(userID, page, limit) {
    const currentUser = getCurrentUser();
    return axios.get(`${URL}/users/${userID}/referral/${page}/${limit}`, {
      headers: {
        Authorization: currentUser.authorization,
      },
    });
  }
}

export default new UserService();
