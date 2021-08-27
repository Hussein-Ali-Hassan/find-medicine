import MedicineForm from "@/components/medicine/MedicineForm";
import Navbar from "@/components/Navbar";

export default function Add() {
  return (
    <>
      <Navbar currentPage="add" />
      <MedicineForm />
    </>
  );
}
