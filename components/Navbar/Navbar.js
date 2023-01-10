//* Description: This component will render the Navbar component

// Import statements
import React from 'react';
import Link from 'next/link';

// Navbar component
export default function Navbar() {
  return (
    <nav className="flex content-center">
      <div>
        <h1 className="text-3xl font-bold underline">Logo</h1>
      </div>
      <ul className="flex flex-row gap-3">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/explore">Explore</Link>
        </li>
      </ul>
    </nav>
  );
}
