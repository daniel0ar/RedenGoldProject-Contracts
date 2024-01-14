# Fractionalized ERC721 to ERC20 tokens

This project uses demonstrates how an NFT can be divided in fractions to be tokenized and owned. It's an approach taken by popular apps like Fractional.art

## Features
- Create an ERC721 token and transfers its ownership to another contract.
- Mint an x amount of ERC20 tokens and store them in contract.
- Transfer this tokens to users to own fractions of the NFT.
- Put the NFT for sale (contract owner only).
- Swap fraction tokens for ETH in contract thanks to the NFT sell.

## Test
Test the contracts with:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

## Resources
- [OpenZeppelinERC20](https://wizard.openzeppelin.com/)
- [Fractional NFT Solidity Smart Contract | How to fractionalize your NFT](https://www.youtube.com/watch?v=fDRQDP2xW7o)
