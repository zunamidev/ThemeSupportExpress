'use strict';

const appRoot = require('app-root-path');
const searchTheme = require('./lib/searchThemes');

const res = new searchTheme()

res.getThemeInformation(appRoot, 'themes').then((r) => {
  console.log(r)
});

