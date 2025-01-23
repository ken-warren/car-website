import React, { useState, useEffect } from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { useEffect } from "react";

const App = () => {
  let heroData = [
    { text1: "Tired of walking?", text2: "Grab a Moti" },
    { text1: "Experience", text2: "luxury driving" },
    { text1: "Give in to", text2: "your love for cars!" },
  ];
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 10000);
  }, []);

  return (
    <div>
      <Navbar />
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
