const Address = require("./Address");
/**
 * An object catching personal Details
 * @param firstname {string} First Name
 * @param lastname {string} Last Name
 * @param companyname {string} Company Name
 * @param address {Address} An address
 * @param nip {string} A company identity
 * @constructor
 */
function Person(firstname, lastname, companyname, address, nip) {
    this.firstname = firstname||"";
    this.lastname = lastname || "";
    this.companyname = companyname || "";
    this.address = address || new Address();
    this.nip= nip || "";
}
/**
 * Length (Number of keys) into Person Object
 * @returns {Number} Number of object properties.
 */
Person.prototype.length = function () {
    constructor = Person;
     return Object.keys(this).length
 };
/**
 * Getting all keys of Person Object
 * @returns {Array}
 */
Person.prototype.getKeys = function () {
    constructor = Person;
    return Object.keys(this)
};

Person.prototype.generateForm = function (parentNode) {
    constructor = Person;
    const keys = this.address.getKeys();
    for(let i = 0;i<keys.length;i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.id = keys[i];
        input.placeholder = keys[i];
        parentNode.appendChild(input);
    }

};

module.exports = Person;

