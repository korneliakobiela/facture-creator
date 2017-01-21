/**
 * Created by kornelia on 21.01.17.
 */
/**
 *
 * @param street
 * @param homenumber
 * @param localnumber
 * @param city
 * @param postalcode
 * @param phone
 * @constructor
 */
function Address(street,homenumber, localnumber, city, postalcode,phone) {
    this.street = street;
    this.homenumber = homenumber;
    this.localnumber = localnumber;
    this.city = city;
    this.postalcode = postalcode;
    this.phone = phone;
}

module.exports = Address;