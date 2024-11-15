import React from 'react';

interface ReviewCardProps {
  title: string;
  description: string;
  proposedWinner: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ title, description, proposedWinner }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-md shadow-md ml-4">
      <h3 className="text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
      <p className="text-gray-400 text-sm mt-2">Proposed Winner: {proposedWinner}</p>
    </div>
  );
};

export default ReviewCard; 