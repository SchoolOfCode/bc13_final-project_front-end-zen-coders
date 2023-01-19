import React from 'react';
import { SiGithub, SiLinkedin, SiBuffer } from 'react-icons/si';

export default function AboutProfileCard({
  name,
  intro,
  gitHub,
  linkedIn,
  portfolio,
  image,
}) {
  return (
    <div>
      <img src={image} alt="Kiane" className="rounded-full" />
      <div className="flex flex-col text-center">
        <h1>{name}</h1>
        <p>{intro}</p>
        <a href={gitHub}>
          <SiGithub />
          GitHub
        </a>
        <a href={linkedIn}>
          <SiLinkedin />
          LinkedIn
        </a>
        <a href={portfolio}>
          <SiBuffer />
          Portfolio
        </a>
      </div>
    </div>
  );
}
