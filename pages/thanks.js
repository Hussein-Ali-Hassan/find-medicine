import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

export default function Thanks() {
  return (
    <>
      <Navbar />
      <h1 className="text-center bg-light p-3 py-4"> إقتراحاتكم</h1>
      <div className="my-5 container text-center">
        <h3>نشكر تعاونكم معنا لتحسين وتطوير عمل هذه المنصة</h3>
        <Link href="/">
          <button className="btn btn-primary text-white mt-3">
            الصفحة الرئسية
          </button>
        </Link>
      </div>
    </>
  );
}
