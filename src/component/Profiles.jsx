import React from 'react';
import { datas } from '../db/data';
const Profile = () => {
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const row1 = 3;
  const row2 = 4;
  const row3 = 3;

  const [firstRow, secondRow, thirdRow] = [
    chunkArray(datas, row1),
    chunkArray(datas.slice(row1), row2),
    chunkArray(datas.slice(row1 + row2), row3)
  ];

  const ProfileCard = ({ profile }) => {
    const isMultiColumn = profile.Software.length >= 4;

    return (
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg shadow-lg border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
        <img
          src={profile.Photo}
          alt={profile.Name}
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-300 shadow-md"
        />
        <h2 className="text-2xl font-semibold mb-2 text-center text-gray-900"> {profile.Name}</h2>
        <p className="text-gray-600 mb-1 text-center"><strong>Email:</strong> {profile.Email}</p>
        <p className="text-gray-700 mb-3"><strong>Thesis:</strong> {profile.project}</p>

        <div className="mb-3">
          <h3 className="text-gray-900 font-semibold">Software:</h3>
          <ul className={`list-inside text-gray-600 ${isMultiColumn ? 'grid grid-cols-2 gap-2' : 'grid grid-cols-2 gap-2'}`}>
            {profile.Software.map((software, index) => (
              <li key={index}>        <div className="bg-white text-blue-700 py-1 px-3 rounded-full shadow-md text-sm font-medium border border-gray-300"
              >{software}</div></li>
            ))}
          </ul>
        </div>

        {profile.Resume ? (
          <a
            href={profile.Resume}
            className="text-blue-600 underline text-sm block text-center mt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        ) : (
          <p className="text-gray-500 text-sm text-center">Resume not available</p>
        )}
      </div>
    )
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className=" mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10">Student's Profile</h1>

        <div className="flex flex-col items-center space-y-8">
          <div className="grid grid-cols-1 gap-8 w-full max-w-6xl sm:grid-cols-2 lg:grid-cols-3">
            {firstRow[0] && firstRow[0].map((profile, index) => (
              <ProfileCard key={index} profile={profile} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 w-full max-w-8xl sm:grid-cols-2 lg:grid-cols-4">
            {secondRow[0] && secondRow[0].map((profile, index) => (
              <ProfileCard key={index} profile={profile} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 w-full max-w-6xl sm:grid-cols-2 lg:grid-cols-3">
            {thirdRow[0] && thirdRow[0].map((profile, index) => (
              <ProfileCard key={index} profile={profile} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;