"use client";
import React from 'react';
import { card8Data } from '../data/card8Data';
import Graph from '@/components/Graph';

const Card8 = () => {
  const { title, yesData, noData } = card8Data;

  return <Graph title={title} yesData={yesData} noData={noData} />;
};

export default Card8;
