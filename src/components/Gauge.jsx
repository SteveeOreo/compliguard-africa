import React from 'react';

const Gauge = ({ value }) => {
  const percentage = Math.max(0, Math.min(value, 100));

  return (
    <div className="relative w-48 h-24">
      <svg className="absolute w-full h-full">
        <circle
          cx="50%"
          cy="100%"
          r="40%"
          stroke="#edf2f7"
          strokeWidth="20"
          fill="transparent"
        />
        <circle
          cx="50%"
          cy="100%"
          r="40%"
          stroke="#3b82f6"
          strokeWidth="15"
          fill="transparent"
          strokeDasharray={`${percentage * 2.512}, 251.2`}
          strokeLinecap="round"
          transform={`rotate(-90, 96, 100)`}
        />
      </svg>
    </div>
  );
};

export default Gauge;
