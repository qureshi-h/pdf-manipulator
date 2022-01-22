"use strict";

const fs = require("fs");
const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const app = require("../app");

chai.should();
chai.use(chaiHttp);

describe("Merge API", () => {
    let images;

    it("Add PDF", (done) => {
        chai.request(app)
            .post("/pdf/merge/addPDF")
            .set("content-type", "multipart/form-data")
            .field("id", "ImageToPDF-Test")
            .field("projectName", "alpha")
            .attach("files", "res/test-pdf.pdf", "test-pdf.pdf")
            .attach("files", "res/test-pdf.pdf", "test-pdf.pdf")
            .end((err, response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.be.a("object");
                expect(response.body).to.have.keys([
                    "status_code",
                    "pdf",
                    "error",
                    "status_message",
                ]);
                expect(response.body.status_code).to.be.equal(200);
                done();
            });
    });
});
