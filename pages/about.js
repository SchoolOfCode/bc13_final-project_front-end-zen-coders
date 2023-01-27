// Description: This component will render the explore page that contains relivent informaiton about our app

// Import statements
import React from "react";
import AboutProfileCard from "../components/AboutProfileCard/AboutProfileCard";
import ProfileEventCard from "../components/ProfileEventCard/ProfileEventCard";
import NavbarSmTop from "../components/Navbar/NavbarSmTop";

// Profile information
const bella = {
  name: "Bella Bekanova",
  intro: "/",
  gitHub: "https://github.com/BellaBekanova",
  linkedIn: "https://www.linkedin.com/in/bella-bekanova-b5215b26/",
  portfolio: "/",
  image: "/profileImages/bella.jpg",
};

const curt = {
  name: "Curt Smith",
  intro:
    "I studied geography in university and then moved into a career in finance. I wanted something more challenging and creative so moved into the world of tech.",
  gitHub: "https://github.com/Ottcoder",
  linkedIn: "https://www.linkedin.com/in/curt-smith-a27738252",
  portfolio: "/",
  image: "/profileImages/curt.jpg",
};

const evgenii = {
  name: "Evgenii Smazanovich",
  intro: "I'm a full stack developer",
  gitHub: "https://github.com/itsevgenii/",
  linkedIn: "https://www.linkedin.com/in/eugene-smazanovich/",
  portfolio: "https://main.d3v0r89gmu5nt7.amplifyapp.com",
  image: "/profileImages/eugine.jpg",
};

const ilwad = {
  name: "Ilwad Kamal",
  intro: "I'm a full stack developer",
  gitHub: "https://github.com/ilwadk",
  linkedIn: "https://www.linkedin.com/in/ilwad-kamal-47610b25b/",
  portfolio: "/",
  image: "/profileImages/ilwad.jpg",

};

const kiane = {
  name: "Kiane Blackman",
  intro: "I'm a full stack developer",
  gitHub: "https://github.com/kianeblackman/",
  linkedIn: "https://www.linkedin.com/in/kiane-gucher-blackman-646286251/",
  portfolio: "https://kianeblackman.com/",
  image: "/profileImages/kiane.jpg",
};

const jay = {
  name: "Jay Bartley",
  intro: "I'm a full stack developer",
  gitHub: "https://github.com/jayjay1878",
  linkedIn: "https://www.linkedin.com/in/jay-bartley-050603253/",
  portfolio: "/",
  image: "/profileImages/jay.jpg",
};

// About page
export default function about() {
  return (
    <div>

 <img className=" bg-[url('/background/clear-background.jpg')]  w-screen h-screen bg-cover  -scale-x-100 transform -z-50 fixed bg-fixed "></img>
      <div className="mx-6 mb-20 md:mx-12 md:pt-28">
        {/* <NavbarSmTop /> */}
        <div className="md:mt-6 md:ml-28">
          <h1 className="text-5xl font-bold md:text-7xl">About us</h1>
       <p className="mt-2 font-serif text-base md:w-3/4 md:text-lg">
          Welcome to <strong>hobï</strong>, where we connect people with similar
          interests and passions. We believe that everyone should have the
          opportunity to explore their hobbies and interests, and our app makes
          it easy to do just that!{" "}
        </p>
        <p className="mt-2 font-serif text-base md:w-3/4 md:text-lg">
          {" "}
          Whether you&apos;re looking to try gardening, painting, or playing an
          instrument, <strong>hobï</strong> helps you find like-minded
          individuals who can introduce you to your new passion.</p>
          <p className="mt-2 font-serif text-base md:w-3/4 md:text-lg">
            {" "}
            Our app is designed to be user-friendly and easy to navigate, so you
            can quickly find and connect with others.
            You can also create a profile and organize your own events. We
            strive to create a welcoming and inclusive community that is open to
            all.{" "}
          </p>
          <p className="mt-2 font-serif text-base md:w-3/4 md:text-lg">
            {" "}
            Whether you&apos;re looking for new friends, inspiration, or just a
            fun way to spend your time, <strong>hobï</strong> has something for
            everyone.
          </p>        </div>
        <div className="mt-16 grid grid-cols-2 gap-12 md:grid-cols-6 ">
          <AboutProfileCard
            name={bella.name}
            // intro={bella.intro}
            gitHub={bella.gitHub}
            linkedIn={bella.linkedIn}
            portfolio={bella.portfolio}
            image={bella.image}
          />
          <AboutProfileCard
            name={curt.name}
            // intro={curt.intro}
            gitHub={curt.gitHub}
            linkedIn={curt.linkedIn}
            portfolio={curt.portfolio}
            image={curt.image}
          />
          <AboutProfileCard
            name={evgenii.name}
            // intro={evgenii.intro}
            gitHub={evgenii.gitHub}
            linkedIn={evgenii.linkedIn}
            portfolio={evgenii.portfolio}
            image={evgenii.image}
          />
          <AboutProfileCard
            name={ilwad.name}
            // intro={ilwad.intro}
            gitHub={ilwad.gitHub}
            linkedIn={ilwad.linkedIn}
            portfolio={ilwad.portfolio}
            image={ilwad.image}
          />
          <AboutProfileCard
            name={kiane.name}
            // intro={kiane.intro}
            gitHub={kiane.gitHub}
            linkedIn={kiane.linkedIn}
            portfolio={kiane.portfolio}
            image={kiane.image}
          />
          <AboutProfileCard
            name={jay.name}
            // intro={jay.intro}
            gitHub={jay.gitHub}
            linkedIn={jay.linkedIn}
            portfolio={jay.portfolio}
            image={jay.image}
          />
        </div>
        </div>
    </div>
  );
}
