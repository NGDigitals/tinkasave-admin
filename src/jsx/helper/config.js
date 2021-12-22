/* eslint-disable no-nested-ternary */
const environment = 'prod';
const config = {
  appPath: '/app',
  authPath: '/auth',
  adminUrl: environment.localeCompare('prod') === 0
    ? 'http://tinka-admin-env.eu-west-2.elasticbeanstalk.com'
    : (environment.localeCompare('test') === 0 ? 'http://tinka-admin-env.eu-west-2.elasticbeanstalk.com' : 'http://localhost:5000'),
  // adminUrl: environment.localeCompare('prod') === 0
  //   ? 'https://admin.k8s.tinkasave.com'
  //   : (environment.localeCompare('test') === 0 ? 'http://admin-env.eu-west-2.elasticbeanstalk.com' : 'http://localhost:9010'),
  currency: '₦',
  countryCode: '+234',
  paystackPublicKey: 'pk_test_2e86edd5a5181359315b56d9773ade6a74db0d1f',
  monoPublicKey: environment.localeCompare('prod') === 0 ? 'test_pk_PCXsTpMTXxi3f8Ts0try' : 'test_pk_PCXsTpMTXxi3f8Ts0try',
};
module.exports = config;
