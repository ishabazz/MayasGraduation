import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss';
import FadeIn from "react-fade-in";
import Yearbook from "./sections/Yearbook";
import Hero from "./sections/Hero";
import Memories from "./sections/Memories";
import Graduation from "./sections/Graduation";
import WatchParty from "./sections/WatchParty";
import firebase from "./firebase";

function App() {
    const [links, setLinks] = useState([]);

    const fetchData = () => {
        const db = firebase.firestore();
        return db.collection("links").onSnapshot((snapshot => {
            const linksData = [];
            snapshot.forEach(document => linksData.push(({...document.data(), id:document.id})))
            console.log(linksData);
            setLinks(linksData);
        }));
    }

    const getLink = (event) => {
        var result = links.find(link => {
            return link.id === event
        })

        return result ?? {link: "", timestamp: "", password: ""};
    }

    useEffect(fetchData, []);

    return (
      <FadeIn>
          <main className="d-flex-column">
              <Hero/>
              <Graduation/>
              <WatchParty watchParty={getLink('watch-party')} ceremony={getLink('ceremony')}/>
              <Memories/>
              <Yearbook/>
          </main>
      </FadeIn>
    );
}

export default App;
