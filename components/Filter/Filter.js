import React from 'react';
import Link from 'next/link';

export default function Filter() {
  return (
    <div className="bg-white hidden md:flex">
      <div className="flex px-4 flex-row items-center justify-between border-b-2 border-black bg-white p-2 w-full ">
        <Link href="/explore">
          <li className="flex items-center justify-center">
            <div className="text-2xl hover:scale-110">All</div>
          </li>
        </Link>
        <Link href="/explore/AOG">
          <li className="hover:scale-110 flex items-center justify-center">
            <div>
              <img src="/musicIcon.svg" alt="musicIcon" className="w-12" />
            </div>
          </li>
        </Link>
        <Link href="/explore/RVM">
          <li className="hover:scale-110 flex items-center justify-center bg-black">
            <div>
              <img src="/knitting.svg" alt="knittingIcon" className="w-12" />
            </div>
          </li>
        </Link>
        <Link href="/explore/language">
          <li className="hover:scale-110 flex items-center justify-center bg-black">
            <div>
              <img
                src="/languageIcon.svg"
                alt="languageIcon"
                className="w-12"
              />
            </div>
          </li>
        </Link>
        <Link href="/explore/sport">
          <li className="hover:scale-110 flex items-center justify-center bg-black">
            <div>
              <img src="/sportIcon.svg" alt="sportIcon" className="w-12" />
            </div>
          </li>
        </Link>
        <Link href="/explore/gardening">
          <li className="hover:scale-110 flex items-center justify-center bg-black">
            <div>
              <img src="/shears.svg" alt="shearsIcon" className="w-12" />
            </div>
          </li>
        </Link>
        <Link href="/explore/writing">
          <li className="hover:scale-110 flex items-center justify-center bg-black">
            <div>
              <img src="/writingIcon.svg" alt="writingIcon" className="w-12" />
            </div>
          </li>
        </Link>
        <Link href="/explore/painting">
          <li className="hover:scale-110 flex items-center justify-center bg-black">
            <div>
              <img
                src="/paintingIcon.svg"
                alt="paintingIcon"
                className="w-12"
              />
            </div>
          </li>
        </Link>
        <Link href="/explore/skill/tutor">
          <li className="hover:scale-110 flex items-center justify-center bg-black">
            <div>
              <img src="/tutorIcon.svg" alt="tutorIcon" className="w-12" />
            </div>
          </li>
        </Link>
        <Link href="/explore/photography">
          <li className="hover:scale-110 flex items-center justify-center bg-black">
            <div>
              <img src="/photoIcon.svg" alt="photoIcon" className="w-12" />
            </div>
          </li>
        </Link>
        <Link href="/explore/other">
          <li className="hover:scale-110 flex items-center justify-center bg-black">
            <div>
              <img src="/otherIcon.svg" alt="otherIcon" className="w-12" />
            </div>
          </li>
        </Link>
      </div>
    </div>
  );
}
