const { retries } = require("./playwright.config2");

module.exports = {
  default: {
    requireModule: ["ts-node/register"],

    require: [
      "src/features/step_definitions/**/*.ts",
      "src/features/support/**/*.ts"
    ],

    format: [
       "allure-cucumberjs/reporter",

    
      // HTML Report
      "html:test-result/report/cucumber-report.html",

      // JSON Report (لـ multiple-cucumber-html-reporter)
      "json:test-result/report/json/cucumber-report.json",

      // ⭐ يكتب السيناريوهات الفاشلة
      "rerun:test-result/rerun/failed.txt"
    ],

    publishQuiet: true,
    paths: ["src/features/**/*.feature"],

    // retry داخلي من Cucumber (اختياري)
     retry: 1
  },

  rerun: {
    requireModule: ["ts-node/register"],

    require: [
       "allure-cucumberjs/reporter",
      "src/features/step_definitions/**/*.ts",
      "src/features/support/**/*.ts"
    ],

    format: [
       "allure-cucumberjs/reporter",
      "html:test-result/report/cucumber-report.html",
      "json:test-result/report/json/cucumber-report.json"
    ],

    publishQuiet: true,

    // ⭐ يشغّل السيناريوهات الفاشلة فقط
    paths: ["@test-result/rerun/failed.txt"]
  },

  single: {
    requireModule: ["ts-node/register"],

    require: [
      "src/features/step_definitions/**/*.ts",
      "src/features/support/**/*.ts"
    ],

    format: [
       "allure-cucumberjs/reporter",
      "progress",
      "html:test-result/report/cucumber-report.html",
      "json:test-result/report/json/cucumber-report.json"
    ],

    publishQuiet: true,
    paths: ["src/features/orangeHrmLogin.feature"]
  }
};
