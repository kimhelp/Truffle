const { Contract } = require("./controllers/compile");
const { Client } = require("./controllers/client");

const [abi, bytecode] = Contract.compile("HelloWorld.sol");
const client = new Client("ws://127.0.0.1:8545");

const ca = "e343ae82fc87003b12fa756e5d1e7f44ba3820d9";
const contract = new client.web3.eth.Contract(abi, ca);

const txObject = {
  data: bytecode,
};

async function init() {
  const instance = await contract.deploy(txObject).send({
    from: "346ae87d055cbe5eadef6aa835f499cfb21973f0",
    gas: 3000000,
  });
  console.log(instance.options.address);
}

contract.methods
  .value()
  .call()
  .then((data) => {
    console.log(data);
  });
// init();
