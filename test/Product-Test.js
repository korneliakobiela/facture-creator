/**
 * Created by kornelia on 22.01.17.
 */
const expect = require('chai').expect;
const sinon = require('sinon');
const Product = require('../src/model/Product');

describe("Address",function () {
    it("Should exists",function () {
        //noinspection BadExpressionStatementJS
        expect(Product).to.exist;
    });
});