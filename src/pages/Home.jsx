import React from "react";

const Home = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="text-gray-700 mt-4">A passionate developer eager to make a difference.</p>
      <img
        src="/src/assets/profile2.jpg"
        alt="Jeff Soucy"
        className="rounded-full mb-4 shadow-lg"
          style={{
            width: '500px', // Enforce width
            height: '550px', // Enforce height
            objectFit: 'cover', // Maintain aspect ratio
          }}
        />
    </div>
  );
};

export default Home;