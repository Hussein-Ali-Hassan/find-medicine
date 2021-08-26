import { useEffect, useState } from "react";

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
      <h1 className="text-center bg-light p-3 py-4">لائحة الأدوية المطلوبة</h1>
      <div className="container my-3">
        <strong className="mb-4 d-block">
          تبحث عن دواء ولا تجده ؟ قم بتعبئة{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe2oJQjvCbMxQ5MKSGgoikVpNDGkB7Bk0xL2krwttQAMoXyvQ/viewform?usp=sf_link"
            target="_blank"
          >
            هذه الاستمارة
          </a>
        </strong>
        <div className="my-3 row">
          <div className="col-7">
            <SearchBox q={q} setQ={setQ} />
          </div>
          <div className="col-5">
            <FilterBox setFilterParam={setFilterParam} />
          </div>
        </div>
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
  };
}
