"use strict";

const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const app = require("../app");

chai.should();
chai.use(chaiHttp);

describe("Reorganise API", () => {
    let images;

    it("Add PDF", (done) => {
        chai.request(app)
            .post("/pdf/reorganise/addPDF/")
            .field("id", "Reorganise-Test")
            .field("projectName", "alpha")
            .attach("file", "res/test-pdf.pdf", "test-pdf.pdf")
            .end((err, response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.be.a("object");
                expect(response.body).to.have.keys([
                    "status_code",
                    "images",
                    "error",
                    "status_message",
                ]);
                expect(response.body.status_code).to.be.equal(200);
                images = response.body.images.split("\n").slice(0, -1);

                done();
            });
    });

    it("Submit PDF", (done) => {
        console.log(images);
        chai.request(app)
            .post("/pdf/reorganise/submitPDF/")
            .send({ images: images })
            .end((err, response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.be.a("object");
                expect(response.body).to.have.keys([
                    "status_code",
                    "status_message",
                    "pdf",
                ]);
                expect(response.body.status_code).to.be.equal(200);
                images = response.body.images;

                done();
            });
    });
});
