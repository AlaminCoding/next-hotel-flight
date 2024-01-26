const InputGroup = (props) => {
  const { type, label, name, id } = props;
  return (
    <div className="w-full mt-4">
      <label htmlFor={id} className="block font-bold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="w-full h-[40px] border-gray border mt-2 px-4"
      />
    </div>
  );
};

export default InputGroup;
