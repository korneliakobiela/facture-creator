/**
 * Created by kornelia on 29.01.17.
 */
const db = require("./db.js");
const events = {
  addButtonClickCallback:function (client) {
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
      db.showClients(client);
  }
};

module.exports = events;