import { useState, useEffect } from "react";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import SearchBox from "@/components/utils/SearchBox";
import FilterBox from "@/components/utils/FilterBox";
import MedicineCard from "@/components/medicine/MedicineCard";

import firebase from "../config/firebase";
import useSearchAndFilter from "helpers/useSearchAndFilter";

export default function Give({ data }) {
  const [items, setItems] = useState([]);
  const { q, setQ, setFilterParam, search } = useSearchAndFilter();

  useEffect(() => {
    setItems(data);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar currentPage="home" />
      <h1 className="text-center bg-light p-3 py-4">لائحة الأدوية المتوفرة</h1>

      <div className="container my-3">
        <strong className="mb-4 d-block text-muted">
          تملك دواء لا تحتاجه ؟ ساعد غيرك <Link href="/add">هنا</Link>{" "}
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
          <h2 className="mt-5">لا يوجد أدوية متوفرة في الوقت الحالي</h2>
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
  const snapshot = await firebase
    .firestore()
    .collection("availableMedicines")
    .orderBy("addedAt", "desc")
    .get();
  const data = snapshot.docs.map((doc) => doc.data());
  return {
    props: {
      data,
    },
  };
}
