const RegisterAppointment = () => {
  return (
    <div className="text-sm grid lg:grid-cols-2 gap-6 bg-blue-50 w-full h-fit lg:h-[400px] rounded p-6 text-zinc-800/90">
      {/* First Name */}
      <div className="item  h-fit">
        <h3 className=" tracking-tight mb-2 font-semibold">First Name*:</h3>

        <input
          type="text"
          name="name"
          required
          placeholder="Enter your first name"
          className="p-4 bg-[#ffffff] outline-none w-full rounded-md"
        />
      </div>
      {/* Last Name */}
      <div className="item  h-fit">
        <h3 className=" tracking-tight mb-2 font-semibold">Last Name*:</h3>

        <input
          type="text"
          name="name"
          required
          placeholder="Enter your last name"
          className="p-4 bg-[#ffffff] outline-none w-full rounded-md"
        />
      </div>
      {/* Email */}
      <div className="item  h-fit">
        <h3 className=" tracking-tight mb-2 font-semibold">Email*:</h3>

        <input
          type="email"
          name="name"
          required
          placeholder="Enter your email"
          className="p-4 bg-[#ffffff] outline-none w-full rounded-md"
        />
      </div>
      {/* Contact */}
      <div className="item  h-fit">
        <h3 className=" tracking-tight mb-2 font-semibold">Contact*:</h3>

        <input
          type="tel"
          name="name"
          required
          placeholder="+255 "
          className="p-4 bg-[#ffffff] outline-none w-full rounded-md"
        />
      </div>
      {/* Email */}
      <div className="item  h-fit">
        {/* 1 */}
        <label
          htmlFor=""
          className="text-zinc-800/80 font-bold text-[15px] leading-7"
        >
          Gender*:
          <select
            name="gender"
            required
            className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none ml-4"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default RegisterAppointment;
