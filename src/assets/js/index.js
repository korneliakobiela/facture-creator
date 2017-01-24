/**
 * Created by kornelia on 19.01.17.
 */
const db = require("./db");
const Person = require("./../../model/Person");
const Address = require("./../../model/Address");
const Product = require("./../../model/Product");
const Facture = require("./../../model/Facture");
const Client = require("./../../model/Client");

const menuEventHandler = function () {
    const menu = document.querySelector('#main-menu');
    menu.addEventListener("click",function (e) {
        if(e.target !== e.currentTarget){
            document.querySelector('.active').classList.toggle('active', false);
            e.target.classList.toggle('active',true);
            console.log(typeof menu);

        }
        e.stopPropagation();
    },false);
};

menuEventHandler();