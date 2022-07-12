const keythereum = require("keythereum");
const path = require("path");
const address = "346ae87d055cbe5eadef6aa835f499cfb21973f0";
const dir = path.join(__dirname);
//C:\Users\help\Documents\workspace\2022-07-12

//UTC파일 안에있는 객체를 가져옴
const keyObject = keythereum.importFromFile(address, dir);

//복호화
const privateKey = keythereum.recover("1234", keyObject).toString("hex");

//개인키 반환
console.log(privateKey);
