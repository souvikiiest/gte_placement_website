import React from 'react';
import { course, notable } from '../db/data'; // Import the course data

const Coursework = () => {
  const { sem1, Laboratory, sem2 } = course[0];

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10">M.Tech Coursework</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Semester 1:</h2>
            <ul className="list-disc list-inside text-gray-700">
              {sem1.map((course, index) => (
                <li key={index} className="mb-2 text-xl">{course}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-green-100 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Laboratory:</h2>
            <ul className="list-disc list-inside text-gray-700">
              {Laboratory.map((lab, index) => (
                <li key={index} className="mb-2 text-xl">{lab}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-purple-100 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Semester 2:</h2>
            <ul className="list-disc list-inside text-gray-700">
              {sem2.map((course, index) => (
                <li key={index} className="mb-2 text-xl">{course}</li>
              ))}
            </ul>
          </div>

        </div>
        <div>
          <div className="p-6 bg-blue-100 rounded-lg shadow-lg mt-8">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">Notable Topics:</h2>
            <div className="flex flex-wrap gap-3">
              {notable.map((data, index) => (
                <span
                  key={index}
                  className="bg-white text-blue-700 py-1 px-3 rounded-full shadow-md text-sm font-medium border border-gray-300"
                >
                  {data}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursework;