import React from 'react';

const Gauge = ({ value }) => {
  const percentage = Math.max(0, Math.min(value, 100));
  const radius = 70;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-48 h-24">
      <svg className="absolute w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="50"
          cy="100"
          r={radius}
          stroke="#edf2f7"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx="50"
          cy="100"
          r={radius}
          stroke="#3b82f6"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 50 100)"
        />
      </svg>
    </div>
  );
};

export default Gauge;
