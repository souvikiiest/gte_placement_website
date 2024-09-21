import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 ">
      <div className=" mx-auto p-6 bg-white rounded-lg shadow-md">
       
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1620496009285-ac853df7b9b6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlpdCUyMGtoYXJhZ3B1cnxlbnwwfHwwfHx8MA%3D%3D" 
            alt="College"
            className="w-full h-64 object-cover rounded-md"
          />
        </div>
        
       
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            GEOTECHNICAL ENGINEERING
          </h1>
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">
            DEPARTMENTAL BROCHURE 2024-2025
          </h2>
          <p className="text-lg text-gray-500">
            DEPARTMENT OF CIVIL ENGINEERING, IIT KHARAGPUR
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;