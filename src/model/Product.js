/**
 * Created by kornelia on 21.01.17.
 */
/**
 *
 * @param name
 * @param pricenetto
 * @param tax
 * @constructor
 */
function Product(name,pricenetto,tax){
    this.name = name;
    this.pricenetto = pricenetto;
    this.tax = tax;
}

module.exports =Product;