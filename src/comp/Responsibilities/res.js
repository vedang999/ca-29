import React from 'react';


const ResponsibilityCard = ({ title, description, imageUrl }) => {
  return (
    <div className="flex flex-col bg-opacity-80 rounded-lg border shadow-xl border-gray-800 p-8 m-8 hover:scale-105 duration-150 transform cursor-pointer transition hover:border-pink-500/10 hover:shadow-pink-500/10">
      <img className="w-24 h-24 object-cover mx-auto mb-4" src={imageUrl} alt={title} />
      <h2 className="text-3xl text-white font-semibold mb-2">{title}</h2>
      <p className="text-white mb-2">{description}</p>
    </div>
  );
};

const responsibilities = [
  {
    title: "Responsibility 1",
    description: "Description for Responsibility 1",
    imageUrl: `${process.env.PUBLIC_URL}/goodies.png`,
  },
  {
    title: "Responsibility 2",
    description: "Description for Responsibility 2",
    imageUrl:`${process.env.PUBLIC_URL}/goodies.png`,
  },
  {
    title: "Responsibility 3",
    description: "Description for Responsibility 3",
    imageUrl:`${process.env.PUBLIC_URL}/goodies.png`,
  },
  {
    title: "Responsibility 4",
    description: "Description for Responsibility 4",
    imageUrl: `${process.env.PUBLIC_URL}/goodies.png`,
  },
  {
    title: "Responsibility 5",
    description: "Description for Responsibility 5",
    imageUrl: `${process.env.PUBLIC_URL}/goodies.png`,
  },
  {
    title: "Responsibility 6",
    description: "Description for Responsibility 6",
    imageUrl:`${process.env.PUBLIC_URL}/goodies.png`,
  },
];

const ResponsibilitiesSection = () => {
  return (
    <div id="respo" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br bg-opacity-80">
      <h1 className="text-4xl font-bold text-white my-10">Responsibilities of CA</h1>
      <div className="grid grid-cols-3 gap-8">
        {responsibilities.map((responsibility, index) => (
          <ResponsibilityCard
            key={index}
            title={responsibility.title}
            description={responsibility.description}
            imageUrl={responsibility.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ResponsibilitiesSection;