import React from 'react';

const ComplianceHeatmap = () => {
  const data = [
    ['Minor', 'Moderate', 'Major', 'Critical', 'Critical'],
    ['Minor', 'Moderate', 'Major', 'Critical', 'Critical'],
    ['Minor', 'Moderate', 'Moderate', 'Major', 'Critical'],
    ['Minor', 'Minor', 'Moderate', 'Moderate', 'Major'],
    ['Minor', 'Minor', 'Minor', 'Moderate', 'Major'],
  ];

  const likelihoods = ['Almost Certain', 'Likely', 'Possible', 'Unlikely', 'Rare'];
  const consequences = ['Insignificant', 'Minor', 'Moderate', 'Major', 'Critical'];

  const getColor = (value) => {
    switch (value) {
      case 'Minor': return 'bg-green-200';
      case 'Moderate': return 'bg-yellow-200';
      case 'Major': return 'bg-orange-200';
      case 'Critical': return 'bg-red-200';
      default: return 'bg-gray-200';
    }
  };

  return (
    <div className="flex items-start"> {/* Use flex to arrange content, align items to the top */}
      <div className="w-2/3"> {/* Heatmap takes up 2/3 of the width */}
        <div className="font-bold mb-2 text-sm">Compliance Heatmap</div> {/* Reduced text size for the title */}
        <div className="grid grid-cols-6 gap-1 border border-gray-400 text-xs"> {/* Reduced text size */}
          {/* Consequence labels */}
          <div></div>
          {consequences.map((consequence, index) => (
            <div key={index} className="p-1 text-center font-bold border border-gray-400">{consequence}</div>
          ))}

          {/* Likelihood labels and heatmap cells */}
          {data.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {/* Likelihood label */}
              <div className="p-1 text-center font-bold border border-gray-400">{likelihoods[rowIndex]}</div>
              {/* Heatmap cells */}
              {row.map((cell, cellIndex) => {
                const colorClass = getColor(cell);
                return (
                  <div
                    key={cellIndex}
                    className={`p-1 text-center border border-gray-400 ${colorClass}`}
                  >
                    {cell}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="w-1/3 p-2"> {/* Space for additional text */}
        {/* Add any additional text or information here */}
        <p className="text-xs">Additional Information goes here</p>
      </div>
    </div>
  );
};

export default ComplianceHeatmap;
