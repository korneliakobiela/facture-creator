/**
 * Created by kornelia on 21.01.17.
 */
/**
 *
 * @param fname
 * @param lname
 * @param companyname
 * @param address
 * @param nip_regon
 * @constructor
 */
function Person(fname,lname,companyname,address,nip_regon) {
    this.fname = fname;
    this.lname = lname;
    this.companyname = companyname;
    this.address = address;
    this.nip_regon = nip_regon;
}

module.exports = Person;