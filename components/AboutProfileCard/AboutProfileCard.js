import React from 'react';

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
        <a href={gitHub}>GitHub</a>
        <a href={linkedIn}>LinkedIn</a>
        <a href={portfolio}>Portfolio</a>
      </div>
    </div>
  );
}
