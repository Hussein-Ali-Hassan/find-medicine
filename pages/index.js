import { useEffect, useState } from "react";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import SearchBox from "@/components/utils/SearchBox";
import FilterBox from "@/components/utils/FilterBox";
import MedicineCard from "@/components/medicine/MedicineCard";
import useSearchAndFilter from "helpers/useSearchAndFilter";
import { db, collection, query, orderBy, getDocs } from "../config/firebase";

export default function Home({ data }) {
  const { q, setQ, setFilterParam, search } = useSearchAndFilter();

  return (
    <>
      <Navbar currentPage="help" />
      <h1 className="text-center bg-light p-3 py-4">لائحة الأدوية المطلوبة</h1>
      <div className="container my-3">
        <strong className="mb-4 d-block text-muted">
          تحتاج دواء ولا تجده ؟ أرسل طلبك <Link href="/add">هنا</Link>{" "}
        </strong>
        <div className="my-3 row g-1">
          <div className="col-7">
            <SearchBox q={q} setQ={setQ} />
          </div>
          <div className="col-5">
            <FilterBox setFilterParam={setFilterParam} />
          </div>
        </div>
        {data.length === 0 && (
          <h2 className="mt-5">لا يوجد أدوية مطلوبة في الوقت الحالي</h2>
        )}
        <main className="medicines-container">
          {search(data).map((medicine) => (
            <MedicineCard key={medicine.name} medicine={medicine} />
          ))}
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const q = query(
    collection(db, "wantedMedicines"),
    orderBy("addedAt", "desc")
  );
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => doc.data());

  return {
    props: {
      data,
    },
  };
}
