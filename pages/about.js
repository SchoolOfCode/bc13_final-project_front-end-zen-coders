// Description: This component will render the explore page that contains relivent informaiton about our app

// Import statements
import React from 'react';
import AboutProfileCard from '../components/AboutProfileCard/AboutProfileCard';

// Profile information
const bella = {
  name: 'Bella Bekanova',
  intro: "I'm a full stack developer blah blah blah",
  gitHub: 'https://github.com/kianeblackman/',
  linkedIn: 'https://www.linkedin.com/in/bella-bekanova-b5215b26/',
  portfolio: 'https://kianeblackman.com/',
  image: '/profileImages/kiane.jpg',
};

const curt = {
  name: 'Curt Smith',
  intro:
    'I studied geography in university and then moved into a career in finance. I wanted something more challenging and creative so moved into the world of tech.',
  gitHub: 'https://github.com/Ottcoder',
  linkedIn: 'https://www.linkedin.com/in/kiane-gucher-blackman-646286251/',
  portfolio: 'https://kianeblackman.com/',
  image: '/profileImages/kiane.jpg',
};

const evgenii = {
  name: 'Evgenii Smazanovich',
  intro: "I'm a full stack developer",
  gitHub: 'https://github.com/kianeblackman/',
  linkedIn: 'https://www.linkedin.com/in/kiane-gucher-blackman-646286251/',
  portfolio: 'https://main.d3v0r89gmu5nt7.amplifyapp.com',
  image: '/profileImages/kiane.jpg',
};

const illwad = {
  name: 'Ilwad Kamal',
  intro: "I'm a full stack developer",
  gitHub: 'https://github.com/kianeblackman/',
  linkedIn: 'https://www.linkedin.com/in/kiane-gucher-blackman-646286251/',
  portfolio: 'https://kianeblackman.com/',
  image: '/profileImages/kiane.jpg',
};

const kiane = {
  name: 'Kiane Blackman',
  intro: "I'm a full stack developer blah blah blah",
  gitHub: 'https://github.com/kianeblackman/',
  linkedIn: 'https://www.linkedin.com/in/kiane-gucher-blackman-646286251/',
  portfolio: 'https://kianeblackman.com/',
  image: '/profileImages/kiane.jpg',
};

const jay = {
  name: 'Jay Bartley',
  intro: "I'm a full stack developer",
  gitHub: 'https://github.com/kianeblackman/',
  linkedIn: 'https://www.linkedin.com/in/kiane-gucher-blackman-646286251/',
  portfolio: 'https://kianeblackman.com/',
  image: '/profileImages/kiane.jpg',
};

// About page
export default function about() {
  return (
    <div className="flex flex-col mx-6 mb-20 md:pt-28">
      <div className="w-full">
        <h1 className="font-bold text-5xl">About us</h1>
        <p className="mt-2 text-base font-serif">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="grid md:grid-cols-6 gap-12 mt-6 grid-cols-2">
        <AboutProfileCard
          name={bella.name}
          intro={bella.intro}
          gitHub={bella.gitHub}
          linkedIn={bella.linkedIn}
          portfolio={bella.portfolio}
          image={bella.image}
        />
        <AboutProfileCard
          name={curt.name}
          intro={curt.intro}
          gitHub={curt.gitHub}
          linkedIn={curt.linkedIn}
          portfolio={curt.portfolio}
          image={curt.image}
        />
        <AboutProfileCard
          name={evgenii.name}
          intro={evgenii.intro}
          gitHub={evgenii.gitHub}
          linkedIn={evgenii.linkedIn}
          portfolio={evgenii.portfolio}
          image={evgenii.image}
        />
        <AboutProfileCard
          name={illwad.name}
          intro={illwad.intro}
          gitHub={illwad.gitHub}
          linkedIn={illwad.linkedIn}
          portfolio={illwad.portfolio}
          image={illwad.image}
        />
        <AboutProfileCard
          name={kiane.name}
          intro={kiane.intro}
          gitHub={kiane.gitHub}
          linkedIn={kiane.linkedIn}
          portfolio={kiane.portfolio}
          image={kiane.image}
        />
        <AboutProfileCard
          name={jay.name}
          intro={jay.intro}
          gitHub={jay.gitHub}
          linkedIn={jay.linkedIn}
          portfolio={jay.portfolio}
          image={jay.image}
        />
      </div>
    </div>
  );
}
