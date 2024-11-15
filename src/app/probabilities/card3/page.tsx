"use client";
import React from 'react';
import { card3Data } from '../data/card3Data';
import Graph from '@/components/Graph';

const Card3 = () => {
  const { title, yesData, noData } = card3Data;

  return <Graph title={title} yesData={yesData} noData={noData} />;
};

export default Card3;
