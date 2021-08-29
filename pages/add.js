import MedicineForm from "@/components/medicine/CombinedMedicineForm";
import Navbar from "@/components/layout/Navbar";

export default function Add() {
  return (
    <>
      <Navbar currentPage="add" />
      <MedicineForm />
    </>
  );
}
