/* eslint-disable react/prop-types */
import { Link } from "react-router";
import { BsArrowRight } from "react-icons/bs";

const ServicesCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div className="py-[30px] px-3 lg:px-5 hover:bg-blue-50 transition">
      <h2 className="text-[26px] leading-9 text-headingColor font-bold">
        {name}
      </h2>
      <p className="text-base font-[400] text-zinc-600 mt-4 ">{desc}</p>

      <div className="centered-row justify-between mt-[30px] ">
        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#101A1E]/70 text-zinc-800/70 mt-[30px]  centered-row justify-center group hover:bg-blue-600 hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>

        <span
          className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-semibold"
          style={{ background: `${bgColor}`, color: `${textColor}` }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServicesCard;
