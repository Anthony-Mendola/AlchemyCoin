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
    this.hash = '';
  }
//calculates the hash function of the block
//takes the properties of the block runs through the hash function and returns the hash which identifies our block on the blockchain
  calculateHash() {

  }

}