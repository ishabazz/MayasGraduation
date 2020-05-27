import React from 'react';
import './assets/scss/App.scss';
import FadeIn from "react-fade-in";
import Yearbook from "./sections/Yearbook";
import Hero from "./sections/Hero";
import Memories from "./sections/Memories";
import Graduation from "./sections/Graduation";
import WatchParty from "./sections/WatchParty";

function App() {
  return (
      <FadeIn>
          <main className="d-flex-column">
              <Hero/>
              <Graduation/>
              <WatchParty/>
              <Memories/>
              <Yearbook/>
          </main>
      </FadeIn>
  );
}

export default App;
