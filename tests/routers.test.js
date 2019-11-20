//imports
const server = require('../server');
const request = require('supertest');

const clientsRouter = require('../routers/clients-router');
const loansRouter = require('../routers/loans-router');
const paymentsRouter = require('../routers/payments-router');
const usersRouter = require('../routers/users-router');
const { getJwtToken } = require('../middleware/users-validation');

const db = require('../data/dbConfig');

//token
const token = getJwtToken('test@test.com');

//CLIENTS

describe("clientsRouter", () => {
//POST to '/api/auth/clients'
    describe('POST /', function() {
        it('should return 201 - CREATE', function() {
            beforeEach(async () => {
                await db("clients").truncate();
            });
            return request(server)
                .post('/api/auth/clients')
                .set('Authorization', token)
                .send({
                    name: "Mohammed Clark-Smith",
                    village: "Bolgatanga",
                    user_id: 2,
                    goal: "2 MT Maize Annual",
                    harvest: "3 MT"
                })
                .then(res => {
                    expect(res.status).toBe(201);
                });
        });

        it('should return an object as the body', function() {
            
        })

        it('should return JSON formatted response', function() {
            
        })
    })

//GET to '/api/auth/clients'

    describe('GET /', function(){
        it('should return 200 - OK', function() {

        });

        it('should return an array as the body', function() {
            
        })

        it('should return JSON formatted response', function() {
            
        })
    })
//GET to '/api/auth/clients/:id'

     describe('GET /:id', function(){
        it('should return 200 - OK', function() {

        });

        it('should return an object as the body', function() {
            
        })

        it('should return JSON formatted response', function() {
            
        })
    })
//PUT to '/api/auth/clients/:id'
    describe('PUT /:id', function(){
        it('should return 200 - OK', function() {

        });

        it('should return an object as the body', function() {
            
        })

        it('should return JSON formatted response', function() {
            
        })
    })
//DELETE to '/api/auth/clients/:id'
    describe('DELETE /', function(){
        it('should return 200 - OK', function() {

        });

        it('should return an object as the body', function() {
            
        })

        it('should return JSON formatted response', function() {
            
        })
    })

})
