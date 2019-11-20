const request = require('supertest');
const server = require('../server');

describe('server.js', () => {
    describe('index test route', () => {
        it('should return an OK status code', async () => {
            const expectedStatusCode = 200;

            const response = await request(server).get('/');
            expect(response.status).toEqual(expectedStatusCode);
        });
        it('should return an object as the body', async () => {
            const expectedBody = {message: 'sanity check passed'};

            const response = await request(server).get('/');

            expect(response.body).toEqual(expectedBody);
        });
        it('should return a JSON object', async () => {
            const response = await request(server).get('/');
            
            expect(response.type).toEqual('application/json');

        })
        })
})