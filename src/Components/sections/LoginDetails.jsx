const LoginDetails = () => {
  return (
    <div className="text-sm grid lg:grid-cols-2 gap-6 bg-blue-50 w-full h-[400px] rounded p-6 text-zinc-800/80">
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
      {/* Password */}
      <div className="item relative  h-fit">
        <h3 className=" tracking-tight mb-2 font-semibold">Password*:</h3>

        <input
          type="password"
          name="name"
          required
          placeholder="********"
          className="p-4 bg-[#ffffff] outline-none w-full rounded-md"
        />

        {/* Forgot Password Link */}
        <div className="absolute -bottom-6 text-[12px] italic right-0 cursor-pointer">
          <p className="text-rose-500 hover:underline hover:underline-offset-2">
            Forgot Password ?
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginDetails;
