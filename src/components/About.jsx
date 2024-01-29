import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full min-h-screen bg-gradient-to-b from-cyan-900 to-gray-900 text-white py-16'>
      <div className='max-w-screen-xl p-4 mx-auto pl-8 flex flex-col justify-center'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-gray-300'>
            About
          </p>
        </div>
        <p className='text-xl mt-8'>
          I'm looking for a job where I can contribute to a team with my skills
          and passion for technology. I am a highly motivated person and 
          willing to learn new skills, have the ability to perform well 
          in a team where I can share my ideas and work with others.
        </p>

        <br/>

        <p className='text-xl mt-8'>
          Knowledgeable developer/designer focusing on web and mobile development. 
          My skills include working with JavaScript, ReactJS, HTML, CSS,
          and Android Studio (Java), along with a NoSQL database (Firebase).
          I possess an understanding of UI/UX design, can use Figma to create 
          layouts and prototypes, ensuring the seamless integration of functionality
          and aesthetics, excel at troubleshooting computer-related issues for
          both software and hardware, can adapt to working environments,
          and have the ability to perform well in a team.
        </p>
      </div>
    </div>
  );
};

export default About;
