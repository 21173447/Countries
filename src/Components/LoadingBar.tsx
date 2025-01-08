import React, { useState, useEffect } from "react";

const Spinner: React.FC = () => {
  return (
    <div className="w-16 h-16 border-4 border-t-4 border-red-900 border-solid rounded-full animate-spin"></div>
  );
};

const LoadingBar: React.FC = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {percentage === 0 ? (
        <Spinner /> 
      ) : (
        <div className="w-full p-4">
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <span className="text-sm font-semibold text-red-900">Loading...</span>
              <span className="text-xs font-semibold text-red-900">{percentage}%</span>
            </div>
            <div className="flex mb-2 items-center justify-between">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-900 h-2 rounded-full"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingBar;
