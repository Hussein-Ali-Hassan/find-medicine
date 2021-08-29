import { useState, useContext } from "react";

import MedicineContext from "@/context/MedicineContext";
import Spinner from "@/components/utils/Spinner";
import AddMedicine from "./AvailableMedicineForm";
import WantedMedicine from "./WantedMedicineForm";

const AuthForm = () => {
  const { loading } = useContext(MedicineContext);
  const [authState, setAuthState] = useState("wanted");

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
        {authState === "wanted" ? <WantedMedicine /> : <AddMedicine />}
      </div>
    </article>
  );
};

export default AuthForm;
