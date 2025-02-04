import React from 'react';

import NavBar from './sections/Navbar';
import Hero from './sections/Hero';

const App = () => {
  return (
    <main className="max-w-7xl">
      <h1 className="text-2xl text-white underline"></h1>
      <NavBar />
      <Hero />
    </main>
  );
};

export default App;
