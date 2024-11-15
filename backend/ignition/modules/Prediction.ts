// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PredictionModule = buildModule("PredictionModule", (m: any) => {
  const Prediction = m.contract("Prediction");

  return { Prediction };
});

module.exports = PredictionModule;