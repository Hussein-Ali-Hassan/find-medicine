import MedicineForm from "@/components/medicine/CombinedMedicineForm";
import Navbar from "@/components/layout/Navbar";

export default function Add() {
  return (
    <>
      <Navbar currentPage="add" />
      <h1 className="text-center bg-light p-3 py-4">طلب أو تقديم دواء</h1>
      <MedicineForm />
    </>
  );
}
