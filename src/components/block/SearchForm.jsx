import InputGroup from "../ui/InputGroup";

const SearchForm = () => {
  return (
    <section className="flex justify-center mt-10">
      <form action="" className="bg-white p-5 w-[500px]">
        <div className="flex gap-10 -mt-4">
          <InputGroup
            type="date"
            name="check-in"
            label="Check in date"
            id="check-in"
          />
          <InputGroup
            type="date"
            name="check-out"
            label="Check out date"
            id="check-out"
          />
        </div>
        <InputGroup type="text" name="city" label="City" id="city" />
        <InputGroup
          type="number"
          name="room-number"
          label="Number of Rooms"
          id="room-number"
        />
      </form>
    </section>
  );
};

export default SearchForm;
