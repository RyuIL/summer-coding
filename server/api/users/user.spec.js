const assert = require('assert');
const should = require('should');
const app = require('../../app');
const request = require('supertest');

describe('GET /users', ()=> {
    it('should return 200 status code', (done) => {
        request(app)
            .get('/users')
            .export(200)
            .end((err, res) => {
                if(err) {console.log(err)};
                res.body.should.be.an.instanceof(Array).and.have.length(3);
                res.body.map(user => {
                    user.should.have.properties('id', 'name');
                    user.id.should.be.a.Number();
                    user.name.should.be.a.String();
                });
                done();
            })
    });
});                                                     
