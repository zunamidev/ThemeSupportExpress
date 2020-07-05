"use strict";

const fs = require("fs");
const findPath = require("get-dir-children-names");

async function getThemeInformation(root, search) {
  const res = await findPath(`${root}`, `${search}`);
  let data = [];
  let result = [];
  res.forEach(dirs => {
    let rawData = fs.readFileSync(`${root}/${search}/${dirs}/theme.json`);
    let finalData = JSON.parse(rawData);
    finalData['main'] = `${dirs}/${finalData.main}`;
    finalData["dir"] = dirs;
    data.push(finalData);

    data.forEach((res) => {
          if(res.active) {
            result.push(res);
          }
      });
  });
  
  return result[0];
}

module.exports = getThemeInformation;

