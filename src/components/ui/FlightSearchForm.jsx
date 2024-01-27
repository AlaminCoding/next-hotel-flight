"use client";
import InputGroup from "./InputGroup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    departureCity: yup.string().required("Departure city is required"),
    arrivalCity: yup.string().required("Arrival city is required"),
    departureDate: yup
      .date()
      .transform((value) => (isNaN(value) ? undefined : value))
      .min(new Date(), "Departure date must be later than today")
      .required("Departure date is required"),
    returnDate: yup
      .date()
      .transform((value) => (isNaN(value) ? undefined : value))
      .min(
        yup.ref("departureDate"),
        "Return date must be later than Departure date"
      ),
    adultNumber: yup
      .number()
      .transform((value) => (isNaN(value) ? undefined : value))
      .required("Adult number is required")
      .min(1, "Adult number must be greater than 0"),
    childNumber: yup
      .number()
      .transform((value) => (isNaN(value) ? undefined : value))
      .positive()
      .integer(),
  })
  .required();

const FlightSearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-5 w-[500px]">
      <div className="flex gap-5 -mt-5">
        <InputGroup
          type="city"
          name="departureCity"
          label="Departure City"
          id="d-cities"
          list={true}
          register={register}
          error={errors.departureCity?.message}
        />
        <InputGroup
          type="city"
          name="arrivalCity"
          label="Arrival City"
          id="a-cities"
          list={true}
          register={register}
          error={errors.arrivalCity?.message}
        />
      </div>
      <div className="flex gap-5">
        <InputGroup
          type="date"
          name="departureDate"
          label="Departure Date"
          id="d-date"
          register={register}
          error={errors.departureDate?.message}
        />
        <InputGroup
          type="date"
          name="returnDate"
          label="Return Date"
          id="r-date"
          register={register}
          error={errors.returnDate?.message}
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

export default FlightSearchForm;
