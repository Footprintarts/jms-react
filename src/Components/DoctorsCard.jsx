/* eslint-disable react/prop-types */

import starIcon from "../assets/images/Star.png";
import { Link } from "react-router";
import { BsArrowRight } from "react-icons/bs";

const DoctorsCard = ({ doctor }) => {
  const {
    id,
    name,
    avgRating,
    totalRating,
    photo,
    specialization,
    totalPatients,
    hospital,
  } = doctor;
  return (
    <Link to={`/doctors/${id}`} passHref>
      <div className="p-3 lg:p-5 hover:bg-zinc-100 transition cursor-pointer hover:shadow-2xl hover:shadow-blue-200/70">
        <div>
          <img src={photo} alt="img" className="w-full" />
        </div>
        <h2 className="text-lg leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-bold mt-5">
          {name}
        </h2>

        <div className="mt-2 lg:mt-4 flex items-center justify-between">
          <span className="bg-[#CCF0F3] text-[#01b5c5] py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
            {specialization}
          </span>

          <div className="centered-row gap-[6px]">
            <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
              <img src={starIcon} alt="star_icon" /> {avgRating}
            </span>
            <span className="text-sm lg:text-base font-semibold text-textColor">
              {totalRating}
            </span>
          </div>
        </div>

        <div className="mt-[18px] lg:mt-5 flex items-center justify-between ">
          <div>
            <h3 className="text-base leading-7 lg:text-[18px] lg:leading-[30px] font-medium text-headingColor">
              <span className="bg-lime-200 p-1 px-2 rounded font-semibold text-lime-600 ">
                {totalPatients}
              </span>{" "}
              patients
            </h3>
            <p className="text-[14px] leading-6 font-normal text-textColor">
              At {hospital}
            </p>
          </div>

          <Link
            to="/doctors"
            className="w-[44px] h-[44px] rounded-full border border-solid border-[#101A1E] mt-[30px]  centered-row justify-center group hover:bg-primaryColor hover:border-none"
          >
            <BsArrowRight className="group-hover:text-white text-zinc-800 w-6 h-5" />
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default DoctorsCard;
