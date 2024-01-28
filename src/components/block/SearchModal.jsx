"use client";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { Context } from "@/app/layoutContext";
import { useContext } from "react";
import { FaTreeCity } from "react-icons/fa6";
import { TbCoinTaka } from "react-icons/tb";
import { MdOutlineLocalHotel } from "react-icons/md";
import { ImManWoman } from "react-icons/im";
import { FaChild } from "react-icons/fa";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";

const SearchModal = () => {
  const { searchModalOpen, setSearchModalOpen, searchResult, searchType } =
    useContext(Context);
  return (
    <div
      className={`absolute w-full h-full top-0 left-0 rounded-0 py-10 transition duration-300 ease-in ${
        searchModalOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full h-full bg-white flex flex-col">
        <div className="w-full h-[60px] border-b border-gray rounded-b-none flex items-center justify-between px-10">
          <h2 className="text-xl font-semibold">Search Result</h2>
          <IoMdClose
            className="text-2xl cursor-pointer"
            onClick={() => setSearchModalOpen(false)}
          />
        </div>
        {searchResult.length > 0 ? (
          <div className="flex-1 flex">
            <div className="w-1/5 p-10 border-r rounded-r-none border-gray">
              <h2 className="font-medium text-lg">
                {searchType === "hotel"
                  ? `Available hotels in ${searchResult[0].city} city`
                  : `Available flights from ${searchResult[0].from} to ${searchResult[0].to}`}
              </h2>
              <h2 className="mt-10 text-2xl font-semibold border-b rounded-b-none pb-2 border-gray">
                Sort
              </h2>
            </div>
            <div className="w-4/5 p-10 overflow-y-scroll">
              {searchResult.map((item, index) =>
                searchType === "hotel" ? (
                  <div
                    key={"result-" + index}
                    className="mt-10 first:mt-0 last:border-none flex gap-10 border-b border-gray rounded-b-none pb-10"
                  >
                    <div className="w-1/3">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={300}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="w-2/3 max-w-[500px]">
                      <h2 className="text-2xl font-semibold border-b border-gray rounded-b-none pb-3">
                        {item.name}
                      </h2>
                      <div className="flex">
                        <div className="w-[200px]">
                          <h3 className="item">
                            <FaTreeCity />
                            {item.city}
                          </h3>
                        </div>
                        <div className="flex-1">
                          <h3 className="item">
                            <MdOutlineLocalHotel />
                            {item.availableRooms} rooms available
                          </h3>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-[200px]">
                          <h3 className="item">
                            <ImManWoman />
                            {item.adult} adults
                          </h3>
                        </div>
                        <div className="flex-1">
                          <h3 className="item">
                            <FaChild />
                            {item.children} children
                          </h3>
                        </div>
                      </div>
                      <h3 className="item border-b border-gray rounded-b-none pb-3">
                        <TbCoinTaka />
                        {item.price} BDT per night
                      </h3>
                      <button className="btn-primary mt-4">Book</button>
                    </div>
                  </div>
                ) : (
                  <div
                    key={"result-" + index}
                    className="mt-10 first:mt-0 last:border-none flex gap-10 border-b border-gray rounded-b-none pb-10"
                  >
                    <div className="flex gap-5 items-start">
                      <Image
                        src="/aeroplane.png"
                        height={70}
                        width={70}
                        alt="Plane Icon"
                      />
                      <div className="max-w-[500px]">
                        <h2 className="text-2xl font-bold">{item.airline}</h2>
                        <h2 className="text-xl font-semibold mt-3 border-b border-gray rounded-b-none pb-3">
                          {item.from} to {item.to}
                        </h2>
                        <div className="flex">
                          <h3 className="item w-[300px]">
                            <MdFlightTakeoff /> Departure : {item.departue}
                          </h3>
                          <h3 className="item">
                            <MdFlightLand /> Return : {item.return}
                          </h3>
                        </div>
                        <div className="flex">
                          <div className="w-[300px]">
                            <h3 className="item">
                              <ImManWoman />
                              {item.adult} adults
                            </h3>
                          </div>
                          <div className="flex-1">
                            <h3 className="item">
                              <FaChild />
                              {item.child} children
                            </h3>
                          </div>
                        </div>
                        <h3 className="item">
                          <TbCoinTaka />
                          {item.cost} BDT per flight
                        </h3>
                        <button className="btn-primary mt-4">Book</button>
                      </div>
                    </div>
                  </div>
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
