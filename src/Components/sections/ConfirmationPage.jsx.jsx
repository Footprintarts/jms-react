const ConfirmationPage = () => {
  return (
    <div className="Dynamic_Page">
      {/* Widget_Page-1-(Services) */}
      <div className="centered-row justify-between">
        <h3 className="text-xl font-semibold tracking-tight text-blue-800">
          Confirmation Details
        </h3>
      </div>
      <hr className="mt-4" />
      {/* Dynamic Display Elements */}
      <div className="grid lg:grid-cols-2 gap-4 mt-10">
        <div className="left grid gap-8">
          {/* 1 */}
          <div className="info">
            <div className="h3 text-[15px] font-semibold mb-4 uppercase tracking- text-blue-600">
              Clinic Info
            </div>
            <div className="bg-blue-50 h-fit rounded-md p-4 text-sm text-zinc-800/80">
              <h3 className="font-semibold">JMS Clinic</h3>
              <p className="mt-4">
                3/e, Nkhungu Street, Block 5, Dodoma, Tanzania, 41101
              </p>
            </div>
          </div>
          {/* 1 */}
          <div className="info text-sm">
            <div className="h3 text-[15px] font-semibold mb-4 uppercase tracking-tight text-blue-600">
              Patient Info
            </div>
            <div className="bg-blue-50 h-fit rounded-md flex flex-col gap-4 p-4 px-6 text-zinc-800/80">
              {/* 1 */}
              <div className="centered-row">
                <span className="font-semibold mr-4">Name:</span>{" "}
                <p className="">John Smith</p>
              </div>
              {/* 1 */}
              <div className="centered-row">
                <span className="font-semibold mr-4">Number:</span>{" "}
                <p className="">+255 123 456 782</p>
              </div>
              {/* 1 */}
              <div className="centered-row">
                <span className="font-semibold mr-4">Email:</span>{" "}
                <p className="">abc17@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="right">
          <div className="h3 text-[15px] font-semibold mb-4 uppercase tracking-tight text-blue-500">
            Appointment Summary
          </div>
          <div className="border border-zinc-100/80 h-fit p-4 rounded-md bg-zinc-50 text-sm flex flex-col gap-4 text-zinc-800/80">
            {/* Doc-info */}
            <div className="flex flex-col gap-4 mt-2">
              {/* 1 */}
              <div className="centered-row justify-between">
                <span className="font-semibold mr-4">Doctor:</span>{" "}
                <p className="">Boniface Jackson</p>
              </div>
              {/* 1 */}
              <div className="centered-row justify-between">
                <span className="font-semibold mr-4">Date:</span>{" "}
                <p className="">January 17, 2025</p>
              </div>
              {/* 1 */}
              <div className="centered-row justify-between">
                <span className="font-semibold mr-4">Time:</span>{" "}
                <p className="">12:05pm</p>
              </div>
            </div>

            {/* service-card */}
            <div className="bg-blue-50 h-fit rounded-md p-4 text-sm">
              <h3 className="font-semibold">Services</h3>
              <p className="mt-4">
                Routine Checkup{" "}
                <span className="font-bold tracking-tight ml-28">200/=</span>
              </p>
            </div>

            <hr className="mt-2" />

            <div className="centered-row justify-between mt-2">
              <h2 className="text-lg font-bold">Total Price</h2>
              <h2 className="text-lg font-bold">$500/=</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
