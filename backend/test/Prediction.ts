import { expect } from "chai";
import { ethers } from "hardhat";

describe("Token contract", function () {
  it("Deployment should assign token amounts", async function () {
    const PredictionContract = await ethers.deployContract("Prediction");

    expect(await PredictionContract.getA()).to.equal(100);
  });

  it("Deployment should assign token amounts", async function () {
    const PredictionContract = await ethers.deployContract("Prediction");

    expect(await PredictionContract.getB()).to.equal(100);
  });
});


describe("Withdraw function", function () {
  it("Check amountA", async function () {
    const PredictionContract = await ethers.deployContract("Prediction");
    await PredictionContract.placeA(20);
    expect(await PredictionContract.getA()).to.equal(120);
  });

  it("Check amount B", async function () {
    const UniswapV2Contract = await ethers.deployContract("Prediction");
    await UniswapV2Contract.placeB(20);
    expect(await UniswapV2Contract.getB()).to.equal(120);
  });
});