/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import {
  FaMedkit,
  FaCommentMedical,
  FaPlusSquare,
  FaLightbulb,
  FaQuestionCircle,
} from "react-icons/fa";

export default function Navbar({ currentPage }) {
  return (
    <>
      <nav className="my-navbar">
        <Link href="/">
          <div
            className={`my-nav-item ${
              currentPage === "help" ? "text-primary" : ""
            }`}
          >
            <FaCommentMedical />
            <span> المطلوبة</span>
          </div>
        </Link>
        <Link href="/give">
          <div
            className={`my-nav-item ${
              currentPage === "home" ? "text-primary" : ""
            }`}
          >
            <FaMedkit />
            <span> المتوفرة</span>
          </div>
        </Link>{" "}
        <Link href="/add">
          <div
            className={`my-nav-item ${
              currentPage === "add" ? "text-primary" : ""
            }`}
          >
            <FaPlusSquare />
            <span>تقديم طلب</span>
          </div>
        </Link>
        <Link href="/ideas">
          <div
            className={`my-nav-item ${
              currentPage === "ideas" ? "text-primary" : ""
            }`}
          >
            <FaLightbulb />
            <span> لاقتراحاتكم</span>
          </div>
        </Link>
        <Link href="/about">
          <div
            className={`my-nav-item ${
              currentPage === "about" ? "text-primary" : ""
            }`}
          >
            <FaQuestionCircle />
            <span> فكرة المنصة</span>
          </div>
        </Link>
      </nav>
    </>
  );
}
