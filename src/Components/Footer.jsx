import images from "../assets/images/assets";

import FooterLinks from "../Components/FooterLinks";
import { Link } from "react-router";

const links = [
  {
    _id: "001",
    title: "Quick Links",
    links: [
      { name: "Home", path: "/" },
      { name: "Doctors", path: "/doctors" },
      { name: "Services", path: "/services" },
      { name: "Contact", path: "/contact" },
    ],
  },
  {
    _id: "002",
    title: "I want to:",
    links: [
      { name: "Book Appointment", path: "#" },
      { name: "Login", path: "/login" },
      { name: "Create Account", path: "/register" },
      { name: "Contribute", path: "#" },
    ],
  },
  {
    _id: "003",
    title: "Support",
    links: [
      { name: "Contact", path: "/contact" },
      { name: "Help", path: "#" },
      { name: "Services", path: "#" },
      { name: "FAQs", path: "/" },
    ],
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950/90">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px] p-4">
          <div className="logo p-4">
            <Link to="/">
              <img src={images.jms_logo} alt="image" width={150} />
            </Link>
            <p className="text-zinc-400/80 text-base mt-2">
              Copyright © {year} JMS HealthCare{" "}
            </p>
            <div className="centered-row gap-4 mt-4">
              <div className="w-10 h-10 border rounded-full center-item cursor-pointer hover:bg-blue-600 transition_2">
                <img src={images.fb_icon} alt="icon" className="w-5" />
              </div>
              <div className="w-10 h-10 border rounded-full center-item cursor-pointer hover:bg-rose-600 transition_2">
                <img src={images.insta_icon} alt="icon" className="w-5" />
              </div>
              <div className="w-10 h-10 border rounded-full center-item cursor-pointer hover:bg-lime-600 transition_2">
                <img src={images.whatsapp_icon} alt="icon" className="w-5" />
              </div>
            </div>
          </div>
          {/* Footer Links */}

          {links.map(({ _id, title, links: linkList }) => (
            <FooterLinks key={_id} title={title} links={linkList} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
