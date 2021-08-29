import { useState, useContext } from "react";

import MedicineContext from "@/context/MedicineContext";
import Spinner from "@/components/utils/Spinner";
import AddMedicine from "./AvailableMedicineForm";
import WantedMedicine from "./WantedMedicineForm";

const AuthForm = () => {
  const { loading } = useContext(MedicineContext);
  const [formState, setFormState] = useState("wanted");

  if (loading) return <Spinner />;

  return (
    <div className="container">
      {formState === "wanted" ? (
        <strong className="d-block my-4 text-muted">
          قم بتعبئة هذه الخانات لنقوم بعرض الدواء الذي تبحث عنه
        </strong>
      ) : (
        <strong className="d-block my-4 text-muted">
          قم بتعبئة هذه الخانات لنقوم بعرض الدواء المتوفر عندك لمساعدة الناس
        </strong>
      )}
      <article className="medicine-form">
        <div className="d-flex justify-content-between">
          <button
            className={`btn w-100 ms-2 ${
              formState === "wanted" ? "btn-primary text-white" : "btn-light"
            }`}
            onClick={() => setFormState("wanted")}
          >
            أبحث عن دواء
          </button>
          <button
            className={`btn w-100 ${
              formState === "available" ? "btn-primary text-white" : "btn-light"
            }`}
            onClick={() => setFormState("available")}
          >
            {" "}
            تقديم دواء{" "}
          </button>
        </div>
        <div className="py-4 px-3">
          {formState === "wanted" ? <WantedMedicine /> : <AddMedicine />}
        </div>
      </article>
    </div>
  );
};

export default AuthForm;
