var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");


describe("Testing movie add Method", function(err){
it("should respond", function(done){
  url
      .post("/movie/fav")
      .expect(200)
      .send({
        "Title":"Dil Chahta Hai",
        "imdbID":"tt0292490",
          "Year": "2001",
          "Poster":"N/A"
          })
      .end(function(err,res){
        res.text.should.be.equal("Movie Created");
        done();
      });

});
});

describe("Testing movie display Method ", function(err){
it("should respond", function(done){
  url
      .get("/movie/favmovies")
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err,res){
        var myObj = JSON.parse(res.text);
        console.log(myObj);
        myObj[0].Title.should.be.equal("Dil Chahta Hai");
        done();
      });

});
});

describe("Testing movie update Method", function(err){
it("should respond", function(done){
  url
      .put("/movie/:id")
      .expect(200)
      .end(function(err,res){
        res.text.should.be.equal("Movie Created");
        done();
      });

});
});

describe("Testing movie delete Method ", function(err){
  it("should respond", function(done){
    url
        .delete("/movie/:id1")
        .expect(200)
        .end(function(err,res){
          res.text.should.be.equal("Deleted");
          done();
        });
});
  });
