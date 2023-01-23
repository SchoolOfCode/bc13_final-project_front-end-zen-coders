import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

export default function FilterSm() {
  const [show, setShow] = useState(false);
  return (
    <div className="fixed md:hidden">
      <button
        onClick={() => setShow(!show)}
        className="mt-3 rounded-full border-2 h-12 border-indigo-700 bg-white px-4"
      >
        Catagory
      </button>
      {show ? (
        <div className="flex gap-6 shadow-lg mt-6 flex-row flex-wrap items-center p-3 rounded-xl justify-between border-2 border-black bg-white">
          <Link href="/explore">
            <li className="flex items-center justify-center">
              <div className="text-2xl hover:scale-105">All</div>
            </li>
          </Link>
          <Link href="/explore/music">
            <li className="hover:scale-105 flex flex-col items-center justify-center">
              <img
                src="/icons/music-black.svg"
                alt="musicIcon"
                className="w-10"
              />
              <text className="text-sm">Music</text>
            </li>
          </Link>
          <Link href="/explore/knitting">
            <li className="hover:scale-105 flex flex-col items-center justify-center ">
              <img
                src="/icons/knitting-black.svg"
                alt="knittingIcon"
                className="w-12"
              />
              <text className="text-sm">Knitting</text>
            </li>
          </Link>
          <Link href="/explore/language">
            <li className="hover:scale-105 flex flex-col items-center justify-center ">
              <img
                src="/icons/language-black.svg"
                alt="languageIcon"
                className="w-10 "
              />
              <text className="text-sm">Language</text>
            </li>
          </Link>
          <Link href="/explore/sport">
            <li className="hover:scale-105 flex flex-col items-center justify-center ">
              <img
                src="/icons/sport-black.svg"
                alt="sportIcon"
                className="w-10"
              />
              <text className="text-sm">Sport</text>
            </li>
          </Link>
          <Link href="/explore/gardening">
            <li className="hover:scale-105 flex flex-col items-center justify-center ">
              <img
                src="/icons/gardening-black.svg"
                alt="shearsIcon"
                className="w-10"
              />
              <text className="text-sm">Gardening</text>
            </li>
          </Link>
          <Link href="/explore/writing">
            <li className="hover:scale-105 flex flex-col items-center justify-center ">
              <img
                src="/icons/writing-black.svg"
                alt="writingIcon"
                className="w-10"
              />
              <text className="text-sm">Writing</text>
            </li>
          </Link>
          <Link href="/explore/painting">
            <li className="hover:scale-105 flex flex-col items-center justify-center ">
              <img
                src="/icons/painting-black.svg"
                alt="paintingIcon"
                className="w-10"
              />
              <text className="text-sm">Painting</text>
            </li>
          </Link>
          <Link href="/explore/skill/tutor">
            <li className="hover:scale-105 flex flex-col items-center justify-center ">
              <img
                src="/icons/tutoring-black.svg"
                alt="tutorIcon"
                className="w-10"
              />
              <text className="text-sm">Tutoring</text>
            </li>
          </Link>
          <Link href="/explore/photography">
            <li className="hover:scale-105 flex flex-col items-center justify-center ">
              <img
                src="/icons/photography-black.svg"
                alt="photoIcon"
                className="w-10"
              />
              <text className="text-sm">Photography</text>
            </li>
          </Link>
          <Link href="/explore/other">
            <li className="hover:scale-105 flex flex-col items-center justify-center">
              <img
                src="/icons/other-black.svg"
                alt="otherIcon"
                className="w-10"
              />
              <text className="text-sm">Other</text>
            </li>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
