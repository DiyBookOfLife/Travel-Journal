import React from "react";
import globeImage from "../assets/globe.png";

export default function Header() {
  return (
    <header>
      <img src={globeImage} alt="globe image" />
      <h1>My Travel Journal</h1>
    </header>
  );
}
