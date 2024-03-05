import supertest from "supertest";
import {app} from "../src/application/app";
import {logger} from "../src/application/logging";
import {UserTest} from "./test-util";
import bcrypt from "bcrypt";


describe('POST /api/users', () => {

    afterEach(async () => {
        await UserTest.delete()
    })

    it('should reject register new user if request is invalid', async () => {
        const response = await supertest(app)
            .post("/api/users")
            .send({
                username: "",
                password: "",
                name: ""
            });

        logger.debug(response.body);
        expect(response.status).toBe(400);
        expect(response.body.errors).toBeDefined();
    });

    it('should  register new', async () => {
        const response = await supertest(app)
            .post("/api/users")
            .send({
                username: "test",
                password: "test",
                name: "test"
            });

        logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.username).toBe("test");
        expect(response.body.data.name).toBe("test");
    });
});

describe('POST /api/users/login', () => {
    beforeEach(async () => {
        await UserTest.create()
    })

    afterEach(async () => {
        await UserTest.delete()
    })

    it('should  be able to login', async () => {
        const response = await supertest(app).post('/api/users/login')
            .send({
                username: "test",
                password: "test"
            })

        logger.debug(response.body)
        expect(response.status).toBe(200);
        expect(response.body.data.username).toBe("test");
        expect(response.body.data.name).toBe("test");
        expect(response.body.data.token).toBeDefined();
    });


    it('should  reject to login', async () => {
        const response = await supertest(app).post('/api/users/login')
            .send({
                username: "salah",
                password: "test"
            })

        logger.debug(response.body)
        expect(response.status).toBe(401);
        expect(response.body.errors).toBeDefined()
    });
});


describe('GET /api/users/current', () => {
    beforeEach(async () => {
        await UserTest.create()
    })

    afterEach(async () => {
        await UserTest.delete()
    })

    it('should be able to get user', async () => {
        const response = await supertest(app).get("/api/users/me")
            .set("X-API-TOKEN", "test")

        logger.debug(response.body)
        expect(response.status).toBe(200)
        expect(response.body.data.username).toBe("test")
        expect(response.body.data.name).toBe("test")
    });
});

describe('PATCH /api/users/update', () => {
    beforeEach(async () => {
        await UserTest.create()
    })

    afterEach(async () => {
        await UserTest.delete()
    })

    it('should reject update user if requst is invalid', async () => {
        const response = await supertest(app).patch("/api/users/update")
            .set("X-API-TOKEN", "test")
            .send({
                password: "",
                name: ""
            })


        logger.debug(response.body)
        expect(response.status).toBe(400)
        expect(response.body.errors).toBeDefined()
    });

    it('should reject update user if token is wrong', async () => {
        const response = await supertest(app).patch("/api/users/update")
            .send({
                password: "benar",
                name: "benar"
            })


        logger.debug(response.body)
        expect(response.status).toBe(401)
        expect(response.body.errors).toBeDefined()
    });

    it('should  update user ', async () => {
        const response = await supertest(app).patch("/api/users/update")
            .set("X-API-TOKEN", "test")
            .send({
                name: "benar",
                password: "benar",
            })


        logger.debug(response.body)
        expect(response.status).toBe(200)
        const user = await UserTest.get();
        expect(await bcrypt.compare("benar", user.password)).toBe(true)
    });
});


describe('DELETE /api/users', () => {
    beforeEach(async () => {
        await UserTest.create()
    })

    afterEach(async () => {
        await UserTest.delete()
    })
    it('should be able logout',async () => {
        const response = await supertest(app)
            .delete("/api/users")
            .set("X-API-TOKEN", "test")

        logger.debug(response.body)
        expect(response.status).toBe(200)
        expect(response.body.data).toBe("OK")
        const user = await UserTest.get();
        expect(user.token).toBe(null)
    });

    it('should reject update user if token is wrong', async () => {
        const response = await supertest(app)
            .delete("/api/users")
            .set("X-API-TOKEN", "salah")


        logger.debug(response.body)
        expect(response.status).toBe(401)
        expect(response.body.errors).toBeDefined()
    });
});