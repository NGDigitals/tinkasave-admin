/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../helper/config';
import { getCurrentUser } from '../helper/utils';

const URL = `${config.url}/api/v1/x-admin`;

class DashboardService {
  fetchDashboard() {
    const currentUser = getCurrentUser();
    return axios.get(`${URL}/dashboard/`, {
      // headers: {
      //   Authorization: currentUser.authorization,
      // },
    });
  }

  fetchTransactions(service, page, limit) {
    const currentUser = getCurrentUser();
    return axios.get(`${URL}/transactions/${service}/${page}/${limit}`, {
      // headers: {
      //   Authorization: currentUser.authorization,
      // },
    });
  }
}

export default new DashboardService();
