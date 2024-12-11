const SidePanel = () => {
  return (
    <div className=" shadow-2xl shadow-blue-100 p-3 lg:p-5 rounded-md bg-white">
      <div className="centered-row justify-between">
        <p className="text_para mt-0 font-semibold">Ticket Price</p>
        <span className="text-base lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          500 BOT
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>
        <ul className="mt-3">
          <li className="centered-row justify-between mb-2">
            <p className="text-[15px] leading-6 text-zinc-600/80 font-semibold">
              Sunday
            </p>
            <p className="text-[15px] leading-6 text-blue-500 font-semibold">
              4:00 PM - 9:30 PM
            </p>
          </li>
          <li className="centered-row justify-between mb-2">
            <p className="text-[15px] leading-6 text-zinc-600/80 font-semibold">
              Tuesday
            </p>
            <p className="text-[15px] leading-6 text-blue-500 font-semibold">
              4:00 PM - 9:30 PM
            </p>
          </li>
          <li className="centered-row justify-between mb-2">
            <p className="text-[15px] leading-6 text-zinc-600/80 font-semibold">
              Friday
            </p>
            <p className="text-[15px] leading-6 text-blue-500 font-semibold ">
              4:00 PM - 9:30 PM
            </p>
          </li>
        </ul>
      </div>

      <button className="btn px-2 w-full rounded-md transition-all duration-300 ease-in-out hover:-translate-y-1 ">
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;
