/**
 * Created by kornelia on 22.01.17.
 */
const expect = require('chai').expect;
const Person = require('../src/model/Person');
const Address = require('../src/model/Address');

describe(`Person`, function () {
    it('should exist', function () {
        //noinspection BadExpressionStatementJS
        expect(Person).to.exist;
    });
    it('should be a function', function () {
        //noinspection BadExpressionStatementJS
        expect(Person).to.be.a('function');
    });
    it("should be able to make instances", function () {
        const person1 = new Person();
        expect(person1).to.instanceof(Person);
    });
    it("should not generate empty object",function () {
        const person = new Person();
        expect(person).not.to.be.empty;
    });
    it("should have address propert typeof Address",function () {
        const person = new Person();
        expect(person.address).to.be.instanceof(Address);
    });
    it("should have getKeys property", function () {
        const person = new Person();
        expect(person).to.have.property('getKeys');
    });
    it("getKeys should return an Array",function () {
        const person = new Person();
        expect(person.getKeys()).to.be.a('Array');
    });
    it("should have length property",function () {
        expect(Person).to.have.property('length');
    });
    it("should change a length property",function () {
        const person = new Person();
        const l = person.length();
        person.a = 7;
        const l2 = person.length();
        expect(l).to.not.equal(l2);
    })
});