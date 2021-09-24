/* eslint-disable no-console */
import NetInfo from '@react-native-community/netinfo';

export default class Network {
  static async isAvailable() {
    const response = await NetInfo.fetch();
    return response.isConnected;
  }
}
