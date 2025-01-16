import DatePicker from "./DatePicker";

// Data
import timeSlots from "../../assets/data/timeSlots";

const DatePage = () => {
  //  Click Handler
  const handleClick = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="Dynamic_Page">
      {/* Widget_Page-1-(Services) */}
      <div className="centered-row gap-8 md:gap-36">
        <h3 className="text-lg leading-5 md:text-xl font-semibold tracking-tight text-blue-800">
          Select Date and Time
        </h3>
        <div className="search  centered-row px-2 rounded">
          <h3 className="text-lg leading-5 md:text-xl  text-blue-800 font-semibold tracking-tight">
            Time Zone: <span>UTC + 00:00</span>
          </h3>
        </div>
      </div>

      <hr className="mt-4" />

      {/* Dynamic Display Elements */}
      <div className="grid lg:grid-cols-2 gap-4 mt-10">
        {/* Services */}
        <div className="left  h-fit p-4 rounded">
          {/* <Calen /> */}
          <DatePicker />
        </div>
        <div className="right  h-[420px] p-4 rounded overflow-y-scroll">
          <h3 className="text-lg text-center mb-4 text-zinc-500/80">
            Available time slots{" "}
          </h3>
          <div className="grid grid-cols-3 gap-2 ">
            {timeSlots.map(({ _id, value, label }) => (
              <button
                onClick={handleClick}
                key={_id}
                className="bg-blue-900 hover:bg-zinc-200 hover:text-zinc-800 hover:font-bold transition-all duration-100 ease-out"
                value={value}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePage;
