//imports
const request = require('supertest');
const clientsRouter = require('../routers/clients-router');
const loansRouter = require('../routers/loans-router');
const paymentsRouter = require('../routers/paymentss-router');
const usersRouter = require('../routers/users-router');

//CLIENTS

describe('clientsRouter', funtion(){
//POST to '/api/auth/clients'
    describe('POST /', function(){
        it('should return 201 - CREATE', function() {

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

