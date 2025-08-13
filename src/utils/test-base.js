const base = require('@playwright/test');
const testDataForOrder = require('./placeorderTestData.json');

exports.customtest = base.test.extend({testDataForOrder})

