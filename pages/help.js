import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import firebase from "../config/firebase";
import SearchBox from "@/components/SearchBox";
import FilterBox from "@/components/FilterBox";
import Medicine from "@/components/Medicine";

export default function Help({ data }) {
  const [q, setQ] = useState("");
  const [items, setItems] = useState([]);
  const [searchParam] = useState(["name"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  useEffect(() => {
    setItems(data);
    // eslint-disable-next-line
  }, []);

  function search(items) {
    return items.filter((item) => {
      if (item.city == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  return (
    <>
      <Navbar currentPage="help" />

      <h1 className="text-center bg-light p-3 py-4">لائحة الأدوية المطلوبة</h1>
      <div className="container my-3">
        <strong className="mb-4 d-block text-muted">
          تبحث عن دواء ولا تجده ؟ قم بتعبئة{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe2oJQjvCbMxQ5MKSGgoikVpNDGkB7Bk0xL2krwttQAMoXyvQ/viewform?usp=sf_link"
            target="_blank"
            rel="noreferrer"
          >
            هذه الاستمارة
          </a>
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
            <Medicine key={medicine.name} medicine={medicine} />
          ))}
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const snapshot = await firebase
    .firestore()
    .collection("wantedMedicines")
    .get();
  const data = snapshot.docs.map((doc) => doc.data());
  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
