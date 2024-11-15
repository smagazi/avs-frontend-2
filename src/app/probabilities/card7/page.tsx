"use client";
import React from 'react';
import SubPage from '../SubPage';
import Graph from '@/components/Graph';
import { card1Data } from '../data/card1Data';
import { useAccount, useWriteContract } from 'wagmi';
import abi from "../../../../../backend/abis/abi"

const contractAddress = '0xC2D34796270d944F1a1e3C78393628b726366473';

const Card7 = () => {
  const { isConnected } = useAccount();
  const { title, yesData, noData } = card1Data;
  const { writeContract } = useWriteContract()

  return (
    <SubPage title={title}>
      <Graph title={title} yesData={yesData} noData={noData} />
      <div>

      <button 
      onClick={() => 
        writeContract({ 
          abi,
          address: '0xC2D34796270d944F1a1e3C78393628b726366473',
          functionName: 'placeA',
          args: [1],
       })
      }
      style={{ margin: '0 10px', padding: '10px 20px', color: 'white', backgroundColor: 'green', borderRadius: '5%' }}
    >
      Yes
    </button>


    <button 
      onClick={() => 
        writeContract({ 
          abi,
          address: '0xC2D34796270d944F1a1e3C78393628b726366473',
          functionName: 'placeB',
          args: [1],
       })
      }
      style={{ margin: '0 10px', padding: '10px 20px', color: 'white', backgroundColor: 'green', borderRadius: '5%' }}
    >
      No
    </button>


      </div>
    </SubPage>
  );
};

export default Card7; 