import icon01 from "../../assets/images/icon01.png";
import icon02 from "../../assets/images/icon02.png";
import icon03 from "../../assets/images/icon03.png";
import { BsArrowRight } from "react-icons/bs";

const HowItWorksSection = () => {
  return (
    <section>
      <div className="container">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="heading-1 text-center">
            Providing the best medical services
          </h2>
          <p className="text_para text-center">
            World-class care for everyone. Our health System offers unmatched,
            expert health care.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {/* 1 */}
          <div className="py-[30px] px-5">
            <div className="flex justify-center items-center">
              <img src={icon01} alt="Find a Doctor Icon" />
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Find a Doctor
              </h2>
              <p className="text-base text-textColor font-[400] mt-4 text-center">
                World-class care for everyone. Our health System offers
                unmatched, expert health care. From the lab to the clinic.
              </p>

              <a
                href="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#101A1E]/60 text-zinc-700/70 mt-[30px] mx-auto centered-row justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </a>
            </div>
          </div>

          {/* 2 */}
          <div className="py-[30px] px-5">
            <div className="flex justify-center items-center">
              <img src={icon02} alt="Find a Location Icon" />
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Find a Location
              </h2>
              <p className="text-base text-textColor font-[400] mt-4 text-center">
                World-class care for everyone. Our health System offers
                unmatched, expert health care. From the lab to the clinic.
              </p>

              <a
                href="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#101A1E]/60 text-zinc-700/70 mt-[30px] mx-auto centered-row justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </a>
            </div>
          </div>

          {/* 3 */}
          <div className="py-[30px] px-5">
            <div className="flex justify-center items-center">
              <img src={icon03} alt="Book Appointment Icon" />
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Book Appointment
              </h2>
              <p className="text-base text-textColor font-[400] mt-4 text-center">
                World-class care for everyone. Our health System offers
                unmatched, expert health care. From the lab to the clinic.
              </p>

              <a
                href="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#101A1E]/60 text-zinc-700/70 mt-[30px] mx-auto centered-row justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
