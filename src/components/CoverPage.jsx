import React from 'react';

const CoverPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-96 flex items-center justify-center ">
      <div className="text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Discover Delicious Recipes
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">
          Search for your favorite foods and unlock a world of delightful recipes on our website.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">
          Whether you're a seasoned chef or a kitchen novice, our platform provides a diverse collection of recipes suitable for all skill levels.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">
          Explore cuisines from around the globe and elevate your cooking experience with our easy-to-follow recipes and cooking tips.
        </p>
        
      </div>
    </div>
  );
}

export default CoverPage;
