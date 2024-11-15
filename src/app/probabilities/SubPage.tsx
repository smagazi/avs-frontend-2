import React from 'react';

const SubPage = ({ title, children }) => {
  return (
    <div>
      <h2 style={{ color: 'white', fontSize: '2rem' }}>{title}</h2>
      {children}
    </div>
  );
};

export default SubPage;