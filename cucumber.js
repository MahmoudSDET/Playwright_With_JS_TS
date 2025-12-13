module.exports = {
  default: {
    require: [
      "src/features/step_definitions/*.js",
      "src/features/step_definitions/*.ts",
       "src/features/support/**/*.ts",
        
    ],
    requireModule: ["ts-node/register"],
   format: ["allure-cucumberjs/reporter","html:test-result/report/cucumber-report.html"],
    formatOptions: {
      snippeetInterface:"async-await",
      resultsDir: "allure-results"
    },          
    paths: ["src/features/**/*.feature"], // مكان feature files
  }
};
