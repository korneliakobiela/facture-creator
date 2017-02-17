/**
 * Created by kornelia on 21.01.17.
 */
const Product = require("./Product.js");
/**
 *  Representing of facture
 * @param date {Date} date - date of issue an invoice
 * @param factureid {string}- id of invoice
 * @param products {Array} - list of products [Product]
 * @constructor
 */
function Facture(date, factureid, products) {
    this.date = date || new Date().toJSON();
    this.factureid = factureid||this.generateId(0);
    this.products = products || [];
}

Facture.prototype = {
    constructor: Facture,
    generateId: function (number) {
       return number.toString() + "/" + new Date().getFullYear();
    },
    generateForm:function () {
        const form = document.createElement("form");
        const date = document.createElement("input");
        date.id = "date";
        date.name = "date";
        date.type = "date";
        form.appendChild(date);
        const factureId = document.createElement("input");
        factureId.id = "identity";
        factureId.name = "identity";
        factureId.placeholder ="Facture Id";
        form.appendChild(factureId);
        const addButton = document.createElement("input");
        addButton.type = "button";
        addButton.value = "Add product";
        addButton.addEventListener("click",function (e) {
            const product = new Product();
            const keys = product.getKeys();
            const fieldset = document.createElement("fieldset");
            for(let i =0;i<keys.length;i++) {
                const input = document.createElement("input");
                input.name = keys[i];
                input.id = keys[i];
                input.placeholder = keys[i];
                fieldset.appendChild(input);
            }
            form.insertBefore(fieldset,e.target);
        });
        form.appendChild(addButton);
        const button = document.createElement("input");
        button.id = "facture-add-button";
        button.type = "button";
        button.value = "Add";
        form.appendChild(button);
        button.addEventListener('click',function (e) {

        });
        return form;
    }
};


module.exports = Facture;