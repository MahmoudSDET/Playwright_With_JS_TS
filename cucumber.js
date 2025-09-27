module.exports = {
  default: {
    require: [
      "src/features/step_definitions/*.js",
      "src/features/support/hooks.js"
    ],
   format: ["allure-cucumberjs/reporter"],
    formatOptions: {
      resultsDir: "allure-results"
    },          
    paths: ["src/features/**/*.feature"], // مكان feature files
  }
};
