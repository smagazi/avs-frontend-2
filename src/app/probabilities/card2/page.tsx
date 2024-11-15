"use client";
import React from 'react';
import { card2Data } from '../data/card2Data';
import Graph from '@/components/Graph';

const Card2 = () => {
  const { title, yesData, noData } = card2Data;

  return <Graph title={title} yesData={yesData} noData={noData} />;
};

export default Card2;
