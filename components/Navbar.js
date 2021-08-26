/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import { FaMedkit, FaCommentMedical } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <nav className="my-navbar">
        <Link href="/">
          <div className="my-nav-item">
            <FaMedkit className="fs-3 text-primary" />
            <span>الأدوية المتوفرة</span>
          </div>
        </Link>{" "}
        <Link href="/help">
          <div className="my-nav-item">
            <FaCommentMedical className="fs-3 text-primary" />
            <span>الأدوية المطلوبة</span>
          </div>
        </Link>
      </nav>
    </>
  );
}
