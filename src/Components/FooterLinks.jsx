/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const FooterLinks = ({ title, links }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl leading-[30px] font-bold mb-6 text-zinc-300/80">
        {title}
      </h2>
      <ul className="flex flex-col gap-4 text-zinc-400/80 cursor-pointer">
        {links.map(({ name, path }, index) => (
          <li key={index}>
            <Link
              to={path}
              className="text-sm hover:-translate-y-1 hover:text-yellowColor transition-all duration-300"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
