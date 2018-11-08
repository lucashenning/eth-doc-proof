pragma solidity ^0.4.23;

contract HashStorage {

    string private hash;

    constructor (string _hash) public {
        hash = _hash;
    }

    function getHash() public view returns(string) {
        return hash;
    }
    
}
