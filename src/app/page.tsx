"use client";
import { redirect } from 'next/navigation'
import Link from 'next/link';
import { card1Data } from './probabilities/data/card1Data'; // Import data for preview
import { card2Data } from './probabilities/data/card2Data';
import { card3Data } from './probabilities/data/card3Data';
import { card4Data } from './probabilities/data/card4Data';
import { card5Data } from './probabilities/data/card5Data';
import { card6Data } from './probabilities/data/card6Data';
import { card7Data } from './probabilities/data/card7Data';
import { card8Data } from './probabilities/data/card8Data';
import { card9Data } from './probabilities/data/card9Data';
import Graph from '@/components/Graph'; // Import the Graph component

function HomePage() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4 text-black">Betting Prompts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
        <Link href="/probabilities/card1">
          <div className="p-4 border border-gray-700 rounded">
            <Graph title={card1Data.title} yesData={card1Data.yesData} noData={card1Data.noData} />
          </div>
        </Link>
        <Link href="/probabilities/card2">
          <div className="p-4 border border-gray-700 rounded">
            <Graph title={card2Data.title} yesData={card2Data.yesData} noData={card2Data.noData} />
          </div>
        </Link>
        <Link href="/probabilities/card3">
          <div className="p-4 border border-gray-700 rounded">
            <Graph title={card3Data.title} yesData={card3Data.yesData} noData={card3Data.noData} />
          </div>
        </Link>
        <Link href="/probabilities/card4">
          <div className="p-4 border border-gray-700 rounded">
            <Graph title={card4Data.title} yesData={card4Data.yesData} noData={card4Data.noData} />
          </div>
        </Link>
        <Link href="/probabilities/card5">
          <div className="p-4 border border-gray-700 rounded">
            <Graph title={card5Data.title} yesData={card5Data.yesData} noData={card5Data.noData} />
          </div>
        </Link>
        <Link href="/probabilities/card6">
          <div className="p-4 border border-gray-700 rounded">
            <Graph title={card6Data.title} yesData={card6Data.yesData} noData={card6Data.noData} />
          </div>
        </Link>
        <Link href="/probabilities/card7">
          <div className="p-4 border border-gray-700 rounded">
            <Graph title={card7Data.title} yesData={card7Data.yesData} noData={card7Data.noData} />
          </div>
        </Link>
        <Link href="/probabilities/card8">
          <div className="p-4 border border-gray-700 rounded">
            <Graph title={card8Data.title} yesData={card8Data.yesData} noData={card8Data.noData} />
          </div>
        </Link>
        <Link href="/probabilities/card9">
          <div className="p-4 border border-gray-700 rounded">
            <Graph title={card9Data.title} yesData={card9Data.yesData} noData={card9Data.noData} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;