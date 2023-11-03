import React from 'react';

const ResponsibilityCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-opacity-80 block rounded-lg border shadow-xl border-gray-800 p-4 sm:p-6 m-2 hover:scale-105 duration-150 transform cursor-pointer transition hover:border-pink-500/10 hover:shadow-pink-500/10">
      <img className="w-36 sm:w-48 h-32 sm:h-36 object-fill mx-auto mb-4" src={imageUrl} alt={title} />
      <h2 className="text-xl sm:text-2xl text-white font-semibold mb-2">{title}</h2>
      <p className="text-white mb-2 ">{description}</p>
    </div>
  );
};

const responsibilities = [
{
  title: "Promotion",
  description: "As a campus ambassador, your primary duty is to ignite enthusiasm and awareness about the technical fest. This entails employing a mix of marketing techniques, both online and offline, to ensure the event gains widespread exposure, and all students on campus are well-informed about the fest's details, schedule, and offerings.",
  imageUrl: `${process.env.PUBLIC_URL}/undraw_energizer.svg`,
},
{
  title: "Recruitment",
  description: "Your role revolves around motivating fellow students to actively participate in the technical fest. This includes reaching out to potential participants, forming teams, and recruiting dedicated volunteers who can contribute to the fest's organization and successful execution. Your objective is to maximize student involvement.",
  imageUrl:`${process.env.PUBLIC_URL}/undraw_social.svg`,
},
{
  title: "Event Coordination",
  description: "To ensure the fest runs seamlessly, you will play a pivotal role in planning and orchestrating various events, workshops, and competitions. This involves coordinating schedules, organizing venues, and ensuring that all activities progress as scheduled to create a positive experience for attendees.",
  imageUrl:`${process.env.PUBLIC_URL}/undraw_join.svg`,
},
{
  title: "Content Creation",
  description: "Crafting engaging content is fundamental to building anticipation and excitement for the technical fest. You will be responsible for generating blog posts, videos, social media updates, and other captivating content to showcase the fest's unique technical challenges, innovations, and activities.",
  imageUrl: `${process.env.PUBLIC_URL}/undraw_projections.svg`,
},
{
  title: " Logistics and Support",
  description: "In addition to your promotional and recruitment efforts, you will also assist with the practical aspects of the fest. This includes tasks such as venue setup, equipment readiness, and providing technical support to participants during competitions and challenges. Your role is to ensure a seamless experience for all involved.",
  
  imageUrl: `${process.env.PUBLIC_URL}/undraw_sharing.svg`,
},
{
  title: "Task Completion and Incentives",
  description: "When you successfully complete your assigned tasks within the specified timeframes, you will earn points and have the opportunity to receive incentives as recognition for your dedicated efforts.",
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