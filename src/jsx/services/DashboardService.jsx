/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../helper/config';
import { getCurrentUser } from '../helper/utils';

const URL = `${config.adminUrl}/api/v1/x-admin`;

class DashboardService {
  fetchDashboard() {
    const currentUser = getCurrentUser();
    return axios.get(`${URL}/dashboard/`, {
      headers: {
        Authorization: currentUser.authorization,
      },
    });
  }

  fetchTransactions(service, page, limit) {
    const currentUser = getCurrentUser();
    return axios.get(`${URL}/transactions/${service}/${page}/${limit}`, {
      headers: {
        Authorization: currentUser.authorization,
      },
    });
  }

  searchTransactions(keyword, page, limit) {
    const currentUser = getCurrentUser();
    return axios.post(`${URL}/transactions/${page}/${limit}`, {keyword: keyword}, {
      headers: {
        Authorization: currentUser.authorization,
      },
    });
  }
}

export default new DashboardService();
