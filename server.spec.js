
const server = require('./server');
const request = require('supertest');
const db = require('./database/dbConfig.js');

const restricted = require('./auth/restricted.js');


beforeEach(async () => {
    return await db.migrate.rollback()
        .then(() => db.migrate.latest())
        .then(() => db.seed.run());
});

describe('User endpoints', () => {
    it('should run the tests', function() {
        expect(true).toBe(true);
    }); 

    it('registers new user', async () => {
        const res = await request(server).post('/api/users/register').send({
            username:'isa7',
            email: 'isa7@shaw.com',
            password: '111'
        });
        expect(res.status).toBe(201);
        
    });

    it('login user', async () => {
        await request(server).post('/api/users/register').send({
            username:'isa7',
            email: 'isa7@shaw.com',
            password: '111'
        });
        const res = await request(server).post('/api/users/login').send({
            email: 'isa7@shaw.com',
            password: '111'
        });
        expect(res.status).toBe(200);
        expect(res.body.message).toEqual(`Welcome isa7`)
    });

    it('updates user email', async () => {
        await request(server).post('/api/users/register').send({
            username:'isa7',
            email: 'isa7@yahoo.com',
            password: '111'
        });
        const login = await request(server).post('/api/users/login').send({
            email: 'isa7@shaw.com',
            password: '111'
        });
        const res = await request(server).put('/api/users/7/email').send({
            email: 'user@test.com'
        })
        .set('authorization', login.body.token)
        .set('email', login.body.user.email)
        .set('password', '111');
        expect(res.status).toBe(204);
    });

    it('saves a strain to user', async () => {
        await request(server).post('/api/users/register').send({
            username:'isa7',
            email: 'isa7@yahoo.com',
            password: '111'
        });
        const login = await request(server).post('/api/users/login').send({
            email: 'isa7@yahoo.com',
            password: '111'
        });
        const res = await request(server).post('/api/users/7/strains').send({
            strainID: 2
        })
        .set('authorization', login.body.token)
        .set('email', login.body.user.email)
        .set('password', '111');
        expect(res.status).toBe(201);
        const saved = await request(server).get('/api/users/7/strains')
        .set('authorization', login.body.token)
        .set('email', login.body.user.email)
        .set('password', '111');
        expect(saved.body[0].strain_name).toEqual('98-White-Widow');
    });

    it('gets users saved strains', async () => {
        await request(server).post('/api/users/register').send({
            username:'isa7',
            email: 'isa7@yahoo.com',
            password: '111'
        });
        const login = await request(server).post('/api/users/login').send({
            email: 'isa7@yahoo.com',
            password: '111'
        });
        const res = await request(server).post('/api/users/1/strains').send({
            strainID: 2
        })
        .set('authorization', login.body.token)
        .set('email', login.body.user.email)
        .set('password', '111');
        expect(res.status).toBe(201);
        const saved = await request(server).get('/api/users/1/strains')
        .set('authorization', login.body.token)
        .set('email', login.body.user.email)
        .set('password', '111');
        expect(saved.body[0].strain_name).toEqual('98-White-Widow');
        expect(saved.status).toBe(200);
    });

    it('removes saved strain from user', async () => {
        await request(server).post('/api/users/register').send({
            username:'isa7',
            email: 'isa7@yahoo.com',
            password: '111'
        });
        const login = await request(server).post('/api/users/login').send({
            email: 'isa7@yahoo.com',
            password: '111'
        });
        const res = await request(server).post('/api/users/7/strains').send({
            strainID: 2
        })
        .set('authorization', login.body.token)
        .set('email', login.body.user.email)
        .set('password', '111');
        expect(res.status).toBe(201);
        const saved = await request(server).get('/api/users/7/strains')
        .set('authorization', login.body.token)
        .set('email', login.body.user.email)
        .set('password', '111');
        expect(saved.body[0].strain_name).toEqual('98-White-Widow');
        expect(saved.status).toBe(200);
        const remove = await request(server).delete('/api/users/7/strains').send({
            strainID: 2
        })
        .set('authorization', login.body.token)
        .set('email', login.body.user.email)
        .set('password', '111');
        expect(remove.status).toBe(204);
    });
});