# 개발환경 만들기

```sh

$ npm init -y

$ npm install keythereum web3

```

UTC 파일에에서 개인키

web3 - > transaction
ethereumjs-tx 서명 개인키

keythereum -> 개인키
web3 복호화 -> 개인키

```typescript
class chain {
    private chain:Block[]

    constructor(){
        this.chain = ['제네시스 블록']
    }
    pulbic getChain(){
        return this.chain
    }
    public setChain(_block:Block){
        this.chain.push(_block)
    }
}
```

HelloWorld
HelloWorld.address //ca
HelloWorld.deployed().then(instance = > hello = instance)
hello. tab tab

hello.setValue('ingoo')
hello.value()

재배포
npx truffle migration --reset

truffle console
HelloWorld.address //ca
HelloWorld.deployed().then(instance = > hello = instance)
hello.