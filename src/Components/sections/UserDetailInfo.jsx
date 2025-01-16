import { useState } from "react";

import LoginDetails from "./LoginDetails";
import RegisterAppointment from "./RegisterAppointment";

const UserDetailInfo = () => {
  const [tab, setTab] = useState("register");

  return (
    <div className="Dynamic_Page">
      {/* Heading */}
      <div className="mt-[50px] border-b border-[#0066FF34] pb-2">
        <span
          onClick={() => setTab("register")}
          className={`${
            tab === "register" && "border-b-2 border-b-blue-500 text-blue-500"
          } py-2 px-5 mr-5 text-base text-zinc-800 bg-white font-semibold cursor-pointer`}
        >
          Register
        </span>
        <span
          onClick={() => setTab("login")}
          className={`${
            tab === "login" && "border-b-2 border-b-blue-600 text-blue-500"
          } py-2 px-5 mr-5 text-base text-zinc-800 bg-white font-semibold cursor-pointer`}
        >
          Login
        </span>
      </div>

      {/* Dynamic Display Elements */}
      <div className="grid  gap-4 mt-10">
        {tab === "register" && <RegisterAppointment />}
        {tab === "login" && <LoginDetails />}
      </div>
    </div>
  );
};

export default UserDetailInfo;
