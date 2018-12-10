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
    this.hash = this.calculateHash();
  }
//calculates the hash function of the block
//takes the properties of the block runs through the hash function and returns the hash which identifies our block on the blockchain
  calculateHash() {
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }

}
//The constructor is responsible for initializing the blockchain
//the chain property is an array of blocks

class Blockchain{
  constructor(){
    this.chain = [this.createGenesisBlock()];
  }
  //the first block on a blockchain is the genesis block which should be added manually
  createGenesisBlock(){
    return new Block(0, "01/01/2019", "Genesis block", "0");
  }

  getLatestBlock(){
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock){
    //sets the previoushash property of the new block to the last block hash on the chain
    newBlock.previousHash = this.getLatestBlock().hash; 
    //recalcuate the hash, if any changes occur to a block property, the hash should be changed
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
//to verify the integrity of our blockchain
//blockchains are great because once a block is added, it cannont be changed without invaldating the rest of the chain
  isChainValid(){
    //block 0 is the Genesis block so set i = 1, loop to the end of the chain, increase by 1 everytime
    for(let i = 1; i < this.chain.length; i++){
      const currentBlock = this.chain[i]; //grab the current block by taking i position in the chain
      const previousBlock = this.this.chain[i - 1]; //grab the previous block

      //is the hash of the block still valid?
      if (currentBlock.hash != currentBlock.calculateHash()){
        return false;
      }
      //does the previousHash on our current block match the hash on the previous block?
      if(currentBlock.previousHash != previousBlock.hash){
        return false;
      }
    }
    return true;
  }
}
//usually it's not so easy to add a blockchain, just doing it this way for this simple app

let alchemyCoin = new Blockchain();
alchemyCoin.addBlock(new Block(1, '01/02/2019', { amount: 4}))
alchemyCoin.addBlock(new Block(2, '01/03/2019', { amount: 11}))

console.log(JSON.stringify(alchemyCoin, null, 4));