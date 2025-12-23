import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
      <p className="text-sm text-gray-500">Age: 16</p>

      <p className="mt-3 text-gray-700">
        I am a passionate student who enjoys learning web development and
        building cool projects with React.
      </p>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-800">Skills</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
            React
          </span>
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
            JavaScript
          </span>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700">
            Tailwind CSS
          </span>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        📍 Location: New York, USA
      </div>
    </div>
  );
};

export default Card;
