"use client";
import HotelImage from "/public/hotel-bg.jpg";
import FlightImage from "/public//flight-bg.jpg";
import { Context } from "@/app/layoutContext";
import { useContext } from "react";
import BackgroundImage from "../ui/BackgroundImage";

const Background = () => {
  const { searchType } = useContext(Context);
  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-[1] after:content-[''] after:absolute after:w-full after:h-full after:bg-[rgba(0,0,0,0.8)] after:z-1">
      <BackgroundImage show={searchType === "hotel"} image={HotelImage} />
      <BackgroundImage show={searchType === "flight"} image={FlightImage} />
    </div>
  );
};

export default Background;
