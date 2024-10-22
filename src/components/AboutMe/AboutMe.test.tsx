
import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMe from './AboutMe';

describe('AboutMe', () => {
  it('renders the component', () => {
    render(<AboutMe />);
    
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText(/Hello! I'm Connor/)).toBeInTheDocument();
    expect(screen.getByText('My Journey')).toBeInTheDocument();
    expect(screen.getByAltText('Your Name')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<AboutMe />);

    expect(screen.getByText(/Full Stack Developer/)).toBeInTheDocument();
    expect(screen.getByText(/This website is as basic as it gets/)).toBeInTheDocument();
    expect(screen.getByText(/I started my journey in web development 5 years ago/)).toBeInTheDocument();
  });
});
