import "./regi.css";
import AxisLogo from "./Axis.png";
import React from "react";

const myRegi = () => {
  return (
    <div className="reg-container">
      <div id="main2" className="full-screen-vanta"></div>
      <div className="content-container">
        <main className="relative py-28">
          <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
            <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
              <img src={AxisLogo} alt="" width={300} className="mx-auto" />

              <p className="text-white text-4xl font-semibold sm:text-4xl">
                Get in touch
              </p>
              <p className="text-gray-300 text-xl">
                We'd love to hear from you! Please fill out the form bellow.
              </p>
            </div>
            <div className="relative text-gray-100 mt-12 mx-auto px-4 p-8 sm:max-w-lg sm:px-8 sm:rounded-xl">
              <div className="absolute inset-0 z-[-1]">
                <div className=" backdrop-blur-sm h-full w-full border rounded-xl"></div>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5 relative z-10"
              >
                <div>
                  <label className="font-medium">
                   <b> Full name</b> <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Dee"
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-900 shadow-sm rounded-lg"
                  />
                </div>

                <div>
                  <label className="font-medium">
                   <b> Email Address</b> <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="abc@gmail.com"
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>

                <div>
                  <label className="font-medium">
                   <b> Phone number </b><span className=" text-red-800">*</span>
                  </label>
                  <div className="relative mt-2">
                    <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                      <select className="text-sm text-black bg-transparent outline-none rounded-lg h-full">
                        <option>IN</option>
                        <option>US</option>
                      </select>
                    </div>
                    <input
                      type="number"
                      placeholder="+1 (555) 000-000"
                      required
                      className="w-full pl-[4.5rem] pr-3 py-2 appearance-none active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-medium">
                    <b>University/Institution</b>
                    <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>

                <div>
                  <label className="font-medium">
                   <b> Major/Field of Study</b>
                    <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>

                <div>
                  <label className="font-medium">
                    <b>Year of Study</b> <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>

                <div>
                  <label className="font-medium">
                   <b>LinkedIN Profile (Optional)</b> 
                  </label>
                  <input
                    type="link"
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>

                <div>
                  <label className="font-medium">
                   <b>Do you hold any post in college? If yes then Mention.</b> 
                    <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>

                <div>
                  <label className="font-medium">
                   <b>Address of your residence where you can recieve courier from
                    AXIS </b> <span className=" text-red-800">*</span>
                  </label>
                  <textarea
                    required
                    className="w-full mt-2 h-36 px-3 text-black py-2 resize-none appearance-none active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  ></textarea>
                </div>

                <div>
                  <label className="font-medium">
                   <b>Mention 3 innovative ideas to publicize AXIS'24 in your
                    college</b>  <span className=" text-red-800">*</span>
                  </label>
                  <textarea
                    required
                    className="w-full mt-2 h-36 px-3 text-black py-2 resize-none appearance-none active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  ></textarea>
                </div>

                <div>
                  <label className="font-medium">
                   <b>Why do you want to become an Campus Ambassador?</b>
                    <span className=" text-red-800">*</span>
                  </label>
                  <textarea
                    required
                    className="w-full mt-2 h-36 text-black px-3 py-2 resize-none appearance-none active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  ></textarea>
                </div>

                <div>
                  <label className="font-medium"><b>Resume/CV (Optional)</b></label>
                  <input
                    type="file"
                    required
                    className="w-full mt-2 px-3 py-2 text-white active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>

                <div>
                  <label className="font-medium"><b>REFERRAL CODE</b></label>
                  <input
                    type="text"
                    placeholder="ABC-456-MNP"
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>

                <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                id="remember-me-checkbox"
                className="checkbox-item peer hidden"
              />
              <label
                htmlFor="remember-me-checkbox"
                className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                ></label>
              <span className='text-white'>Agree <a href="/"><b><u>Terms and Conditions</u></b></a></span>
            </div>
                <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-green-700 active:bg-green-800 rounded-lg duration-150">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div
            className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
            style={{
              background: "none",
            }}
          ></div>
        </main>
      </div>
    </div>
  );
};

export default myRegi;
