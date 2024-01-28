"use client";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { Context } from "@/app/layoutContext";
import { useContext } from "react";
import HotelSearchResult from "../ui/HotelSearchResult";
import FlightSearchResult from "../ui/FlightSearchResult";

const SearchModal = () => {
  const { searchModalOpen, setSearchModalOpen, searchResult, searchType } =
    useContext(Context);
  return (
    <div
      className={`fixed w-full h-screen top-0 left-0 rounded-0 min-[500px]:py-10 transition duration-300 ease-in ${
        searchModalOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="container mx-auto w-full h-full bg-white flex flex-col min-[500px]:rounded-[4px] rounded-none">
        <div className="w-full shrink-0 h-[60px] border-b border-gray rounded-b-none flex items-center justify-between px-5 md:px-10">
          <h2 className="text-xl font-semibold">Search Result</h2>
          <IoMdClose
            className="text-2xl cursor-pointer"
            onClick={() => setSearchModalOpen(false)}
          />
        </div>
        {searchResult.length > 0 ? (
          <div className="flex flex-1 flex-col lg:flex-row overflow-y-hidden">
            <div className="w-full px-5 md:px-10 py-5 lg:p-10 border-b rounded-b-none border-gray lg:w-1/5 lg:border-r lg:rounded-r-none">
              <h2 className="font-medium text-lg">
                {searchType === "hotel"
                  ? `Available hotels in ${searchResult[0].city} city`
                  : `Available flights from ${searchResult[0].from} to ${searchResult[0].to}`}
              </h2>
            </div>
            <div className="flex-1 w-full p-5 md:p-10 overflow-y-scroll lg:w-4/5">
              {searchResult.map((item, index) =>
                searchType === "hotel" ? (
                  <HotelSearchResult
                    item={item}
                    key={"hotel-result-" + index}
                  />
                ) : (
                  <FlightSearchResult
                    item={item}
                    key={"flight-result-" + index}
                  />
                )
              )}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <h2 className="text-2xl font-semibold">No result found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
