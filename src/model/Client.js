/**
 * Created by kornelia on 21.01.17.
 */
const Person = require("./Person.js");
/**
 * Representation of client
 * @param _id {string} id - An unique identity of every client.
 * @param personaldetails {Person} person - Personal details {name,surname,}
 * @param factureList {Array} facture - list of facture belonging to this client
 * @constructor
 */
function Client(_id,personaldetails,factureList) {
    this._id = _id;
    this.personalDetails = personaldetails;
    this.factureList = factureList || [];
}

Client.prototype.generateForm = function (parentId) {
    const form = document.createElement("form");
    form.name = "client";
};
module.exports = Client;