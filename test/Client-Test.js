/**
 * Created by kornelia on 22.01.17.
 */
const expect = require('chai').expect;
const sinon = require('sinon');
const Person = require('../src/model/Person');
const Address = require('../src/model/Address');
const Client = require('../src/model/Client');
describe("Client - ", function () {

    //create empty object
    const client1 = new Client();
    //create full object
    const client2 = new Client(new Person("A", "B", "C", new Address("D", "2a", "21", "E", "12-345", "876-154-426"), "1234-43-2143f"));
    //create business client (with company name)
    const client3 = new Client(new Person("Anna", "Bok", "Cyrk"));
    //create private client (company name is empty)
    const client4 = new Client(new Person("Anna", "Bok"));


    it("Constructor should exist", function () {
        //noinspection BadExpressionStatementJS
        expect(Client).to.exist;
    });
    it("Empty object should not to be undefined", function () {
        //noinspection BadExpressionStatementJS
        expect(client1).to.not.be.undefined;
    });
    it("Empty object should have ID",function () {
        expect(client1._id).to.not.be.empty;
    });
    //generateId tests
    it("Personal client should have first name in ID",function () {
        expect(client4._id).to.have.string(client4.personaldetails.fname.toLowerCase());
    });
    it("Bussiness client should have company name in ID",function () {
        expect(client3._id).to.have.string(client4.personaldetails.companyname.toLowerCase());
    })

});