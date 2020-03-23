const expect = require('chai').expect;
const supertest = require('supertest');

api = supertest('http://localhost:3000');


describe('route principale /api', function () {

    describe('TEST register user', function () {
        it('/api/register', function (done) {
            const bcrypt = require('bcryptjs');
            const salt = bcrypt.genSaltSync(5);
            const testMdp = bcrypt.hashSync('test', salt);

            const userToCreate = {
                userId: 4,
                nom: 'test',
                prenom: 'test',
                email: 'test@test.fr',
                pwd: testMdp
            };

            api.post('/api/register')
                .send(userToCreate)
                .end(function (err, res) {
                    expect(res.status).to.equal(200);
                    done();
                });
        });
    });


    describe('TEST login user', function () {
        it('/api/login', function (done) {
            const userToLogin = {
                email: 'sullivan.delaby@epsi.fr',
                pwd: 'sullivan'
            };

            api.post('/api/login')
                .send(userToLogin)
                .end(function (err, res) {
                    expect(res.status).to.equal(200);
                    done();
                });
        });
    });

});