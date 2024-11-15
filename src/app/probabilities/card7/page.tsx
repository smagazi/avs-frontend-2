"use client";
import React from 'react';
import { card7Data } from '../data/card7Data';
import Graph from '@/components/Graph';

const Card7 = () => {
  const { title, yesData, noData } = card7Data;

  return <Graph title={title} yesData={yesData} noData={noData} />;
};

export default Card7;
