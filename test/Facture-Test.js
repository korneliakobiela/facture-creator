/**
 * Created by kornelia on 22.01.17.
 */
const expect = require('chai').expect;
const sinon = require('sinon');
const Facture = require('../src/model/Facture');

describe("Facture",function () {
    it("Should exists",function () {
            //noinspection BadExpressionStatementJS
            expect(Facture).to.exist;
    });
});