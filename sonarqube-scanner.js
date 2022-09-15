const scanner = require("sonarqube-scanner");
scanner(
  {
    serverUrl: "http://localhost:9000",
    login: "admin",
    password: "Harish1@",
    options: { "sonar.sources": "./src" },
  },
  () => process.exit()
);