pragma solidity ^0.5.0;


contract HelloWorld {
  string message = "Hello World!";
  constructor() public {
  }

  function GetMessage() public view returns (string memory) {
    return message;
  }
}
