import React from 'react';
import './assets/scss/App.scss';

import FadeIn from "react-fade-in";

import Yearbook from "./sections/Yearbook";
import Navigation from "./sections/Navigation";
import Hero from "./sections/Hero";
import Memories from "./sections/Memories";
import Graduation from "./sections/Graduation";
import WatchParty from "./sections/WatchParty";

function App() {
  return (
      <>
          <header className="App-header">
              <Navigation/>
          </header>
          <main className="d-flex-column">
              <Hero/>
              <Graduation/>
              <WatchParty/>
              <Memories/>
              <Yearbook/>
          </main>
          <footer>
          </footer>
      </>
  );
}

export default App;
