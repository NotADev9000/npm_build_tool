var should = require("should");
var greeter = require("../lib/typeCode.js");

describe("Typescript compiled correctly", function () {
  it("When this passed", function () {
    var g = new greeter();
    g.greet("Boss").should.equal("Hello Boss");
  })
})