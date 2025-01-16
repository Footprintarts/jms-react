const AppointmentExtraData = () => {
  return (
    <div className="Dynamic_Page">
      {/* Widget_Page-1-(Services) */}
      <div className="centered-row justify-between m-1">
        <h3 className="text-xl font-semibold tracking-tight text-blue-800">
          More About Appointment
        </h3>
      </div>

      <hr className="mt-4" />

      {/* Dynamic Display Elements */}
      <div className="grid lg:grid-cols-2 gap-4 mt-10">
        {/* DETAILS */}
        <div className="description col-span-2">
          <h3 className="text-zinc-800 text-base font-semibold mb-2 mt-0 ">
            Appointment Descriptions
          </h3>

          <textarea
            className="border border-solid bg-blue-50 focus:outline outline-none w-full px-4 py-3 rounded-md placeholder:text-sm"
            rows={6}
            placeholder="Enter Appointment Details"
          ></textarea>
        </div>
        <div className="description col-span-2">
          <h3 className="text-zinc-800 text-base font-semibold mb-2 mt-0 ">
            Attach Medical Report
          </h3>

          <input
            type="file"
            name="photo"
            id="customFile"
            accept=".jpg, .png"
            placeholder="Choose File"
            className=" w-full h-fit bg-blue-50 rounded text-sm text-zinc-400 p-4  cursor-pointer centered-row"
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentExtraData;
