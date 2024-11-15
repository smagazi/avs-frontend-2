"use client";
import React from 'react';
import { card5Data } from '../data/card5Data';
import Graph from '@/components/Graph';

const Card5 = () => {
  const { title, yesData, noData } = card5Data;

  return <Graph title={title} yesData={yesData} noData={noData} />;
};

export default Card5;
