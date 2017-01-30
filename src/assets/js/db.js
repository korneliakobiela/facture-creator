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
        showClients: function (main, client) {
            factureBase.allDocs({include_docs: true, descending: true},
                function (err, res) {
                    if (!err) {
                        res = res.rows;
                        const select = client.showClients(res);
                        const out = document.createElement("section");
                        out.id = "out-client";
                        main.appendChild(select);
                        main.appendChild(out);
                        select.addEventListener('input', function (e) {
                            out.innerHTML = "";
                            factureBase.get(e.target.value, function (err, res) {
                                if (!err) {
                                    const restdata = res["personaldetails"]
                                    for (const i in restdata) {
                                        if (restdata.hasOwnProperty(i)) {
                                            out.innerHTML += restdata[i] + "<br>";
                                            if (i == "address") {
                                                for (const j in restdata.address) {
                                                    if (restdata.address.hasOwnProperty(j))
                                                        out.innerHTML += restdata.address[j] + "<br>";
                                                }
                                            }
                                        }
                                    }
                                    out.innerHTML += JSON.stringify(res);
                                }
                            })
                        })
                    } else {
                        console.log(err);
                    }

                })
        }
    }

})();
