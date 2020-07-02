'use strict';

const fs = require('fs');
const findPath = require('get-dir-children-names');

class searchThemes {
  async getThemeInformation(root, search) {
    const res = await findPath(`${root}`, `${search}`);
    let data = [];
    let result = [];
    res.forEach((dirs) => {
      let rawData = fs.readFileSync(`${root}/${search}/${dirs}/theme.json`);
      let finalData = JSON.parse(rawData);
      finalData['dir'] = dirs;
      data.push(finalData);

      data.forEach((res) => {
        if (res.active) {
          res['main'] = `${res.dir}/${res.main}`;
          result.push(res);
        } else {
          return false;
        }
      });
    });
    return result[0];
  }
}

module.exports = searchThemes;

