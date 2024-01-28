import { FaTreeCity } from "react-icons/fa6";
import { MdOutlineLocalHotel } from "react-icons/md";
import { TbCoinTaka } from "react-icons/tb";
import { ImManWoman } from "react-icons/im";
import { FaChild } from "react-icons/fa";
import Image from "next/image";

const HotelSearchResult = (props) => {
  const { item } = props;
  return (
    <div className="mt-10 first:mt-0 last:border-none flex flex-col md:flex-row gap-5 md:gap-10 md:border-b border-gray rounded-b-none pb-10 ">
      <div className="w-full md:w-1/3">
        <Image
          src={item.img}
          alt={item.name}
          width={300}
          height={300}
          className="w-full h-auto"
        />
      </div>
      <div className="w-full md:w-2/3 max-w-[500px]">
        <h2 className="text-xl md:text-2xl font-semibold border-b border-gray rounded-b-none pb-3">
          {item.name}
        </h2>
        <div className="flex min-[450px]:flex-row flex-col">
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
        <div className="flex min-[450px]:flex-row flex-col">
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
  );
};

export default HotelSearchResult;
