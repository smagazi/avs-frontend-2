"use client";
import React from 'react';
import SubPage from '../SubPage';
import Graph from '@/components/Graph';
import { card1Data } from '../data/card1Data';
import { useAccount, useContractWrite } from 'wagmi'; // Import wagmi hooks
import * as PredictionContract from '../../../../backend/ignition/modules/Prediction'; // Adjust the path as necessary
import abi from '../../../../backend/abis/abi';

const contractAddress = '0xC2D34796270d944F1a1e3C78393628b726366473'; // Specify your contract address here
const { isConnected } = useAccount(); // Check if the user is connected


const { title, yesData, noData } = card1Data;
const { write: placeA } = useContractWrite({
  address: contractAddress,
  abi: abi,
  functionName: 'placeA',
});
const { write: placeB } = useContractWrite({
  address: contractAddress,
  abi: abi,
  functionName: 'placeB',
});

const handleYes = async () => {
  if (!isConnected) {
    console.error('MetaMask not connected!');
    return;
  }
  await placeA({ args: [1] }); // Call placeA with arguments
};

const handleNo = async () => {
  if (!isConnected) {
    console.error('MetaMask not connected!');
    return;
  }
  await placeB({ args: [1] }); // Call placeB with arguments
};


const Card1 = () => {

  return (
    <SubPage title={title}>
      <Graph title={title} yesData={yesData} noData={noData} />
      <div>
        <button onClick={handleYes} style={{ margin: '0 10px', padding: '10px 20px', color: 'white', backgroundColor: 'green', borderRadius: '5%' }}>Yes</button>
        <button onClick={handleNo} style={{ margin: '0 10px', padding: '10px 20px', color: 'white', backgroundColor: 'red', borderRadius: '5%' }}>No</button>
      </div>
    </SubPage>
  );
};

export default Card1; 