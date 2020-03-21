const expect = require('chai').expect;
const supertest = require('supertest');

api = supertest('http://localhost:3000');


describe('route principale /api', function () {

    describe('TESTS des coupons', function () {
        it('Vérifie qu\'il y a chaque propriété pour le get /coupons', function (done) {
            api.get('/api/coupons')
                .expect(200)
                .end(function (err, res) {
                    expect(res.status).to.equal(200);
                    expect(res.body[0]).to.have.property('couponId');
                    expect(res.body[0]).to.have.property('discount');
                    expect(res.body[0]).to.have.property('description');
                    expect(res.body[0]).to.have.property('date_debut');
                    expect(res.body[0]).to.have.property('date_fin');
                    done();
                });
        });
    });

});