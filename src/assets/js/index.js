/**
 * Created by kornelia on 19.01.17.
 */
const db = require("./db");
const Person = require("./../../model/Person");
const Address = require("./../../model/Address");
const Product = require("./../../model/Product");
const Facture = require("./../../model/Facture");
const Client = require("./../../model/Client");

const clearContent = function (main) {
    main.innerHTML = ""
};
const toggleClass = function (className,e) {
    const active = document.querySelector('.'+className);
    if(active) active.classList.toggle(className, false);
    e.target.classList.toggle(className, true);
};

const menuEventHandler = function () {
    const menu = document.querySelector('#main-menu');
    const menuItems = document.querySelectorAll('#main-menu button');
    menu.addEventListener("click", function (e) {
        if (e.target !== e.currentTarget) {
            //show focus and active css class
            toggleClass('active',e);
            //A controller of main-menu.
            const main = document.querySelector("main");
            switch (e.target.id) {
                case menuItems[0].id:
                    clearContent(main);
                    const client = new Client();
                    const form = client.generateForm();
                    main.appendChild(form);
                    break;
                case menuItems[1].id:
                    clearContent(main);
                    console.log(e.target.id);

                    break;
                case menuItems[2].id:
                    clearContent(main);
                    console.log(e.target.id);
                    break;
                case menuItems[3].id:
                    clearContent(main);
                    console.log(e.target.id);
                    break;
            }
        }
        e.stopPropagation();
    }, false);

};

 menuEventHandler();