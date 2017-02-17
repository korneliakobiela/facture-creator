/**
 * Created by kornelia on 20.01.17.
 */

module.exports = (function () {
    const events = require("./events");
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
                        const out = document.createElement("table");
                        out.id = "out-client";
                        main.appendChild(select);
                        main.appendChild(out);
                        select.addEventListener('input', function (e) {
                            out.innerHTML = "";
                            factureBase.get(e.target.value, function (err, res) {
                                events.addSelectClientsCallback(err,res,out);
                            })
                        })
                    } else {
                        console.log(err);
                    }

                })
        },
        addFacture: function (main,facture,client) {
            factureBase.allDocs({include_docs: true, descending: true},
                function (err, res) {
                    if (!err) {
                        res = res.rows;
                        const select = client.showClients(res);
                        main.appendChild(select);

                        select.addEventListener('input', function (e) {
                            const Factureform = facture.generateForm();
                            if(main.contains(document.querySelector("form"))){
                                main.removeChild(Factureform);
                            }
                            main.appendChild(Factureform);
                            const button = document.querySelector("#facture-add-button");
                            button.addEventListener("click",function (ev) {
                                factureBase.get(e.target.value).then(function (doc) {
                                    console.log(doc);
                                    doc.factureList.push(JSON.stringify(new FormData(Factureform)));
                                    return factureBase.put(doc);
                                }).then(function () {
                                    return factureBase.get(e.target.value);
                                }).then(function (doc) {
                                    console.log(doc);
                                })
                            });

                           
                        })
                    } else {
                        console.log(err);
                    }

                });
            
        }
    }

})();
