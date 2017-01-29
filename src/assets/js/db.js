/**
 * Created by kornelia on 20.01.17.
 */

module.exports = (function () {
    const dbConfig = require("../../../configure/db-config");
    const PouchDB = require("pouchdb");
    const factureBase = new PouchDB(dbConfig.name);
    return {
        factureBase: factureBase,
        addClient: function (client) {
            client.completed = false;
            factureBase.put(client, function (err, response) {
                if (!err) {
                    console.log(response);
                } else {
                    console.error(err);
                }
            });
        },
        showClients: function (client) {
            factureBase.allDocs({include_docs: true, descending: true},
                function (err, res) {
                    if (!err) {
                        console.log(res);
                    } else {
                        console.log(err);
                    }

                })
        }
    }

})();
