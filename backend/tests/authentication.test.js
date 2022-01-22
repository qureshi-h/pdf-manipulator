"use strict";

const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const app = require("../app");

chai.should();
chai.use(chaiHttp);

describe("Authentication API", () => {
    it("Authenticate Valid User", (done) => {
        chai.request(app)
            .post("/auth/authenticateUser")
            .send({
                email: "onlinepdfmanager@gmail.com",
                password: "password",
            })
            .end((err, response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.be.a("object");
                expect(response.body).to.have.keys([
                    "name",
                    "picture",
                    "result",
                    "status_code",
                ]);
                expect(response.body.result).to.be.true;
                done();
            });
    });

    it("Authenticate Invalid User I", (done) => {
        chai.request(app)
            .post("/auth/authenticateUser")
            .send({
                email: "onlinepdfmanager@gmail.com",
                password: "WrongPassword",
            })
            .end((err, response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.be.a("object");
                expect(response.body).to.have.keys([
                    "name",
                    "picture",
                    "result",
                    "status_code",
                ]);
                expect(response.body.result).to.be.false;
                done();
            });
    });

    it("Authenticate Invalid User II", (done) => {
        chai.request(app)
            .post("/auth/authenticateUser")
            .send({
                email: "WrongEmail@gmail.com",
                password: "password",
            })
            .end((err, response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.be.a("object");
                expect(response.body).to.have.keys([
                    "name",
                    "picture",
                    "result",
                    "status_code",
                ]);
                expect(response.body.result).to.be.false;
                done();
            });
    });
});
