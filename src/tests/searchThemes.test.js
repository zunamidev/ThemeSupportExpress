const appRoot = require('app-root-path');
const searchTheme = require('./lib/searchThemes');


// TODO: write tests
test('Get theme data like CSS and this stuff', () => {
  const res = new searchTheme()

  res.getThemeInformation(appRoot, 'themes').then((r) => {
    return r
  }).tobe;

});
