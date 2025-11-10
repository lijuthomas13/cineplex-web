import React from "react";
import { SEAT_CATEGORY_THEMES } from "../constants";



const PriceChartLegend: React.FC = () => {
  return (
    <div className="w-full lg:w-72 flex-shrink-0">
      <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-300 dark:bg-white/5">
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm">
          {SEAT_CATEGORY_THEMES.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className={`size-4 rounded border-2 ${item.bgColor} ${item.borderColor}`}
              />
              <span className="dark:text-white">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceChartLegend;
