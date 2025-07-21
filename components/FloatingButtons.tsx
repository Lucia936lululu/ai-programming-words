// components/FloatingButtons.tsx

import React from "react";

interface FloatingButtonsProps {
  currentIndex: number;
  totalWords: number;
  learnedCount: number;
  onReset: () => void;
}

export function FloatingButtons({ 
  currentIndex, 
  totalWords, 
  learnedCount, 
  onReset 
}: FloatingButtonsProps) {
  const progressPercentage = Math.round(((currentIndex + 1) / totalWords) * 100);
  const masteredPercentage = Math.round((learnedCount / totalWords) * 100);

  return (
    <div className="fixed top-2 right-2 z-50 flex flex-col items-center space-y-2 opacity-90 sm:top-1 sm:right-1 sm:scale-90">
      {/* 进度指示器 */}
      <div className="rounded-full shadow-lg bg-white p-2 text-center min-w-[60px]">
        <div className="text-xs font-bold text-blue-600">{progressPercentage}%</div>
        <div className="text-xs text-gray-500">{currentIndex + 1}/{totalWords}</div>
      </div>
      
      {/* 统计按钮 */}
      <div className="rounded-full shadow-lg bg-white p-2 text-center min-w-[60px]">
        <div className="text-xs font-bold text-green-600">{masteredPercentage}%</div>
        <div className="text-xs text-gray-500">已掌握</div>
      </div>
      
      {/* 重置按钮 */}
      <button
        onClick={onReset}
        className="rounded-full shadow-lg bg-white p-2 hover:bg-gray-50 transition-colors"
        title="重置进度"
      >
        <div className="text-xs text-red-600">🔄</div>
      </button>
    </div>
  );
}
