import { backgroudColorClass } from "./colorTheme";
import Hamburger from "./Hamburger";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="App-header sticky top-0 z-10 slide-in-from-left text-zinc-50 flex justify-between flex-col align">
      <div className={`ssn-contacts text-xl ${backgroudColorClass} grid grid-cols-4 auto-cols-max`}>
        <a href="/" className="header-title m-4 grid col-start-1 col-span-4 pop-from-bottom-delay">
          Welcome to The Cozy Oasis
        </a>
        <div className="col-start-5 m-4 relative">
          <NavLinks />
          <Hamburger />
        </div>
      </div>
      <div className="container-2 bg-white-50 text-teal-900 grid row-start-1 col-span-5 row-span-2"></div>
    </header>
  );
}
