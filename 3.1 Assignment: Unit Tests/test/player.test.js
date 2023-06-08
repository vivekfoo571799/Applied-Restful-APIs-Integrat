const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const players = require('../models/player');

const should = chai.should();
chai.use(chaiHttp);

describe('player', () => {
    beforeEach((done) => {
               // Clear the database before each test
        players.deleteMany({}, (err) => {
            done();
        });
    });

    // Test the GET route
    describe('/GET player', () => {
        it('it should GET all the player', (done) => {
            chai.request(server)
                .get('/api/player')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    // Test the POST route
    describe('/POST player', () => {
        it('it should add a player', (done) => {
            const players = {
                name: 'Test player'
            };

            chai.request(server)
                .post('/api/player')
                .send(players)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('name');
                    res.body.should.have.property('createdAt');
                    done();
                });
        });
    });
});
