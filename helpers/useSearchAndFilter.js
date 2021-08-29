import { useState } from "react";

const useSearchAndFilter = () => {
  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);
  const [filterParam, setFilterParam] = useState(["All"]);

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

  return { q, setQ, setFilterParam, search };
};

export default useSearchAndFilter;
