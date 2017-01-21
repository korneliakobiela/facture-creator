/**
 * Created by kornelia on 21.01.17.
 */
/**
 *
 * @param date
 * @param factureid
 * @param products
 * @constructor
 */
function Facture(date,factureid, products) {
    this.date = date;
    this.factureid = factureid;
    this.products = products;
}

module.exports = Facture;