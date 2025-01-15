import heroImage from "../../assets/images/hero-img01.png";
import heroImage02 from "../../assets/images/hero-img02.png";
import heroImage03 from "../../assets/images/hero-img03.png";

const HeroSection = () => {
  return (
    <section className="hero_section pt-[60px] 2xl:h-[800px] bg-grad">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          {/* Hero Content */}
          <div>
            <div className="lg:w-[570px]">
              <h1 className="text-[36px] leading-[46px] bg-gradient-to-br via-blue-800 from-blue-800 to-red-600 bg-clip-text text-transparent font-[800] md:text-[60px] md:leading-[70px]">
                We help patients live a healthy, longer life.
              </h1>
              <p className="text_para">
                JMS Health Care Center Clinic is a premier healthcare facility
                located in Dodoma, dedicated to delivering high-qulity medical
                services to individuals and families in our community. We
                combine compassionate care with modern medical technology to
                ensure our patients receive the best possible treatment and
                support.
              </p>

              <button className="btn py-5 bg-[#193a8b] hover:bg-blue-100 hover:border hover:border-primaryColor transition-all duration-300 hover:text-primaryColor hover:shadow-xl hover:shadow-primaryColor/20 hover:-translate-y-1">
                Request an Appointment
              </button>
            </div>

            {/* Hero Counter */}
            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
              {/* 1 */}
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] font-bold text-headingColor">
                  10+
                </h2>
                <span className="w-[100px] h-2 bg-yellowColor rounded-full block -mt-[14px]"></span>
                <p className="text_para">Years of Experience</p>
              </div>
              {/* 2 */}
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] font-bold text-headingColor">
                  15+
                </h2>
                <span className="w-[100px] h-2 bg-red-700 rounded-full block -mt-[14px]"></span>
                <p className="text_para">Clinic Locations</p>
              </div>
              {/* 3 */}
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] font-bold text-headingColor">
                  100%
                </h2>
                <span className="w-[100px] h-2 bg-blue-600 rounded-full block -mt-[14px]"></span>
                <p className="text_para">Patient satisfaction</p>
              </div>
            </div>
          </div>

          {/* Hero Images */}
          <div className="flex justify-end gap-[30px]">
            <div>
              <img src={heroImage} alt="hero_image" className="w-[490px]" />
            </div>
            <div className="mt-[30px]">
              <img
                src={heroImage02}
                alt="hero_image"
                className="w-full mb-[30px]"
              />
              <img src={heroImage03} alt="hero_image" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
