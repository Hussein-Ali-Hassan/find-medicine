import { useState } from "react";

import Spinner from "@/components/Spinner";
import AddMedicine from "./AddMedicine";
import WantedMedicine from "./WantedMedicine";

const AuthForm = () => {
  const [authState, setAuthState] = useState("wanted");
  const [loading, setLoading] = useState(false);

  if (loading) return <Spinner />;

  return (
    <article className="medicine-form">
      <div className="d-flex justify-content-between">
        <button
          className={`btn w-100 ms-2 ${
            authState === "wanted" ? "btn-primary text-white" : "btn-light"
          }`}
          onClick={() => setAuthState("wanted")}
        >
          أبحث عن دواء
        </button>
        <button
          className={`btn w-100 ${
            authState === "available" ? "btn-primary text-white" : "btn-light"
          }`}
          onClick={() => setAuthState("available")}
        >
          {" "}
          أريد أن أساعد
        </button>
      </div>
      <div className="py-4 px-3">
        {authState === "wanted" ? (
          <WantedMedicine setLoading={setLoading} />
        ) : (
          <AddMedicine setLoading={setLoading} />
        )}
      </div>
    </article>
  );
};

export default AuthForm;
