/**
 * Created by kornelia on 22.01.17.
 */
const expect = require('chai').expect;
const sinon = require('sinon');
const Address = require('../src/model/Address');

describe("Address",function () {
    it("Should exists",function () {
        //noinspection BadExpressionStatementJS
        expect(Address).to.exist;
    });
});