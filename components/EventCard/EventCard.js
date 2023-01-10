import React from 'react';
import Image from 'next/image';

export default function EventCard() {
  return (
    <card>
      <svg>
        <Image src="/" alt="icon"></Image>
      </svg>
      <section>
        <div>
          <h1>Skill</h1>
          <h2>Author</h2>
        </div>
        <div>
          <Image src="/" alt="icon"></Image>
          <div>
            <h3>Time</h3>
            <h3>Data</h3>
          </div>
        </div>
      </section>
    </card>
  );
}
