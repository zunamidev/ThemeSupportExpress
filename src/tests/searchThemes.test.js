"use strict";

const appRoot = require("app-root-path");
const getThemeInforation = require("../lib/searchThemes");

// TODO: write tests¸
test("Get theme data like CSS and this stuff", () => {
  getThemeInforation(appRoot, "themes").then(r => {
    expect(r.main).toBe("zHallo/test.css");
  });
});
