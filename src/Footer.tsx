import { backgroudColorClass } from "./colorTheme";

export default function Footer() {
  return (
    <footer className="slide-in-from-left z-negative fixed bottom-0 w-full">
      <div className={`footer-container text-sm text-zinc-50 ${backgroudColorClass} flex flex-col justify-center items-center`}>
        <p>&copy; Secure Ventures LLC. All rights reserved.</p>
        {/* <ul className="flex gap-5">
          <li className="hover:underline hover:text-zinc-400">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="hover:underline hover:text-zinc-400">
            <a href="#">Terms of Service</a>
          </li>
          <li className="hover:underline hover:text-zinc-400">
            <a href="#">Contact Me</a>
          </li>
        </ul> */}
      </div>
    </footer>
  );
}
