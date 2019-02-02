# Using Oraclize APIs in Smart Contract

## Requirement

- node `^8.0.0`
- npm `^5.0.0`
- truffle v4

## Installation

```
# oraclize-test
git clone https://github.com/maggie-5miles/oraclize-test.git
cd oraclize-test
npm install
truffle compile

# download ethereum-bridge somewhere else on your computer, completely independent of this project
git clone https://github.com/oraclize/ethereum-bridge.git
cd ethereum-bridge
npm install

# make sure Ganache-CLI are installed globally 
npm install -g ganache-cli
```

## Ropsten

Navigate to the `oraclize-test` folder:
```
truffle test --network ropsten
```

Output will look like:
```
Using network 'ropsten'.

  Contract: Template
randomNumber:  496
    ✓ sends a query and receives a response (43457ms)

Stopped watching!

  1 passing (1m)
```

## Ganache + Ethereum-Bridge

Start Ganache-CLI
```
ganache-cli
```

In another terminal window, navigate to the ethereum-bridge folder and run the following command:
```
node bridge -H localhost:8545 -a 2 --dev
```

Run test in a third window
```
truffle test
```

Output will look like:
```
Using network 'development'.

  Contract: Template
randomNumber:  113
    ✓ sends a query and receives a response (14839ms)

  1 passing (15s)
```
