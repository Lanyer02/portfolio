import React from 'react';
import blaze from '../assets/portfolio/blazors.png';
import ecomob from '../assets/portfolio/ecomob.png';
import blood from '../assets/portfolio/bloodseeker.jpg';
import libraryManage from '../assets/portfolio/ws.png';
import reactEco from '../assets/portfolio/EcoTaskReward.png';

const Portfolio = () => {
  const projects = [
    { id: 1, src: blaze, codeUrl: 'https://github.com/Kent-Vincent/ADV104_Project' },
    { id: 2, src: ecomob, codeUrl: 'https://github.com/Lanyer05/Capstone1/tree/UPDATED_NEW' },
    { id: 3, src: blood, siteUrl: '#', codeUrl: '#' },
    { id: 4, src: libraryManage,siteUrl: 'https://librarymanagementws.vercel.app', codeUrl: 'https://github.com/Lanyer05/wsproject' },
    { id: 5, src: reactEco, siteUrl: 'https://ecotaskreward.vercel.app/home', codeUrl: 'https://github.com/Lanyer05/reactjs-web-capstone' },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-gray-900 to-cyan-900 w-full md:h-screen text-white">
      <div className="p-4 mx-auto flex flex-col justify-center w-full h-full max-w-screen-2xl">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">
            Portfolio
          </p>
          <p className='py-6'>Check out some of my projects</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-6 sm:px-12">
          {projects.map(({ id, src, siteUrl, codeUrl }) => (
            <div key={id} className='rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
              <img src={src} alt='' className='rounded-md w-full h-64 object-cover duration-200 hover:scale-105' />
              <div className='flex items-center justify-between p-6 bg-gradient-to-b from-gray-800 to-black rounded-md'>
                <a
                  className='flex items-center justify-center w-full px-6 py-3 mr-3 font-semibold text-white bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md hover:scale-105 duration-300 mx-auto'
                  href={siteUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Site
                </a>
                <a
                  className='flex items-center justify-center w-full px-6 py-3 ml-3 font-semibold text-white bg-gradient-to-r from-green-500 to-green-700 rounded-md hover:scale-105 duration-300 mx-auto'
                  href={codeUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
