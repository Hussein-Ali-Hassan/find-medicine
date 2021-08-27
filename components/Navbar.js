/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import { FaMedkit, FaCommentMedical, FaPlusSquare } from "react-icons/fa";

export default function Navbar({ currentPage }) {
  return (
    <>
      <nav className="my-navbar">
        <Link href="/">
          <div
            className={`my-nav-item ${
              currentPage === "home" ? "text-primary" : ""
            }`}
          >
            <FaMedkit className="fs-3" />
            <span>الأدوية المتوفرة</span>
          </div>
        </Link>{" "}
        <Link href="/help">
          <div
            className={`my-nav-item ${
              currentPage === "help" ? "text-primary" : ""
            }`}
          >
            <FaCommentMedical className="fs-3" />
            <span>الأدوية المطلوبة</span>
          </div>
        </Link>
        <Link href="/add">
          <div
            className={`my-nav-item ${
              currentPage === "add" ? "text-primary" : ""
            }`}
          >
            <FaPlusSquare className="fs-3" />
            <span>تقديم طلب</span>
          </div>
        </Link>
      </nav>
    </>
  );
}
