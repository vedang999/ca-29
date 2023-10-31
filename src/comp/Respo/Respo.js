import React from "react";
import "./Respo.css";
import neto from "./networking (1).png";
import goodies from "./goodies.png";
import leader from "./leadership.png";
import mentor from "./mentoring.png";
import pass from "./ticket.png";
import certificate from "./certificate.png";

const whats = () => {
  return (
    <section className=" text-white" id="whats">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl underline">
            What's in it for you?
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="aa-card-container block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/"
          >
            <img src={leader}  alt="" />
            <h2 className="mt-4 text-xl font-bold text-white underline">Leadership</h2>

            <p className="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            className="aa-card-container block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/"
          >
            <img src={goodies}  alt=""/>

            <h2 className="mt-4 text-xl font-bold text-white underline">
              E-Summit Goodies
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            className="aa-card-container block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/"
          >
            <img src={neto} alt="" />

            <h2 className="mt-4 text-xl font-bold text-white underline">Networking</h2>

            <p className="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            className="aa-card-container block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/"
          >
            <img src={mentor}  alt=""/>

            <h2 className="mt-4 text-xl font-bold text-white underline">
              Guidance and Mentoring
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            className="aa-card-container block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/"
          >
            <img src={pass}  alt=""/>

            <h2 className="mt-4 text-xl font-bold text-white underline">
              E-Summit'23 Passes
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            className="aa-card-container block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/"
          >
            <img src={certificate}  alt=""/>

            <h2 className="mt-4 text-xl font-bold text-white underline">Certificate</h2>

            <p className="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default whats;
