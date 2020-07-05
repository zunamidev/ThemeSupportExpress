"use strict";

const appRoot = require("app-root-path");
const getThemeInformation = require("../lib/searchThemes");

// TODO: write tests¸
test("Get theme data like CSS and this stuff", () => {
  getThemeInformation(appRoot, "themes").then(r => {
    expect(r.main).toBe("zHallo/test.css");
  });
});
