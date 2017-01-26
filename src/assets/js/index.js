/**
 * Created by kornelia on 19.01.17.
 */
const db = require("./db");
const Person = require("./../../model/Person");
const Address = require("./../../model/Address");
const Product = require("./../../model/Product");
const Facture = require("./../../model/Facture");
const Client = require("./../../model/Client");

const clearMain = function (main) {
    main.innerHTML = ""
};

const menuEventHandler = function () {
    const menu = document.querySelector('#main-menu');
    const menuItems = document.querySelectorAll('#main-menu button');
    menu.addEventListener("click", function (e) {
        if (e.target !== e.currentTarget) {
            //show focus and active css class
            document.querySelector('.active').classList.toggle('active', false);
            e.target.classList.toggle('active', true);
            //A controller of main-menu.
            const main = document.querySelector("main");
            switch (e.target.id) {
                case menuItems[0].id:
                    clearMain(main);
                    const client = new Client();
                    const form = client.generateForm();
                    main.appendChild(form);
                    break;
                case menuItems[1].id:
                    clearMain(main);
                    console.log(e.target.id);

                    break;
                case menuItems[2].id:
                    clearMain(main);
                    console.log(e.target.id);
                    break;
                case menuItems[3].id:
                    clearMain(main);
                    console.log(e.target.id);
                    break;
            }
        }
        e.stopPropagation();
    }, false);

};

menuEventHandler();