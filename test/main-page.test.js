const should = require('chai').should;
const expect = require('chai').expect;
const supertest = require('supertest');

const db = require('../src/config/db.config');

api = supertest('http://localhost:3000');

describe('TEST Page principale', function () {
    it('TEST Page principale', function (done) {
        api.get('/')
            .expect(200)
            .end(function (err, res) {
                expect(res.body).to.equal('Welcome on MSPR API!');
                done();
            });
    });
});