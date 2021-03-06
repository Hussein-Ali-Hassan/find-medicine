import {
  FaExclamationTriangle,
  FaHandshake,
  FaAngleDoubleLeft,
  FaAngleLeft,
} from "react-icons/fa";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";

export default function About() {
  return (
    <>
      <Navbar currentPage="about" />
      <h1 className="text-center bg-light p-3 py-4">فكرة هذه المنصة</h1>

      <div className="container mb-4 pb-8 fs-3">
        <div className="text-center">
          <img
            src="icon/drug.svg"
            className="about-page-img m-auto mt-4 mb-5"
          />
        </div>
        <p>
          <FaExclamationTriangle className="fs-4 text-warning mx-2 mb-1" />
          بهالأزمة الي عم نمرق فيها جميعاً ولهي مشكلة فقدان معظم الأدوية من
          الصيدليات ..
        </p>
        <p>
          <FaHandshake className="fs-4 text-primary mx-2 mb-1" />
          أنشئنا هالمنصة لنساعد بعضنا بتأمين الادوية المقطوعة للناس المحتاجة عبر
          تجميع الطلبات بصفحة واحدة وهيك منسهل عملية إحصاءها والبحث عنها
        </p>
        <br />
        <p>
          <FaAngleDoubleLeft className="fs-4 text-danger mx-2 mb-1" /> المنصة
          مؤلفة من ٣ صفحات رئيسية:
        </p>
        <p>
          <FaAngleLeft className="fs-4 text-primary mx-2 mb-1" />
          <Link href="/">الصفحة الأولى</Link> لعرض الادوية المطلوبة والناس
          محتاجينها
        </p>
        <p>
          <FaAngleLeft className="fs-4 text-primary mx-2 mb-1" />
          <Link href="/give">الصفحة الثانية</Link> لعرض الادوية المتوفرة عند شخص
          معين وهو جاهز يعطيها للمحتاج
        </p>
        <p>
          <FaAngleLeft className="fs-4 text-primary mx-2 mb-1" />
          <Link href="/add">الصفحة الثالثة</Link> لتقديم طلبك: ان كنت بحاجة
          لدواء او تملك دواء وتريد المساعدة
        </p>
      </div>
    </>
  );
}
