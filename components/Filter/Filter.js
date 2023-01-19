import Link from 'next/link';
import React from 'react';

const Filter = () => {
  return (
    <ul className="flex flex-row justify-between flex-wrap bg-gray-300 rounded-full my-9 mx-5 px-6 sm:p-4">
      <Link href="/explore/AOG">
        <li className="w-20 h-20 hover:scale-125 flex items-center justify-center  bg-gray-900 rounded-full">
          <div>
            <img src="/musicIcon.svg" alt="musicIcon" className="w-12" />
          </div>
        </li>
      </Link>
      <Link href="/explore/RVM">
        <li className="w-20 h-20 hover:scale-125 flex items-center justify-center bg-gray-900 rounded-full">
          <div>
            <img src="/knitting.svg" alt="knittingIcon" className="w-12" />
          </div>
        </li>
      </Link>
      <Link href="/explore/language">
        <li className="w-20 h-20 hover:scale-125 flex items-center justify-center bg-gray-900 rounded-full">
          <div>
            <img src="/languageIcon.svg" alt="languageIcon" className="w-12" />
          </div>
        </li>
      </Link>
      <Link href="/explore/sport">
        <li className="w-20 h-20 hover:scale-125 flex items-center justify-center bg-gray-900 rounded-full">
          <div>
            <img src="/sportIcon.svg" alt="sportIcon" className="w-12" />
          </div>
        </li>
      </Link>
      <Link href="/explore/gardening">
        <li className="w-20 h-20 hover:scale-125 flex items-center justify-center bg-gray-900 rounded-full">
          <div>
            <img src="/shears.svg" alt="shearsIcon" className="w-12" />
          </div>
        </li>
      </Link>
      <Link href="/explore/writing">
        <li className="w-20 h-20 hover:scale-125 flex items-center justify-center bg-gray-900 rounded-full">
          <div>
            <img src="/writingIcon.svg" alt="writingIcon" className="w-12" />
          </div>
        </li>
      </Link>
      <Link href="/explore/painting">
        <li className="w-20 h-20 hover:scale-125 flex items-center justify-center bg-gray-900 rounded-full">
          <div>
            <img src="/paintingIcon.svg" alt="paintingIcon" className="w-12" />
          </div>
        </li>
      </Link>
      <Link href="/explore/skill/tutor">
        <li className="w-20 h-20 hover:scale-125 flex items-center justify-center bg-gray-900 rounded-full">
          <div>
            <img src="/tutorIcon.svg" alt="tutorIcon" className="w-12" />
          </div>
        </li>
      </Link>
      <Link href="/explore/photography">
        <li className="w-20 h-20 hover:scale-125 flex items-center justify-center bg-gray-900 rounded-full">
          <div>
            <img src="/photoIcon.svg" alt="photoIcon" className="w-12" />
          </div>
        </li>
      </Link>
      <Link href="/explore/other">
        <li className="w-20 h-20 hover:scale-125 flex items-center justify-center bg-gray-900 rounded-full">
          <div>
            <img src="/otherIcon.svg" alt="otherIcon" className="w-12" />
          </div>
        </li>
      </Link>
      <li className="w-28 h-20 flex items-center justify-center text-5xl">
        <div>Filter</div>
      </li>
    </ul>
  );
};

export default Filter;
