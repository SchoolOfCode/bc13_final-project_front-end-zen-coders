import Link from 'next/link';
import React from 'react';

const Filter = () => {
  return (
    <ul className="flex flex-row justify-between flex-wrap bg-gray-300 rounded-full my-9 mx-5 px-6 sm:p-4">
      <Link href="/explore">
        <li className="w-28 h-20 flex items-center justify-center text-5xl">
          <div>All</div>
        </li>
      </Link>
      <Link href="/explore/Music">
        <li className="w-20 h-20 hover:scale-125 flex items-center justify-center  bg-gray-900 rounded-full">
          <div>
            <img src="/musicIcon.svg" alt="musicIcon" className="w-12" />
          </div>
        </li>
      </Link>
      <Link href="/explore/Knitting">
        <li className="w-20 h-20 hover:scale-125 flex items-center justify-center bg-gray-900 rounded-full">
          <div>
            <img src="/knitting.svg" alt="knittingIcon" className="w-12" />
          </div>
        </li>
      </Link>
      <Link href="/explore/Language">
        <li className="w-20 h-20 hover:scale-125 flex items-center justify-center bg-gray-900 rounded-full">
          <div>
            <img src="/languageIcon.svg" alt="languageIcon" className="w-12" />
          </div>
        </li>
      </Link>
      <Link href="/explore/Sports">
        <li className="w-20 h-20 hover:scale-125 flex items-center justify-center bg-gray-900 rounded-full">
          <div>
            <img src="/sportIcon.svg" alt="sportIcon" className="w-12" />
          </div>
        </li>
      </Link>
      <Link href="/explore/Gardening">
        <li className="w-20 h-20 hover:scale-125 flex items-center justify-center bg-gray-900 rounded-full">
          <div>
            <img src="/shears.svg" alt="shearsIcon" className="w-12" />
          </div>
        </li>
      </Link>
      <Link href="/explore/Writing">
        <li className="w-20 h-20 hover:scale-125 flex items-center justify-center bg-gray-900 rounded-full">
          <div>
            <img src="/writingIcon.svg" alt="writingIcon" className="w-12" />
          </div>
        </li>
      </Link>
      <Link href="/explore/Painting">
        <li className="w-20 h-20 hover:scale-125 flex items-center justify-center bg-gray-900 rounded-full">
          <div>
            <img src="/paintingIcon.svg" alt="paintingIcon" className="w-12" />
          </div>
        </li>
      </Link>
      <Link href="/explore/Tutoring">
        <li className="w-20 h-20 hover:scale-125 flex items-center justify-center bg-gray-900 rounded-full">
          <div>
            <img src="/tutorIcon.svg" alt="tutorIcon" className="w-12" />
          </div>
        </li>
      </Link>
      <Link href="/explore/Photography">
        <li className="w-20 h-20 hover:scale-125 flex items-center justify-center bg-gray-900 rounded-full">
          <div>
            <img src="/photoIcon.svg" alt="photoIcon" className="w-12" />
          </div>
        </li>
      </Link>
      <Link href="/explore/Other">
        <li className="w-20 h-20 hover:scale-125 flex items-center justify-center bg-gray-900 rounded-full">
          <div>
            <img src="/otherIcon.svg" alt="otherIcon" className="w-12" />
          </div>
        </li>
      </Link>
    </ul>
  );
};

export default Filter;
