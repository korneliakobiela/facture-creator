/**
 * Created by kornelia on 20.01.17.
 */

module.exports = (function () {
    const dbConfig = require("../../../configure/db-config");
    const PouchDB = require("pouchdb");
    const factureBase = new PouchDB(dbConfig.name);


})();
