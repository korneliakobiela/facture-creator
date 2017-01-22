/**
 * Created by kornelia on 21.01.17.
 */
/**
 *
 * @param street
 * @param housenumber
 * @param localnumber
 * @param city
 * @param postalcode
 * @param phone
 * @constructor
 */
function Address(street,housenumber, localnumber, city, postalcode,phone) {
    this.street = street||"";
    this.housenumber = housenumber||"";
    this.localnumber = localnumber||"";
    this.city = city||"";
    this.postalcode = postalcode||"";
    this.phone = phone||"";
}



module.exports = Address;