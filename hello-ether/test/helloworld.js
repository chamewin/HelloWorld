var HelloWorld = artifacts.require('./HelloWorld.sol');
contract('HelloWorld:GetMessage', function(accounts) {
  it("should return a correct string", function(done) {
    var helloworld = HelloWorld.deployed();
    helloworld.then(function(contract) {
      return contract.GetMessage.call();
    }).then(function(result) {
      assert.isTrue(result === 'Hello World!');
      done();
    })
  });
});
