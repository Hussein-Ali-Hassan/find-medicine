import { useEffect, useState } from "react";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import SearchBox from "@/components/utils/SearchBox";
import FilterBox from "@/components/utils/FilterBox";
import MedicineCard from "@/components/medicine/MedicineCard";
import IntroSlider from "@/components/utils/IntroSlider";

import firebase from "../config/firebase";
import useSearchAndFilter from "helpers/useSearchAndFilter";

export default function Home({ data }) {
  const [items, setItems] = useState([]);
  const [showSlide, setShowSlide] = useState(false);
  const { q, setQ, setFilterParam, search } = useSearchAndFilter();

  useEffect(() => {
    setItems(data);

    if (!localStorage.getItem("slide")) {
      setShowSlide(true);
      localStorage.setItem("slide", true);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {showSlide && <IntroSlider />}
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
  const snapshot = await firebase
    .firestore()
    .collection("wantedMedicines")
    .orderBy("addedAt", "desc")
    .get();
  const data = snapshot.docs.map((doc) => doc.data());
  return {
    props: {
      data,
    },
  };
}
