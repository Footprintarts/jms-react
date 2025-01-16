import { useState } from "react";
import ServiceSelectionPage from "./ServiceSelectionPage";
import DatePage from "./DatePage";
import AppointmentExtraData from "./AppointmentExtraData.jsx";
import ConfirmationPage from "./ConfirmationPage.jsx.jsx";
import UserDetailInfo from "./UserDetailInfo.jsx";

const listItems = [
  {
    _id: "001",
    title: "Doctor Services",
    desc: " Please select a service from below options",
    isLast: false,
    tab: "services",
  },
  {
    _id: "002",
    title: " Select Date and Time ",
    desc: "  Select date to see a timeline of available slots ",
    isLast: false,
    tab: "date",
  },
  {
    _id: "003",
    title: " Appointment Extra Data ",
    desc: " Upload file and description about appointment ",
    isLast: false,
    tab: "desc",
  },
  {
    _id: "004",
    title: "  User Detail Information  ",
    desc: " Please provide you contact details ",
    isLast: false,
    tab: "details",
  },
  {
    _id: "005",
    title: " Confirmation ",
    desc: "  Confirm your booking ",
    isLast: true,
    tab: "confirm",
  },
];

const AppointmentSection = () => {
  const [count, setCount] = useState(1);
  const [tab, setTab] = useState("services");

  const handleNext = () => {
    if (count <= 5) {
      setCount(count + 1);

      if (count === 2) {
        setTab("date");
      } else if (count === 3) {
        setTab("desc");
      } else if (count === 4) {
        setTab("details");
      } else if (count === 5) {
        setTab("confirm");
      }
    } else {
      setCount(5);
    }

    // console.log("Count:", count);
  };
  const handlePrevious = () => {
    if (count <= 5) {
      setCount(count - 1);

      if (count === 2) {
        setTab("date");
      } else if (count === 3) {
        setTab("desc");
      } else if (count === 4) {
        setTab("details");
      } else if (count === 5) {
        setTab("confirm");
      } else if (count === 1) {
        setTab("services");
      }
    } else {
      setCount(1);
    }

    console.log("Count:", count);
  };

  return (
    <section className="container bg-transparent h-full lg:h-[800px] -ml-5 md:-ml-0">
      <div className="  text-zinc-100 grid lg:grid-cols-3 gap-4 bg-transparent  h-full">
        {/* LEFT */}
        <div className="left  bg-blue-400 rounded-lg p-6 text-white">
          <ul className="list flex md:flex-col justify-center gap-10 md:gap-4">
            {/* Small-Screen */}
            {listItems.map(({ _id, tab: itemTab }) => (
              <li
                key={_id}
                onClick={() => setTab(itemTab)}
                className={`md:hidden w-8 h-8 border border-zinc-50 relative rounded-full ${
                  tab === itemTab ? " bg-zinc-50 " : "bg-transparent"
                } cursor-pointer`}
              >
                <img
                  src={tab === itemTab ? "/radio_blue.svg" : "/radio_white.svg"}
                  alt="image"
                />
              </li>
            ))}

            {/* 1 */}
            {listItems.map(({ _id, title, desc, isLast, tab: itemTab }) => (
              <li
                key={_id}
                onClick={() => setTab(itemTab)}
                className={`relative hidden md:block hover:text-zinc-700 hover:font-bold transition-all duration-100 ease-in before:content-[''] before:absolute before:top-1 before:-left-8 before:w-5 before:cursor-pointer after:cursor-pointer
                    before:h-5 before:border before:border-zinc-50 before:rounded-full ${
                      tab === itemTab
                        ? "before:bg-[url(/radio_blue.svg)] before:bg-zinc-50"
                        : "before:bg-[url(/radio_white.svg)]"
                    } ml-4 after:content-[''] after:absolute after:top-7 after:-left-[22.5px] after:w-[1px] ${
                  isLast ? "after:h-0" : "after:h-8"
                } after:bg-zinc-50`}
              >
                <a href="#" className="">
                  <span className="font-semibold ">{title}</span>
                  <p className="text-sm"> {desc}</p>
                </a>
              </li>
            ))}
          </ul>
          <div className="logout  h-[47.4%] flex  flex-col-reverse">
            <button className="rounded hidden md:block uppercase bg-rose-500 text-sm hover:bg-zinc-50 hover:text-zinc-800 hover:-translate-y-1 duration-150 ease-in hover:shadow-2xl">
              LogOut
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="right relative border-2 border-blue-200/80 bg-white col-span-2 rounded-lg p-4 text-zinc-800 md:p-16 lg:p-4">
          {/* Widget_Page-1-(Services) */}
          {tab === "services" && <ServiceSelectionPage />}

          {/* New_Page */}
          {tab === "date" && <DatePage />}

          {tab === "desc" && <AppointmentExtraData />}

          {tab === "details" && <UserDetailInfo />}

          {tab === "confirm" && <ConfirmationPage />}

          {/* Next-Btn */}
          <button
            onClick={handleNext}
            className="absolute -bottom-14 md:bottom-4 bg-blue-500 right-8 uppercase py-2 px-8 text-sm hover:bg-zinc-200 hover:text-zinc-800  duration-150 ease-in hover:shadow-2xl"
          >
            Next
          </button>
          {/* Previous-Btn */}
          {tab !== "services" && (
            <button
              onClick={handlePrevious}
              className="absolute bg-rose-500 -bottom-14 md:bottom-4 right-40 uppercase py-2 px-8 text-sm hover:bg-zinc-200 hover:text-zinc-800  duration-150 ease-in hover:shadow-2xl"
            >
              Back
            </button>
          )}

          {/* End--Dynamic-display */}
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
