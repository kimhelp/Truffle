const solc = require("solc");
const fs = require("fs-extra");
const path = require("path");

class Contract {
  static compile() {
    const contractPath = path.join(__dirname, "../contracts", "HelloWorld.sol");

    const data = JSON.stringify({
      language: "Solidity",
      sources: {
        "HelloWorld.sol": {
          content: fs.readFileSync(contractPath, "utf-8"),
        },
      },
      settings: {
        outputSelection: {
          "*": {
            "*": ["*"],
          },
        },
      },
    });
    const compiled = JSON.parse(solc.compile(data));
    Contract.writeOutput(compiled);
  }
  static writeOutput(_compiled) {
    // console.log(_compiled.contracts["HelloWorld.sol"].HelloWorld.abi);
    // console.log(_compiled.contracts);
    for (const contractFilename in _compiled.contracts) {
      const [contractName] = contractFilename.split(".");
      const contract = _compiled.contracts[contractFilename][contractName];

      const abi = contract.abi;
      const bytecode = contract.evm.bytecode.object;
      console.log(abi);
      console.log(bytecode);
      const obj = {
        abi,
        bytecode,
      };
      const buildPath = path.join(
        __dirname,
        "../build",
        `${contractName}.json`
      );
      fs.outputJSONSync(buildPath, obj);
      return [abi, bytecode];
    }
  }
}
module.exports = { Contract };
