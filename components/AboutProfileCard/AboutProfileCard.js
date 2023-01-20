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
    <div className="text-base">
      <img src={image} alt="Kiane" className="rounded-full" />
      <div className="flex flex-col text-center">
        <h1 className="font-bold underline">{name}</h1>
        <p className="hidden">{intro}</p>
        <a href={gitHub} className="flex justify-center items-center gap-2">
          <SiGithub />
          GitHub
        </a>
        <a href={linkedIn} className="flex justify-center items-center gap-2">
          <SiLinkedin />
          LinkedIn
        </a>
        <a href={portfolio} className="flex justify-center items-center gap-2">
          <SiBuffer />
          Portfolio
        </a>
      </div>
    </div>
  );
}
