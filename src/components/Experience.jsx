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
    { id: 1, src: html, title: 'HTML', style: 'shadow-orange-500' },
    { id: 2, src: css, title: 'CSS', style: 'shadow-blue-500' },
    { id: 3, src: javascript, title: 'JavaScript', style: 'shadow-yellow-500' },
    { id: 4, src: tailwind, title: 'TailwindCSS', style: 'shadow-blue-400' },
    { id: 5, src: reactjs, title: 'ReactJS', style: 'shadow-blue-600' },
    { id: 6, src: android, title: 'Android Studio', style: 'shadow-green-600' },
    { id: 7, src: cplus, title: 'C++', style: 'shadow-blue-300' },
    { id: 8, src: csharp, title: 'C#', style: 'shadow-violet-300' },
    { id: 9, src: blazor, title: 'Blazor', style: 'shadow-violet-600' },
    { id: 10, src: node, title: 'NodeJS', style: 'shadow-green-600' },
    { id: 11, src: fireBase, title: 'Firebase', style: 'shadow-orange-700' },
    { id: 12, src: figma, title: 'Figma', style: 'shadow-red-300' },
    { id: 13, src: ps, title: 'PhotoShop', style: 'shadow-blue-800' },
    { id: 14, src: github, title: 'GitHub', style: 'shadow-white' },
    { id: 15, src: git, title: 'Git', style: 'shadow-orange-600' },
  ];

  return (
    <div name='experience' className='w-full bg-gradient-to-b from-cyan-900  to-gray-900 text-white'>
      <div className='max-w-screen-2xl mx-auto p-4 flex flex-col justify-center'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-300 p-2 inline'>Tech Stack</p>
          <p className='py-6'>Technologies Encounter</p>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 text-center py-8 px-4 sm:px-8 md:px-12'>
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col items-center justify-center shadow-md hover:scale-105 duration-300 py-8 rounded-lg bg-gradient-to-b from-gray-800 to-black ${style}`}
              style={{ width: '100%', height: '100%' }}
            >
              <img src={src} alt="" className='w-20 h-20 mx-auto mb-4' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
