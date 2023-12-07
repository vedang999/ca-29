import "./regi.css";
import AxisLogo from "./Axis.png";
// import React from "react";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const termsAndConditionsText = `
1. All proofs you submit should be genuinely authentic, reflecting your utmost knowledge and veracity.
2. Certificates will be granted upon completing the tenure, signifying the individual's accomplished commitment.
3. You are eligible for the certificate and other associated incentives only if your profile is complete.
4. The Certificate as well as all incentives will be awarded only to candidates who meet the minimum points requirement.
5. AXIS’24, VNIT Nagpur will send publicity materials to colleges but is not liable for any additional costs incurred by the CA.
6. AXIS’24, VNIT Nagpur reserves the right to revoke your Ambassadorship or appoint additional ambassadors for unsatisfactory performance or violation of terms.
7. More than one Executive can be selected from a college depending upon the strength of the college.
8. Any use, mention, or placement of AXIS’24 or VNIT Nagpur's logo or name (electronic or physical media) on any event, notice, advertisement, brochure, mailer, or branding material will be done only after written approval from AXIS’24 and VNIT Nagpur authorities and as per their norms. This policy applies in perpetuity.
`;

const TermsAndConditionsModal = ({ onClose }) => {
  // Add your modal content here
  return (
    <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255, 255, 255, 0.9)', display: 'flex', justifyContent: 'center', alignItems: 'center', overflowY: 'auto' }}>
      <div className="modal" style={{ background: 'white', padding: '20px', borderRadius: '8px', maxWidth: '80%', maxHeight: '80vh', color: 'black', overflowY: 'auto' }}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', background: 'none', border: 'none', fontSize: '16px', color: 'red' }}
        >
          &#x2716; {/* Unicode character for a cross mark */}
        </button>
        <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Terms and Conditions For CA</p>
        <div style={{ whiteSpace: 'pre-line' }}>{termsAndConditionsText}</div>
      </div>
    </div>
  );
};
const MyRegi = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [cursorStyle, setCursorStyle] = useState('not-allowed');
  const setAgreedToTermsAndCursor = (value) => {
    setAgreedToTerms(value);
    setCursorStyle(value ? 'pointer' : 'not-allowed');
  };
  
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleTermsClick = () => {
    setShowTermsModal(true);
  };

  const handleCloseModal = () => {
    setShowTermsModal(false);
  };


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    collegeName: '',
    collegeState: '',
    collegeCity: '',
    phoneNumber: '',
    branch:'',
    year:'',
    linkedin:'',
    posts:'',
    address:'',
    ideas:'',
    why:'',
    refral:'',
  });

  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/register', formData);
      console.log(response.data); // Registration success message
      // console.log(formData);

      // Redirect to the login page after successful registration
      navigate('/signin');
    } catch (error) {
      console.error(error.response.data); // Registration error message
      setErrorMessage(error.response.data.message); // Set the error message state
    }
  };

  return (
    <div className="reg-container">
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} {/* Display error message */}
      {/* <div id="main2" className="full-screen-vanta"></div> */}
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
                onSubmit={handleSubmit}
                className="space-y-5 relative z-10"
              >
                <div className="form-group">
                  <label className="font-medium">
                   <b> Full name</b> <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange}
                    placeholder="John Dee"
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-900 shadow-sm rounded-lg"
                  />
                </div>

                <div className="form-group">
                  <label className="font-medium">
                   <b> Email Address</b> <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange}
                    placeholder="abc@gmail.com"
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>

                <div className="form-group">
                  <label className="font-medium">
                    <b>Password:</b>
                    <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="password" name="password" value={formData.password} onChange={handleChange}
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
              
                <div className="form-group">
                  <label className="font-medium">
                    <b>Confirm Password:</b>
                    <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>

                <div className="form-group">
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
                       type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
                      placeholder="+1 (555) 000-000"
                      required
                      className="w-full pl-[4.5rem] pr-3 py-2 appearance-none active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="font-medium">
                    <b>University/Institution</b>
                    <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="text" name="collegeName" value={formData.collegeName} onChange={handleChange}
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>

                <div className="form-group">
                  <label className="font-medium">
                    <b>College State:</b>
                    <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="text" name="collegeState" value={formData.collegeState} onChange={handleChange}
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>

                <div className="form-group">
                  <label className="font-medium">
                    <b>College City:</b>
                    <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="text" name="collegeCity" value={formData.collegeCity} onChange={handleChange}
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
                <div className="form-group">
                  <label className="font-medium">
                   <b> Major/Field of Study</b>
                    <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="text" name="branch" value={formData.branch} onChange={handleChange}
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>

                <div className="form-group">
                  <label className="font-medium">
                    <b>Year of Study</b> <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="number" name="year" value={formData.year} onChange={handleChange}
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>

                <div className="form-group">
                  <label className="font-medium">
                   <b>LinkedIN Profile (Optional)</b> 
                  </label>
                  <input
                    type="text" name="linkedin" value={formData.linkedin} onChange={handleChange}
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>

                <div className="form-group">
                  <label className="font-medium">
                   <b>Do you hold any post in college? If yes then Mention.</b> 
                    <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="text" name="posts" value={formData.posts} onChange={handleChange}
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>

                <div className="form-group">
                  <label className="font-medium">
                   <b>Address of your residence where you can recieve courier from
                    AXIS </b> <span className=" text-red-800">*</span>
                  </label>
                  <textarea
                    type="text" name="address" value={formData.address} onChange={handleChange}
                    required
                    className="w-full mt-2 h-36 px-3 text-black py-2 resize-none appearance-none active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label className="font-medium">
                   <b>Mention 3 innovative ideas to publicize AXIS'24 in your
                    college</b>  <span className=" text-red-800">*</span>
                  </label>
                  <textarea
                  type="text" name="ideas" value={formData.ideas} onChange={handleChange}
                    required
                    className="w-full mt-2 h-36 px-3 text-black py-2 resize-none appearance-none active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label className="font-medium">
                   <b>Why do you want to become an Campus Ambassador?</b>
                    <span className=" text-red-800">*</span>
                  </label>
                  <textarea
                  type="text" name="why" value={formData.why} onChange={handleChange}
                    required
                    className="w-full mt-2 h-36 text-black px-3 py-2 resize-none appearance-none active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  ></textarea>
                </div>

                {/* <div className="form-group">
                  <label className="font-medium"><b>Resume/CV (Optional)</b></label>
                  <input
                    type="file"
                    required
                    className="w-full mt-2 px-3 py-2 text-white active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div> */}

                <div className="form-group">
                  <label className="font-medium"><b>REFERRAL CODE</b></label>
                  <input
                    type="text" name="refral" value={formData.refral} onChange={handleChange}
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
                onChange={() => setAgreedToTermsAndCursor(!agreedToTerms)}
                checked={agreedToTerms}
              />
              <label
                htmlFor="remember-me-checkbox"
                className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                ></label>
              <span className='text-white'  onClick={handleTermsClick}>I Agree to the <b><u>Terms and Conditions</u></b></span>
              {showTermsModal && (
        <TermsAndConditionsModal onClose={handleCloseModal} />
      )}
            </div>
                <button type="submit"
                 className="w-full px-4 py-2 text-white font-medium hover:bg-green-700 active:bg-green-100 rounded-lg duration-150"
                 disabled={!agreedToTerms}
                 style={{ cursor: cursorStyle }}
                 >
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

export default MyRegi;
