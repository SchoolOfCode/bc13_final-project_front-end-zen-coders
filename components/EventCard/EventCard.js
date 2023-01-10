//* Description: Event card component

// Import statements
import React from 'react';
import Image from 'next/image';

// EventCard component
export default function EventCard() {
  return (
    <card>
      <svg>
        <img src="/" alt="icon"></img>
      </svg>
      <section>
        <div>
          <h1>Skill</h1>
          <h2>Author</h2>
        </div>
        <div>
          <img src="/" alt="icon"></img>
          <div>
            <h3>Time</h3>
            <h3>Data</h3>
          </div>
        </div>
      </section>
    </card>
  );
}
