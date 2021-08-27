import MedicineModal from "./MedicineModal";

const Medicine = ({ medicine }) => {
  const { name, contact, city, image } = medicine;
  return (
    <div className="productItem-container">
      <img
        className="productItem-image"
        src={image ? image : "/medicine.jpeg"}
        alt={"img-" + name}
      />
      <div className="productItem-details-container">
        <span className="productItem-name">
          اسم الدواء: <strong>{name}</strong>
        </span>
        <span className="productItem-name">
          المنطقة: <strong> {city}</strong>
        </span>
        <button
          className="btn btn-primary text-white"
          data-bs-toggle="modal"
          data-bs-target={`#s-${contact}`}
        >
          التفاصيل
        </button>

        <MedicineModal medicine={medicine} />
      </div>
    </div>
  );
};

export default Medicine;
