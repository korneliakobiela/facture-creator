/**
 * Created by kornelia on 21.01.17.
 */
/**
 *  Representing of facture
 * @param date {Date} date - date of issue an invoice
 * @param factureid {string}- id of invoice
 * @param products {Array} - list of products [Product]
 * @constructor
 */
function Facture(date,factureid, products) {
    this.date = date;
    this.factureid = factureid;
    this.products = products;
}

module.exports = Facture;