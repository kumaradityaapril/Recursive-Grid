"use client";

import { useState } from "react";

export default function Home() {
  const [grid, setGrid] = useState<number[][]>([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const getBoxStyle = (value: number) => {
    if (value >= 15) {
      return "bg-red-500 text-white";
    }

    if (value % 2 === 0) {
      return "bg-[#e0e0e0] text-black";
    }

    return "bg-[#1a237e] text-white";
  };

  const handleClick = (row: number, col: number) => {
    if (grid[row][col] >= 15) return;

    const newGrid = grid.map((r) => [...r]);
    newGrid[row][col] += 1;

    const newValue = newGrid[row][col];

    // Rule A: divisible by 3 → decrement right (can go negative)
    if (newValue % 3 === 0 && col < 2) {
      newGrid[row][col + 1] -= 1;
    }

    // Rule B: divisible by 5 → increment below (can go above 15)
    if (newValue % 5 === 0 && row < 2) {
      newGrid[row + 1][col] += 2;
    }

    setGrid(newGrid);
  };

  const handleReset = () => {
    setGrid([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Page - Rules */}
          <div className="bg-slate-700 rounded-2xl shadow-2xl p-8 border-r-4 border-blue-500">
            <div className="space-y-6">
              <div className="border-b-2 border-slate-600 pb-4">
                <h1 className="text-4xl font-bold text-white mb-2">
                  Recursive Grid Rules
                </h1>
                <p className="text-slate-300 italic">Understanding the game mechanics</p>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-600 p-4 rounded-lg border-l-4 border-blue-400">
                  <h2 className="text-xl font-semibold text-blue-300 mb-2">Objective</h2>
                  <p className="text-slate-200">
                    Click on cells to increment their values and trigger special rules. 
                    Each cell can hold values and interact with neighboring cells based on divisibility rules.
                  </p>
                </div>

                <div className="bg-slate-600 p-4 rounded-lg border-l-4 border-green-400">
                  <h2 className="text-xl font-semibold text-green-300 mb-2">Basic Rule</h2>
                  <ul className="list-disc list-inside text-slate-200 space-y-1 ml-2">
                    <li>Click any cell to increase its value by 1</li>
                    <li>Once a cell reaches 15, it becomes locked and cannot be clicked anymore</li>
                  </ul>
                </div>

                <div className="bg-slate-600 p-4 rounded-lg border-l-4 border-purple-400">
                  <h2 className="text-xl font-semibold text-purple-300 mb-2">Rule A: Divisible by 3</h2>
                  <p className="text-slate-200 mb-2">
                    When a cell's value becomes divisible by 3 (3, 6, 9, 12, 15...):
                  </p>
                  <ul className="list-disc list-inside text-slate-200 space-y-1 ml-2">
                    <li>The cell to the RIGHT decreases by 1</li>
                    <li>Can result in negative numbers</li>
                    <li>Rightmost column cells have no effect</li>
                  </ul>
                </div>

                <div className="bg-slate-600 p-4 rounded-lg border-l-4 border-orange-400">
                  <h2 className="text-xl font-semibold text-orange-300 mb-2">Rule B: Divisible by 5</h2>
                  <p className="text-slate-200 mb-2">
                    When a cell's value becomes divisible by 5 (5, 10, 15, 20...):
                  </p>
                  <ul className="list-disc list-inside text-slate-200 space-y-1 ml-2">
                    <li>The cell BELOW increases by 2</li>
                    <li>Can exceed 15 for affected cells</li>
                    <li>Bottom row cells have no effect</li>
                  </ul>
                </div>

                <div className="bg-slate-600 p-4 rounded-lg border-l-4 border-red-400">
                  <h2 className="text-xl font-semibold text-red-300 mb-2">Special Case: Value 15</h2>
                  <p className="text-slate-200 mb-2">
                    When a cell reaches 15, it's divisible by both 3 and 5, so:
                  </p>
                  <ul className="list-disc list-inside text-slate-200 space-y-1 ml-2">
                    <li>Right cell decreases by 1</li>
                    <li>Below cell increases by 2</li>
                    <li>The cell turns red and locks</li>
                  </ul>
                </div>

                <div className="bg-slate-600 p-4 rounded-lg border-l-4 border-slate-400">
                  <h2 className="text-xl font-semibold text-slate-300 mb-2">Color Coding</h2>
                  <div className="space-y-2 text-slate-200">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-[#e0e0e0] border border-slate-300 rounded"></div>
                      <span>Even numbers (0, 2, 4, 6...) - Light Gray</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-[#1a237e] rounded"></div>
                      <span>Odd numbers (1, 3, 5, 7...) - Navy Blue</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-red-500 rounded"></div>
                      <span>Maximum value (15) - Red & Locked</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Page - Game Grid */}
          <div className="bg-slate-700 rounded-2xl shadow-2xl p-8 border-l-4 border-blue-500 flex flex-col items-center justify-center min-h-[800px]">
            <div className="mb-8 text-center">
              <h1 className="text-5xl font-bold text-white mb-2 tracking-tight">
                Recursive Grid
              </h1>
              <p className="text-slate-300 text-sm">
                Click cells to start playing
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 p-8 bg-slate-800 rounded-2xl shadow-inner">
              {grid.map((row, rowIndex) =>
                row.map((value, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    onClick={() => handleClick(rowIndex, colIndex)}
                    className={`w-24 h-24 flex items-center justify-center text-2xl font-bold transition-all hover:scale-105 active:scale-95 ${
                      value >= 15 ? "cursor-not-allowed opacity-75" : "cursor-pointer"
                    } ${getBoxStyle(value)}`}
                    style={{
                      borderRadius: '4px',
                      boxShadow: '2px 2px 0px black'
                    }}
                  >
                    {value}
                  </div>
                ))
              )}
            </div>

            <button
              onClick={handleReset}
              className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              Reset Grid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
