import React from 'react';


const ContactCard = ({ name, phoneNumber, email }) => {
  return (
    <div className="p-4 rounded-lg bg-transparent hover:bg-transparent md:p-6  transform hover:scale-125 transition-transform duration-300 ease-in-out" id="contact">
      <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
        
<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="1.5"
stroke="currentColor"
class="w-5 h-5"
>
<path
  stroke-linecap="round"
  stroke-linejoin="round"
  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
/>
</svg>
        </svg>
      </span>

      <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">{name}</h2>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{phoneNumber}</p>
      <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">{email}</p>
    </div>
  );
};

const Contact = () => {
  return (
    <section className="backdrop-blur-sm">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <p className="font-medium text-5xl text-blue-500 dark:text-blue-400">
            Contact us
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            We'd love to hear from you
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Chat to our friendly team.
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 gap-6 mt-10">
        
          <ContactCard
            name="Rutvik Pathak"
            phoneNumber="+91 9284758387"
            email="rutwik.pathak@axisvnit.in"
          />
          <ContactCard
            name="Sanskar Bhangdiya"
            phoneNumber="+91 7276181260"
            email="sanskar.bhangdiya@axisvnit.in"
          />
          </div>
          
        </div>
      
    </section>
  );
};

export default Contact;

