import scanner from 'sonarqube-scanner';
scanner(
  {
    serverUrl: 'http://localhost:9000',
    login: 'admin',
    password: 'Harish1@',
    options: { 'sonar.sources': './src' }
  },
  // eslint-disable-next-line no-undef
  () => process.exit()
);
