"use client";
import InputGroup from "./InputGroup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Context } from "@/app/layoutContext";
import { useContext } from "react";

const schema = yup
  .object({
    checkIn: yup
      .date()
      .transform((value) => (isNaN(value) ? undefined : value))
      .min(new Date(), "Check-In date must be later than today")
      .required("Check-In date is required"),
    checkOut: yup
      .date()
      .transform((value) => (isNaN(value) ? undefined : value))
      .min(
        yup.ref("checkIn"),
        "Check-Out date must be later than Check-In date"
      )
      .required("Check-Out date is required"),
    city: yup.string().required("City is required"),
    roomNumber: yup
      .number()
      .transform((value) => (isNaN(value) ? undefined : value))
      .required("Room number is required")
      .min(1, "Room number must be greater than 0"),
    adultNumber: yup
      .number()
      .transform((value) => (isNaN(value) ? undefined : value))
      .required("Adult number is required")
      .min(1, "Adult number must be greater than 0"),
    childNumber: yup
      .number()
      .transform((value) => (isNaN(value) ? undefined : value))
      .integer(),
  })
  .required();

const HotelSearchForm = () => {
  const { setSearchModalOpen, setSearchResult } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData) => {
    const searchedData = [];
    await fetch("https://dull-gray-blazer.cyclic.app/hotels")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          if (item.city === formData.city) {
            if (item.availableRooms >= formData.roomNumber) {
              if (
                item.adult >= formData.adultNumber &&
                item.children >= formData.childNumber
              ) {
                searchedData.push(item);
              }
            }
          }
        });
      });
    setSearchResult(searchedData);
    setSearchModalOpen(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-5 w-[500px]">
      <div className="flex gap-5 -mt-4">
        <InputGroup
          type="date"
          name="checkIn"
          label="Check-In date"
          id="check-in"
          register={register}
          error={errors.checkIn?.message}
        />
        <InputGroup
          type="date"
          name="checkOut"
          label="Check-Out date"
          id="check-out"
          register={register}
          error={errors.checkOut?.message}
        />
      </div>
      <div className="flex gap-5">
        <InputGroup
          type="city"
          name="city"
          label="City"
          id="cities"
          list={true}
          register={register}
          error={errors.city?.message}
        />
        <InputGroup
          type="text"
          name="roomNumber"
          label="Number of Rooms"
          id="room-number"
          register={register}
          error={errors.roomNumber?.message}
          defaultVal={1}
        />
      </div>
      <div className="flex gap-5">
        <InputGroup
          type="number"
          name="adultNumber"
          label="Number of Adult"
          id="adult-number"
          register={register}
          error={errors.adultNumber?.message}
          defaultVal={1}
        />
        <InputGroup
          type="number"
          name="childNumber"
          label="Number of Children"
          id="child-number"
          register={register}
          error={errors.childNumber?.message}
          defaultVal={0}
        />
      </div>
      <div className="flex justify-center mt-5">
        <button type="submit" className="btn-primary">
          Search
        </button>
      </div>
    </form>
  );
};

export default HotelSearchForm;
