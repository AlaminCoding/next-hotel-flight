const InputGroup = (props) => {
  const {
    type,
    label,
    name,
    id,
    list = false,
    register,
    error,
    defaultVal = null,
  } = props;
  const listData = ["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barishal"];

  return (
    <div className="w-full mt-5">
      <label htmlFor={id} className="block font-bold">
        {label}
      </label>
      {list ? (
        <>
          <input
            list={type}
            id={id}
            className="w-full h-[40px] border-gray border mt-2 px-4 indicator-hide"
            {...register(name)}
          />
          <datalist id={type}>
            {listData.map((item, index) => (
              <option key={item + index} value={item} />
            ))}
          </datalist>
        </>
      ) : (
        <input
          type={type}
          id={id}
          className="w-full h-[40px] border-gray border mt-2 px-4"
          defaultValue={defaultVal}
          {...register(name)}
        />
      )}
      <p className="text-red text-sm">{error}</p>
    </div>
  );
};

export default InputGroup;
