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
function Client(personaldetails, factureList, _id) {
    this.personaldetails = personaldetails || new Person();
    this.factureList = factureList || [];
    this._id = _id || this.generateId();
    //this.completed = false;
}
/**
 * Generate form to add new Client
 * @returns {Element}
 */
Client.prototype.generateForm = function (callback) {
    //constructor = Client;
    const form = document.createElement("form");
    form.name = "client";
    form.id = "client";
    const keys = this.personaldetails.getKeys();
    //TODO: for(const key in this.personaldetails) {
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] == "address") {
            this.personaldetails.generateForm(form);
            continue;
        }
        const input = document.createElement("input");
        input.name = keys[i];
        input.type = "text";
        input.id = keys[i];
        input.placeholder = keys[i];
        form.appendChild(input);
    }
    const button = document.createElement("input");
    button.type = "button";
    button.id = "add-client";
    button.value = "Add";
    button.addEventListener("click", callback);
    form.appendChild(button);

    return form;
};
/**
 * Generates standard Client ID if it isn't exists
 * @returns {string} id - the unique identity of every
 */
Client.prototype.generateId = function () {
    constructor = Client;

    const prefix = this.personaldetails.companyname || this.personaldetails.firstname + this.personaldetails.lastname;
    return prefix.toLowerCase() + new Date().getMonth() + '/' + new Date().getFullYear();
};

Client.prototype.getFactureNumber = function () {
    return this.factureList.length
};


module.exports = Client;