import React from 'react';

const ResponsibilityCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-opacity-80 block rounded-lg border shadow-xl border-gray-800 p-4 sm:p-6 m-2 hover:scale-105 duration-150 transform cursor-pointer transition hover:border-pink-500/10 hover:shadow-pink-500/10" id="res">
      <img className="w-36 sm:w-40 h-32 sm:h-36 object-fill mx-auto mb-4" src={imageUrl} alt={title} />
      <h2 className="text-xl sm:text-2xl text-white font-semibold mb-2"><b>{title}</b></h2>
      <p className="text-white mb-2 ">{description}</p>
    </div>
  );
};

const responsibilities = [
{
  title: "Promotion",
  description: " Your core responsibility as a campus ambassador is to ignite enthusiasm and raise awareness about the technical fest. Use various marketing techniques, both online and offline, to give the event broad exposure and inform all students about fest details, schedule, and offerings",
  imageUrl: `${process.env.PUBLIC_URL}/undraw_energizer.svg`,
},
{
  title: "Recruitment",
  description: "Motivate fellow students to actively participate in the technical fest by reaching out to potential participants, forming teams, and recruiting dedicated volunteers. Your goal is to maximize student involvement.",
  imageUrl:`${process.env.PUBLIC_URL}/undraw_social.svg`,
},
{
  title: "Event Coordination",
  description: "Play a vital role in planning and executing events, workshops, and competitions. Coordinate schedules, organize venues, and ensure smooth progression of activities for a positive attendee experience.",
  imageUrl:`${process.env.PUBLIC_URL}/undraw_join.svg`,
},
{
  title: "Content Creation",
  description: " Generate engaging blog posts, videos, and social media updates to build anticipation for the fest. Showcase its technical challenges, innovations, and activities through captivating content.",
  imageUrl: `${process.env.PUBLIC_URL}/undraw_projections.svg`,
},
{
  title: " Logistics and Support",
  description: "Assist with practical aspects like venue setup, equipment readiness, and technical support during competitions. Ensure a seamless experience for all involved.",
  
  imageUrl: `${process.env.PUBLIC_URL}/undraw_sharing.svg`,
},
{
  title: "Task Completion and Incentives",
  description: "Successfully completing tasks within specified timeframes earns you points and potential incentives as recognition for your dedicated efforts.",
  imageUrl:`${process.env.PUBLIC_URL}/undraw_solution_mindset.svg`,
}, 
];

const ResponsibilitiesSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-opacity-80">
      <div className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-white mt-6 sm:mt-10 mb-4 sm:mb-10">Responsibilities of CA</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
    </div>
  );
};

export default ResponsibilitiesSection;