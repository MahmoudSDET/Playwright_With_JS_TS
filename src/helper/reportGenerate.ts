import os from "os";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const report = require("multiple-cucumber-html-reporter");

// ✅ اقرأ package.json صح
import pkg from "../../package.json";

// ✅ ملف execution dynamic
const executionFile = path.resolve("test-result/execution-time.json");

function getGitInfo(command: string) {
  try {
    return execSync(command).toString().trim();
  } catch {
    return "N/A";
  }
}

// Defaults
let executionStart = "N/A";
let executionEnd = "N/A";
let duration = "N/A";
let environment = process.env.ENV || "QA";
let executedBy = process.env.CI ? "CI" : os.userInfo().username;
let platform = `${os.platform()} ${os.release()}`;

// ✅ اقرأ البيانات dynamic
if (fs.existsSync(executionFile)) {
  const data = JSON.parse(fs.readFileSync(executionFile, "utf-8"));

  if (data.startTime) {
    executionStart = new Date(data.startTime).toLocaleString();
  }

  if (data.endTime) {
    executionEnd = new Date(data.endTime).toLocaleString();
  }

  if (data.durationSeconds) {
    duration = `${data.durationSeconds}s`;
  }

  if (data.environment) environment = data.environment;
  if (data.executedBy) executedBy = data.executedBy;
  if (data.platform) platform = data.platform;
}

report.generate({
  jsonDir: "./test-result/report/Json/",
  reportPath: "./test-result/report/Json/",

  reportName: "Automation Test Report",
  pageTitle: "Cucumber Execution Report",

  metadata: {
    browser: {
      name: process.env.BROWSER || "chrome",
      version: process.env.BROWSER_VERSION || "latest",
    },
    device: os.hostname(),
    platform: {
      name: os.platform(),
      version: os.release(),
    },
  },

  customData: {
    title: "Execution Info",
    data: [
      { label: "Project", value: pkg.name },
      { label: "Version", value: pkg.version },
      { label: "Environment", value: environment },
      { label: "Executed By", value: executedBy },
      { label: "Platform", value: platform },
      { label: "Execution Start", value: executionStart },
      { label: "Execution End", value: executionEnd },
      { label: "Duration", value: duration },
    ],
  },
});
