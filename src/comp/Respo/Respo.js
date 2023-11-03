// export default whats;
import React from "react";
import "./Respo.css";
import neto from "./networking (1).png";
import goodies from "./goodies.png";
import leader from "./leadership.png";
import mentor from "./mentoring.png";
import pass from "./ticket.png";
import certificate from "./certificate.png";

const headings = [
  "Leadership",
  "E-Summit Goodies",
  "Networking",
  "Guidance and Mentoring",
  "E-Summit'23 Passes",
  "Certificate",
];

const descriptions = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
];
const images = [leader, goodies, neto, mentor, pass, certificate];

const Whats = () => {
  return (
    <section className="text-white py-8" id="whats">
      <div className="mx-auto max-w-screen-xl sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold lg:text-4xl">
            What's in it for you?
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

export default Whats;
