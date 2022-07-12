// const { default: Web3 } = require("web3");
const Web3 = require("web3");

//싱글톤 인스턴스

let instance;

class Client {
  constructor(_url) {
    if (instance) return instance;
    this.web3 = new Web3(_url);
    instance = this;
  }
}

module.exports = { Client };
