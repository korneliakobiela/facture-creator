const Address = require("./Address");
/**
 * An object catching personal Details
 * @param fname {string} First Name
 * @param lname {string} Last Name
 * @param companyname {string} Company Name
 * @param address {Address} An address
 * @param nip {string} A company identity
 * @constructor
 */
function Person(fname, lname, companyname, address, nip) {
    this.fname = fname || "";
    this.lname = lname || "";
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


module.exports = Person;

