/**
 * Created by kornelia on 29.01.17.
 */
const db = require("./db.js");
const events = {
    addButtonClickCallback: function (client) {
        const form = document.querySelector("#client");
        const data = new FormData(form);
        for (i in client.personaldetails) {
            if (client.personaldetails.hasOwnProperty(i)) {
                if (i == "address") {
                    for (j in client.personaldetails.address) {
                        if (client.personaldetails.address.hasOwnProperty(j)) {
                            client.personaldetails.address[j] = data.get(j);
                        }
                    }
                }
                else {
                    client.personaldetails[i] = data.get(i);
                }
            }
        }
        client._id = client.generateId();
        console.log(client);
        db.addClient(client);

    },
    addSelectClientsCallback: function (err,res,out) {
        if (!err) {
            const restdata = res["personaldetails"];
            for (const i in restdata) {
                if (restdata.hasOwnProperty(i)) {
                    if (i == "address") {
                        for (const j in restdata.address) {
                            if (restdata.address.hasOwnProperty(j))
                                out.innerHTML += "<tr><td>" + j + ": </td><td>" + restdata.address[j] + "</td></tr>";
                        }
                        continue;
                    }
                    out.innerHTML += "<tr><td>" + i + ": </td><td>" + restdata[i] + "</td></tr>";
                }
            }

        }

    }
};

module.exports = events;
