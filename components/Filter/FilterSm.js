import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

export default function FilterSm() {
  const [show, setShow] = useState(false);
  return (
    <div className="fixed z-10 md:hidden ">
      <button
        onClick={() => setShow(!show)}
        className="mt-3 h-12 rounded-full border-2 border-blue-700 bg-white/30 px-4 shadow-md backdrop-blur-md"
      >
        Category
      </button>
      {show ? (
        <div className="mt-6 flex flex-row flex-wrap items-center justify-between gap-6 rounded-xl border-2 border-black bg-white p-3 shadow-lg">
          <Link href="/explore">
            <li className="flex items-center justify-center">
              <div className="text-2xl hover:scale-105">All</div>
            </li>
          </Link>
          <Link href="/explore/music">
            <li className="flex flex-col items-center justify-center hover:scale-105">
              <img
                src="/icons/music-black.svg"
                alt="musicIcon"
                className="w-10"
              />
              <text className="text-sm">Music</text>
            </li>
          </Link>
          <Link href="/explore/knitting">
            <li className="flex flex-col items-center justify-center hover:scale-105 ">
              <img
                src="/icons/knitting-black.svg"
                alt="knittingIcon"
                className="w-12"
              />
              <text className="text-sm">Knitting</text>
            </li>
          </Link>
          <Link href="/explore/language">
            <li className="flex flex-col items-center justify-center hover:scale-105 ">
              <img
                src="/icons/language-black.svg"
                alt="languageIcon"
                className="w-10 "
              />
              <text className="text-sm">Language</text>
            </li>
          </Link>
          <Link href="/explore/sports">
            <li className="flex flex-col items-center justify-center hover:scale-105 ">
              <img
                src="/icons/sport-black.svg"
                alt="sportIcon"
                className="w-10"
              />
              <text className="text-sm">Sports</text>
            </li>
          </Link>
          <Link href="/explore/gardening">
            <li className="flex flex-col items-center justify-center hover:scale-105 ">
              <img
                src="/icons/gardening-black.svg"
                alt="shearsIcon"
                className="w-10"
              />
              <text className="text-sm">Gardening</text>
            </li>
          </Link>
          <Link href="/explore/writing">
            <li className="flex flex-col items-center justify-center hover:scale-105 ">
              <img
                src="/icons/writing-black.svg"
                alt="writingIcon"
                className="w-10"
              />
              <text className="text-sm">Writing</text>
            </li>
          </Link>
          <Link href="/explore/painting">
            <li className="flex flex-col items-center justify-center hover:scale-105 ">
              <img
                src="/icons/painting-black.svg"
                alt="paintingIcon"
                className="w-10"
              />
              <text className="text-sm">Painting</text>
            </li>
          </Link>
          <Link href="/explore/tutoring">
            <li className="flex flex-col items-center justify-center hover:scale-105 ">
              <img
                src="/icons/tutoring-black.svg"
                alt="tutorIcon"
                className="w-10"
              />
              <text className="text-sm">Tutoring</text>
            </li>
          </Link>
          <Link href="/explore/photography">
            <li className="flex flex-col items-center justify-center hover:scale-105 ">
              <img
                src="/icons/photography-black.svg"
                alt="photoIcon"
                className="w-10"
              />
              <text className="text-sm">Photography</text>
            </li>
          </Link>
          <Link href="/explore/other">
            <li className="flex flex-col items-center justify-center hover:scale-105">
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
