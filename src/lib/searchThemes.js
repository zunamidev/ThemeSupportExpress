"use strict";

const fs = require("fs");
const findPath = require("get-dir-children-names");

async function getThemeInformation(root, search) {
  const res = await findPath(`${root}`, `${search}`);
  const data = [];
  const result = [];
  res.forEach(dirs => {
    const rawData = fs.readFileSync(`${root}/${search}/${dirs}/theme.json`);
    const finalData = JSON.parse(rawData);
    finalData.dir = dirs;
    finalData.main = `${dirs}/${finalData.main}`;
    data.push(finalData);

    data.forEach(res => {
      if (res.active) {
        result.push(res);
      }
    });
  });

  return result[0];
}

module.exports = getThemeInformation;
