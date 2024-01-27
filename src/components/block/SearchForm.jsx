"use client";

import { Context } from "@/app/layoutContext";
import { useContext } from "react";
import HotelSearchForm from "../ui/HotelSearchForm";
import FlightSearchForm from "../ui/FlightSearchForm";
const SearchForm = () => {
  const { searchType } = useContext(Context);
  return (
    <section className="flex justify-center mt-10">
      {searchType === "hotel" ? <HotelSearchForm /> : <FlightSearchForm />}
    </section>
  );
};

export default SearchForm;
