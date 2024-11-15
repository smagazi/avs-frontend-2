"use client";
import React, { useEffect, useState } from 'react';
import { card9Data } from '../data/card9Data';
import Graph from '@/components/Graph';

const Card9 = () => {
  const { title, yesData, noData } = card9Data;
  const [randomVolume, setRandomVolume] = useState(0);

  useEffect(() => {
    const volume = Math.floor(Math.random() * (5000000 - 10000 + 1)) + 10000;
    setRandomVolume(volume);
  }, []);

  return (
    <div>
      <h2 style={{ color: 'white', fontSize: '2rem' }}>{title}</h2>
      <p>${randomVolume.toLocaleString()} Volume</p> {/* Display the random volume */}
      <Graph title={title} yesData={yesData} noData={noData} />
    </div>
  );
};

export default Card9;