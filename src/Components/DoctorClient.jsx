/* eslint-disable react/prop-types */
import DoctorAbout from "./DoctorAbout";
import DoctorFeedback from "./DoctorFeedback";
import SidePanel from "./SidePanel";
import { useState } from "react";

const DoctorClient = ({ doctor }) => {
  const [tab, setTab] = useState("about");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="centered-row gap-5">
              <figure className="max-w-[200px]">
                <img src={doctor.photo} alt="Doctor Image" />
              </figure>
              <div>
                <span className="bg-[#CCF0F3] text-[#01b5c5] py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-base font-semibold rounded mt-3">
                  {doctor.specialization}
                </span>
                <h3 className="text-[#181a1e] text-[22px] leading-9 mt-3 font-bold">
                  {doctor.name}
                </h3>

                <p className="text-zinc-400 text-sm w-2/3 mt-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reiciendis.
                </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-[#0066FF34] pb-2">
              <span
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && "border-b-2 border-b-blue-600"
                } py-2 px-5 mr-5 text-base text-[#181a1e] bg-white font-semibold cursor-pointer`}
              >
                About
              </span>
              <span
                onClick={() => setTab("feedback")}
                className={`${
                  tab === "feedback" && "border-b-2 border-b-blue-600"
                } py-2 px-5 mr-5 text-base text-[#181a1e] bg-white font-semibold cursor-pointer`}
              >
                Feedback
              </span>
            </div>

            <div className="mt-[50px]">
              {tab === "about" && <DoctorAbout />}
              {tab === "feedback" && <DoctorFeedback />}
            </div>
          </div>

          <div>
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorClient;
