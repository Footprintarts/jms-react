import AppointmentSection from "../Components/sections/AppointmentSection";

const AppointmentPage = () => {
  return (
    <section>
      <div className="px-4 mx-auto lg:max-w-[1180px]">
        <h2 className="heading-1 text-center ">Book Appointment</h2>

        <p className="mb-8 lg:mb-16 font-light text-center text_para">
          Want to know more about Us? Get in touch with us
        </p>
        <div className="appointment lg:-mt-14">
          <AppointmentSection />
        </div>
      </div>
    </section>
  );
};

export default AppointmentPage;
