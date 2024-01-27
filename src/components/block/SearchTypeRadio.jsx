"use client";
import { Context } from "@/app/layoutContext";
import { useContext } from "react";

const SearchTypeRadio = () => {
  const { setSearchType } = useContext(Context);
  return (
    <section>
      <h2 className="text-center text-white text-3xl">
        What do you want to search ?
      </h2>
      <div className="w-full flex align-center justify-center gap-5 mt-8">
        <div className="px-5 py-2 bg-white flex align-center gap-2 relative">
          <input
            type="radio"
            name="searchtype"
            value="hotel"
            id="searchtype1"
            defaultChecked
            onClick={() => setSearchType("hotel")}
          />
          <label
            htmlFor="searchtype1"
            className="absolute w-full h-full top-0 left-0 cursor-pointer"
          ></label>
          <h2 className="font-semibold">Hotel</h2>
        </div>
        <div className="px-5 py-2 bg-white flex align-center gap-2 relative">
          <input
            type="radio"
            name="searchtype"
            value="flight"
            id="searchtype2"
            onClick={() => setSearchType("flight")}
          />
          <label
            htmlFor="searchtype2"
            className="absolute w-full h-full top-0 left-0 cursor-pointer"
          ></label>
          <h2 className="font-semibold">Flight</h2>
        </div>
      </div>
    </section>
  );
};

export default SearchTypeRadio;
