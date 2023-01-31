import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AboutProfileCard from './AboutProfileCard';
import '@testing-library/jest-dom/extend-expect';


afterEach(cleanup);

describe('AboutProfileCard', () => {
  it('should render the component with the correct props', () => {
    const { getByText, getByAltText } = render(
      <AboutProfileCard
        name="Evgenii Smazanovich"
        intro="I am a software developer"
        gitHub="https://github.com/itsevgenii/"
        linkedIn="https://www.linkedin.com/in/eugene-smazanovich/"
        portfolio="https://main.d3v0r89gmu5nt7.amplifyapp.com"
        image="/profileImages/eugine.jpg"
      />
    );

    const name = getByText('Evgenii Smazanovich');
    const intro = getByText('I am a software developer');
    const githubLink = getByText('GitHub');
    const linkedinLink = getByText('LinkedIn');
    const portfolioLink = getByText('Portfolio');
    const image = getByAltText('Kiane');

    expect(name).toBeInTheDocument();
    expect(intro).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(portfolioLink).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(githubLink.href).toBe('https://github.com/itsevgenii/');
    expect(linkedinLink.href).toBe('https://www.linkedin.com/in/eugene-smazanovich/');
    expect(portfolioLink.href).toBe('https://main.d3v0r89gmu5nt7.amplifyapp.com/');
  });
});