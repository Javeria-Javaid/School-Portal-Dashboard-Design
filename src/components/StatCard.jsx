import { Card } from './ui/card';
import { useState } from 'react';

export function StatCard({ title, value, icon: Icon, gradient, trend, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Extract trend direction and value
  const getTrendInfo = () => {
    if (!trend) return null;

    const isPositive = trend.includes('+');
    const isNegative = trend.includes('-') && !trend.includes('+');
    const trendColor = isPositive ? 'text-emerald-600' : isNegative ? 'text-red-600' : 'text-gray-600';

    return { isPositive, isNegative, trendColor };
  };

  const trendInfo = getTrendInfo();

  return (
      <Card
          className={`p-4 sm:p-5 border-0 shadow-sm transition-all duration-300 cursor-pointer bg-white rounded-2xl ${
              onClick ? 'hover:shadow-md hover:-translate-y-1' : ''
          } ${isHovered && onClick ? 'ring-2 ring-sky-100' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={onClick}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-gray-600 mb-1 sm:mb-2 truncate">{title}</p>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{value}</p>
            {trend && (
                <div className="flex items-center gap-1">
                  {trendInfo && (
                      <>
                        {trendInfo.isPositive && (
                            <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        )}
                        {trendInfo.isNegative && (
                            <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        )}
                      </>
                  )}
                  <p className={`text-xs ${trendInfo?.trendColor} truncate`}>{trend}</p>
                </div>
            )}
          </div>
          <div
              className={`p-3 sm:p-4 rounded-lg sm:rounded-xl transition-transform duration-300 ${
                  isHovered ? 'scale-110' : 'scale-100'
              } ${gradient} ml-4`}
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300" />
          </div>
        </div>
      </Card>
  );
}