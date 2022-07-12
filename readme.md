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

# Truffle

```
npm i truffle
npm install -g truffle
```

npx truffle compile

```sh
-build : 솔리디티 코드 컴파일된 내용이 들어감.
-contracts : 솔리디티 코드를 넣는 공간
-migrations : deploy
-test : 배포된 애들을 실행시켜보는 공간
-truffle-config.js
```

# migration 파일 구조

[번호]\_내용\_Contract이름

1. truffle console
2. test 코드

npx truffle compile

npx truffle console

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
