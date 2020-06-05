const reporter = require('cucumber-html-reporter');

const options = {
    //Themes
    //1. Bootstrap
    //2. Hierarchy
    //3. Foundation
    //4. Simple
    theme: "bootstrap",
    jsonFile: "cucumber_report.json",
    output: "cucumber_report.html",
    reportSuiteAsScenario: true,
    launchReport: false
}

reporter.generate(options);