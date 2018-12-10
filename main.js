const SHA256 = require('crypto-js/sha256');

//index is optional - tells where the block sits on the chain
//timestamp = when the block was created
//data = any type of data associated with this block, money transferred sender receiver
//previosHash is a string that contains the hash of the block before this one, ensures the integrity of the block chain.
class Block{
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash;
  }
//calculates the hash function of the block
//takes the properties of the block runs through the hash function and returns the hash which identifies our block on the blockchain
  calculateHash() {
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }

}
//The constructor is responsible for initializing the blockchain
//the chain property is an array of blocks
//the first block on a blockchain is the genesis block which should be added manually
class Blockchain{
  constructor(){
    this.chain = [];
  }
}