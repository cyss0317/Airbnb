import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { navLinks } from "./articles";
import NavLink from "./NavLink";

interface NavLinksProps {
  children?: React.ReactNode;
  withinHamburger?: boolean;
}

export default function NavLinks(props: NavLinksProps) {
  const { withinHamburger, children } = props;
  const navClass = withinHamburger
    ? "flex-col gap-2"
    : "sm:flex hidden flex-row gap-6 ";

  const animationClass = withinHamburger
    ? "slide-in-from-right"
    : "pop-from-bottom-delay";


  return (
    <nav className={`flex align justify-center ${animationClass}`}>
      <ul className={`flex flex-initial align items-center ${navClass}`}>
        {navLinks.map((navLink) => {
          return (
            <NavLink
              key={`${navLink.href}`}
              href={navLink.href}
              title={navLink.title}
            />
          );
        })}
        <li className="hover:scale-125">
          <a href="Facebook">
            <FaFacebook />
          </a>
        </li>
        <li className="hover:scale-125">
          <a href="Instagram">
            <FaInstagram />
          </a>
        </li>
        <li className="hover:scale-125">
          <a href="Twitter">
            <FaTwitter />
          </a>
        </li>
      </ul>
      {children}
    </nav>
  );
}
