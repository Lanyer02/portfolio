import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-gray-900 via-black to-cyan-900">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-full px-4">
        <div className="md:w-1/2 flex items-center justify-center md:justify-start">
          <div className="text-center md:text-left">
            <h2 className="text-4xl sm:text-6xl font-bold text-white">
              I'm a Developer/Designer
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
              I'm Odlanyer Nobela, a 22-year-old developer / designer driven by a desire to
              create user-centric and visually appealing experiences. I believe that good
              design should not only be beautiful but also functional and intuitive.
            </p>

            <div className="mt-4">
              <ScrollLink
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-700 cursor-pointer transform hover:scale-105 transition-transform duration-300"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={30} className="ml-1" />
                </span>
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="rounded-2xl overflow-hidden">
            <img src={HeroImage} alt="Profile" className="rounded-2xl mx-auto w-full md:w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
