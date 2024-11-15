"use client";
import React from 'react';
import { card6Data } from '../data/card6Data';
import Graph from '@/components/Graph';

const Card6 = () => {
  const { title, yesData, noData } = card6Data;

  return <Graph title={title} yesData={yesData} noData={noData} />;
};

export default Card6;
