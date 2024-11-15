"use client";
import React from 'react';
import { card4Data } from '../data/card4Data';
import Graph from '@/components/Graph';

const Card4 = () => {
  const { title, yesData, noData } = card4Data;

  return <Graph title={title} yesData={yesData} noData={noData} />;
};

export default Card4;
