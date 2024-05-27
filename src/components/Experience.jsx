import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import reactjs from '../assets/react.png';
import android from '../assets/android.png';
import cplus from '../assets/c++.png';
import csharp from '../assets/csharp.png';
import blazor from '../assets/Blazor.png';
import node from '../assets/node.png';
import fireBase from '../assets/firebase.png';
import figma from '../assets/Figma.png';
import ps from '../assets/ps.png';
import github from '../assets/github.png';
import git from '../assets/git.png';

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: 'HTML', style: 'bg-red-500', glow: 'rgba(255, 0, 0, 0.7)' },
    { id: 2, src: css, title: 'CSS', style: 'bg-blue-500', glow: 'rgba(0, 0, 255, 0.7)' },
    { id: 3, src: javascript, title: 'JavaScript', style: 'bg-yellow-500', glow: 'rgba(255, 255, 0, 0.7)' },
    { id: 4, src: tailwind, title: 'TailwindCSS', style: 'bg-blue-400', glow: 'rgba(0, 128, 255, 0.7)' },
    { id: 5, src: reactjs, title: 'ReactJS', style: 'bg-blue-600', glow: 'rgba(0, 0, 139, 0.7)' },
    { id: 6, src: android, title: 'Android Studio', style: 'bg-green-600', glow: 'rgba(0, 255, 0, 0.7)' },
    { id: 7, src: cplus, title: 'C++', style: 'bg-blue-300', glow: 'rgba(173, 216, 230, 0.7)' },
    { id: 8, src: csharp, title: 'C#', style: 'bg-violet-300', glow: 'rgba(238, 130, 238, 0.7)' },
    { id: 9, src: blazor, title: 'Blazor', style: 'bg-violet-600', glow: 'rgba(148, 0, 211, 0.7)' },
    { id: 10, src: node, title: 'NodeJS', style: 'bg-green-600', glow: 'rgba(0, 128, 0, 0.7)' },
    { id: 11, src: fireBase, title: 'Firebase', style: 'bg-orange-700', glow: 'rgba(255, 69, 0, 0.7)' },
    { id: 12, src: figma, title: 'Figma', style: 'bg-red-300', glow: 'rgba(255, 99, 71, 0.7)' },
    { id: 13, src: ps, title: 'PhotoShop', style: 'bg-blue-800', glow: 'rgba(25, 25, 112, 0.7)' },
    { id: 14, src: github, title: 'GitHub', style: 'bg-white', glow: 'rgba(255, 255, 255, 0.7)' },
    { id: 15, src: git, title: 'Git', style: 'bg-orange-600', glow: 'rgba(255, 165, 0, 0.7)' },
  ];

  return (
    <div name='technologies' className='bg-gradient-to-b from-black via-black to-black w-full md:h-screen text-white py-16'>
      <style>
        {`
          .tech-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
            z-index: 0;
          }

          .tech-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: inherit;
            z-index: -1;
            transition: opacity 0.3s ease;
            opacity: 0.65;
          }

          .tech-card:hover::before {
            opacity: 0;
          }

          .tech-card:hover {
            transform: scale(1.1);
            box-shadow: 0 0 20px var(--glow-color), 0 0 30px var(--glow-color), 0 0 40px var(--glow-color);
          }
        `}
      </style>
      <div className='p-4 mx-auto flex flex-col justify-center w-full h-full max-w-screen-xl'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-300 p-2 inline'>Tech Stack</p>
          <p className='py-6'>Technologies Encounter</p>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 text-center py-8'>
          {techs.map(({ id, src, title, style, glow }) => (
            <div
              key={id}
              className={`group transform transition duration-300 ease-in-out rounded-xl overflow-hidden ${style} text-white tech-card`}
              style={{ '--glow-color': glow }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65 transition-opacity duration-300 hover:opacity-0"></div>
              <div className="relative z-10 flex flex-col justify-center items-center p-4">
                <img src={src} alt="" className='w-20 h-20 mb-4' />
                <p className='mt-2'>{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
