"use client";
import React from 'react';
import { card1Data } from '../data/card1Data';
import Graph from '@/components/Graph';

const Card1 = () => {
  const { title, yesData, noData } = card1Data;

  return (
    <div>
      <h2 style={{ color: 'white', fontSize: '2rem' }}>{title}</h2>
      <Graph title={title} yesData={yesData} noData={noData} />
    </div>
  );
};

export default Card1; 