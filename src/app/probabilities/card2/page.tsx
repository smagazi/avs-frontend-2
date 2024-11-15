"use client";
import React from 'react';
import SubPage from '../SubPage';
import Graph from '@/components/Graph';
import { card2Data } from '../data/card2Data';

const Card2 = () => {
  const { title, yesData, noData } = card2Data;

  return (
    <SubPage title={title}>
      <Graph title={title} yesData={yesData} noData={noData} />
      <div>
        <button style={{ margin: '0 10px', padding: '10px 20px', color: 'white', backgroundColor: 'green', borderRadius: '5%' }}>Yes</button>
        <button style={{ margin: '0 10px', padding: '10px 20px', color: 'white', backgroundColor: 'red', borderRadius: '5%' }}>No</button>
      </div>
    </SubPage>
  );
};

export default Card2;
