// import React from 'react';


// const ResponsibilityCard = ({ title, description, imageUrl }) => {
//   return (
//     <div className="overflow-x-hidden flex flex-col bg-opacity-80 rounded-lg border shadow-xl border-gray-800 lg:p-8 p-0 m-0 lg:m-8 hover:scale-105 duration-150 transform cursor-pointer transition hover:border-pink-500/10 hover:shadow-pink-500/10">
//       <img className="w-24 h-24 object-cover mx-auto mb-4" src={imageUrl} alt={title} />
//       <h2 className="lg:text-[28px] text-[14px] text-white font-semibold mb-2">{title}</h2>
//       <p className="lg:text-[18px] text-[14px] text-white mb-2">{description}</p>
//     </div>
//   );
  
// };

// const responsibilities = [
//   {
//     title: "Responsibility 1",
//     description: "Description for sponsibility 1",
//     imageUrl: `${process.env.PUBLIC_URL}/goodies.png`,
//   },
//   {
//     title: "Responsibility 2",
//     description: "Description for Responsibility 2",
//     imageUrl:`${process.env.PUBLIC_URL}/goodies.png`,
//   },
//   {
//     title: "Responsibility 3",
//     description: "Description for Responsibility 3",
//     imageUrl:`${process.env.PUBLIC_URL}/goodies.png`,
//   },
//   {
//     title: "Responsibility 4",
//     description: "Description for Responsibility 4",
//     imageUrl: `${process.env.PUBLIC_URL}/goodies.png`,
//   },
//   {
//     title: "Responsibility 5",
//     description: "Description for Responsibility 5",
//     imageUrl: `${process.env.PUBLIC_URL}/goodies.png`,
//   },
//   {
//     title: "Responsibility 6",
//     description: "Description for Responsibility 6",
//     imageUrl:`${process.env.PUBLIC_URL}/goodies.png`,
//   },
// ];

// const ResponsibilitiesSection = () => {
//   return (
//     <div id="respo" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br bg-opacity-80">
//       <h1 className="lg:text-[28px] text-[16px] font-bold text-white my-10">Responsibilities of CA</h1>
//       <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
//         {responsibilities.map((responsibility, index) => (
//           <ResponsibilityCard
//             key={index}
//             title={responsibility.title}
//             description={responsibility.description}
//             imageUrl={responsibility.imageUrl}
//           />
//         ))}
//       </div>
//     </div>
    
//   );
// };

// export default ResponsibilitiesSection;
// import React from 'react';
// import "./a.css";

// const ResponsibilityCard = ({ title, description, imageUrl }) => {
//   return (
//     <div className="aa-card-container overflow-x-hidden flex flex-col bg-opacity-80 rounded-lg border shadow-xl border-gray-800 lg:p-8 p-0 m-0 lg:m-8 hover:scale-105 duration-150 transform cursor-pointer transition hover:border-pink-500/10 hover:shadow-pink-500/10">
//       <img className="w-24 h-24 object-cover mx-auto mb-4" src={imageUrl} alt={title} />
//       <h2 className="lg:text-[28px] text-[14px] text-white font-semibold mb-2">{title}</h2>
//       <p className="lg:text-[18px] text-[14px] text-white mb-2">{description}</p>
//     </div>
//   );
// };

// const responsibilities = [
//   {
//     title: "Responsibility 1",
//     description: "Description for Responsibility 1",
//     imageUrl: `${process.env.PUBLIC_URL}/goodies.png`,
//   },
//   {
//     title: "Responsibility 2",
//     description: "Description for Responsibility 2",
//     imageUrl: `${process.env.PUBLIC_URL}/goodies.png`,
//   },  {
//     title: "Responsibility 3",
//     description: "Description for Responsibility 2",
//     imageUrl: `${process.env.PUBLIC_URL}/goodies.png`,
//   },  {
//     title: "Responsibility 4",
//     description: "Description for Responsibility 2",
//     imageUrl: `${process.env.PUBLIC_URL}/goodies.png`,
//   },  {
//     title: "Responsibility 5",
//     description: "Description for Responsibility 2",
//     imageUrl: `${process.env.PUBLIC_URL}/goodies.png`,
//   },  {
//     title: "Responsibility 6",
//     description: "Description for Responsibility 2",
//     imageUrl: `${process.env.PUBLIC_URL}/goodies.png`,
//   }
//   // Add more responsibility objects here
// ];

// const ResponsibilitiesSection = () => {
//   return (
//     <div id="respo" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br bg-opacity-80">
//       <h1 className="lg:text-[28px] text-[16px] font-bold text-white my-10">Responsibilities of CA</h1>
//       <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
//         {responsibilities.map((responsibility, index) => (
//           <ResponsibilityCard
//             key={index}
//             title={responsibility.title}
//             description={responsibility.description}
//             imageUrl={responsibility.imageUrl}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ResponsibilitiesSection;

// export default whats;
import React from "react";
import "./a.css";
import neto from "./networking (1).png";
import goodies from "./goodies.png";
import leader from "./leadership.png";
import mentor from "./mentoring.png";
import pass from "./ticket.png";
import certificate from "./certificate.png";

const headings = [
  "Respo 1",
  "Respo 2",
  "Respo 3",
  "Respo 4",
  "Respo 5",
  "Respo 6",
];

const descriptions = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
];
const images = [pass, certificate,leader, neto, mentor, goodies ];

const ResponsibilitiesSection = () => {
  return (
    <section className="text-white py-8" id="whats">
      <div className="mx-auto max-w-screen-xl sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold lg:text-4xl">
          Responsibilities of CA
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-8 gap-2 ">
          {headings.map((heading, index) => (
            <a
              key={index}
              className="aa-card-container block rounded-xl border border-gray-800 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="/"
            >
              <div className="p-4">
                <img src={images[index]} alt="" />
                <h2 className="mt-1 text-l lg:text-xl font-bold text-white">
                  {heading}
                </h2>

                <p className="mt-1 text-sm text-white opacity-70">
                  {descriptions[index]}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResponsibilitiesSection;
