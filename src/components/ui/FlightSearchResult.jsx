import { TbCoinTaka } from "react-icons/tb";
import { ImManWoman } from "react-icons/im";
import { FaChild } from "react-icons/fa";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";
import Image from "next/image";
const HotelSearchResult = (props) => {
  const { item } = props;
  return (
    <div className="mt-10 first:mt-0 last:border-none flex gap-10 border-b border-gray rounded-b-none pb-10">
      <div className="flex gap-5 items-start w-full">
        <Image
          src="/aeroplane.png"
          height={70}
          width={70}
          alt="Plane Icon"
          className="md:block hidden"
        />
        <div className="w-full md:max-w-[500px]">
          <div className="flex gap-5 items-center border-b rounded-b-none border-gray pb-5 md:pb-0 md:border-none">
            <Image
              src="/aeroplane.png"
              height={50}
              width={50}
              alt="Plane Icon"
              className="md:hidden block"
            />
            <div className="flex-1">
              <h2 className="text-lg md:text-2xl font-bold">{item.airline}</h2>
              <h2 className="text-base md:text-xl font-semibold mt-1 md:mt-3 md:border-b border-gray rounded-b-none md:pb-3">
                {item.from} to {item.to}
              </h2>
            </div>
          </div>

          <div className="flex flex-col min-[600px]:flex-row">
            <h3 className="item w-[300px]">
              <MdFlightTakeoff /> Departure : {item.departue}
            </h3>
            <h3 className="item">
              <MdFlightLand /> Return : {item.return}
            </h3>
          </div>
          <div className="flex flex-col min-[600px]:flex-row">
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
  );
};

export default HotelSearchResult;
