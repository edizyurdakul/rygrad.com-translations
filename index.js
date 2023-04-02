var tr = require("./translations.tr.json");
var en = require("./translations.en.json");
var az = require("./translations.az.json");
var fr = require("./translations.fr.json");
var de = require("./translations.de.json");
var it = require("./translations.it.json");
var es = require("./translations.es.json");
var ru = require("./translations.ru.json");
var cn = require("./translations.cn.json");
var gr = require("./translations.gr.json");

const i18n = {
  translations: {
    tr,
    en,
    az,
    fr,
    de,
    it,
    es,
    ru,
    cn,
    gr,
  },
  defaultLang: "en",
  useBrowserDefault: true,
};

module.exports = i18n;
