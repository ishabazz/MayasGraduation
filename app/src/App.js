import React from 'react';
import './assets/scss/App.scss';
import Yearbook from "./sections/Yearbook";
import Navigation from "./sections/Navigation";
import Hero from "./sections/Hero";
import Memories from "./sections/Memories";

import Graduation from "./sections/Graduation";

function App() {
  return (
    <div className="app">
      <header className="App-header">
          <Navigation/>
      </header>
      <main className="">
          <Hero/>
          <Graduation/>
          <Memories/>
          <Yearbook/>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
