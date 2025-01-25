import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Channel from "./Components/Channel/Channel";
import Podcast from "./Components/Podcast/Podcast";
import Category from "./Components/Category/Category";
import FavApps from "./Components/FavApps/FavApps";
import Access from "./Components/Access/Access";
import Content from "./Components/Content/Content";
import Strategy from "./Components/Strategy/Strategy";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Channel />
      <Podcast />
      <Category />
      <FavApps />
      <Access />
      <Content />
      <Strategy />
      <Footer />
    </div>
  );
};

export default App;
