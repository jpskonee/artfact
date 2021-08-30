import React from "react";
import HeadBanner from "./partials/HeadBanner";
import SchedulePage from "./schedules/SchedulePage";
import NftShops from "../components/Shops/NftShops";
import ContactPage from "./partials/ContactPage";
import WhatWeDo from "./partials/WhatWeDo";
import Footer from "./partials/Footer";
import NavBar from "./partials/NavBar";

const Homepage = () => {
  return (
    <div>
      <NavBar />
      <HeadBanner />
      <NftShops />
      <WhatWeDo />
      <SchedulePage />

      {/* <FreqAskedQuest /> */}

      <ContactPage />
      <Footer />
    </div>
  );
};

export default Homepage;
