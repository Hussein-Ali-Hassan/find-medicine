import { FaWhatsapp, FaSms, FaPhoneAlt } from "react-icons/fa";

const MedicineModal = ({
  medicine: { id, name, city, contact, image, expiryDate },
}) => {
  const modalBody = (
    <div className="modal-body">
      <img
        src={image ? image : "/medicine.jpeg"}
        alt={"img" + name}
        height="320"
        className="d-block w-100 object-fit"
      />
      <div className="my-3">
        {/* <p>
          تاريخ الطلب: <strong>{addedAt}</strong>
        </p> */}
        <p>
          اسم الدواء: <strong>{name}</strong>
        </p>
        <p>
          المنطقة: <strong>{city}</strong>
        </p>

        {expiryDate && (
          <p>
            تاريخ انتهاء صلاحية الدواء: <strong>{expiryDate}</strong>
          </p>
        )}
      </div>

      <div className="d-flex align-items-center mb-3">
        <strong className="ms-4">للتواصل: </strong>
        <div className="d-flex flex-column mx-3">
          <a
            className="fs-3 mx-3 text-success"
            href={`https://api.whatsapp.com/send?phone=961${contact}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
          <strong>واتس اب</strong>
        </div>
        <div className="d-flex flex-column mx-3">
          <a
            className="fs-3 mx-3 text-warning"
            href={`sms:+961${contact}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaSms />
          </a>
          <strong>رسالة SMS</strong>
        </div>
        <div className="d-flex flex-column mx-3">
          <a
            className="fs-3 mx-3 text-primary"
            href={`tel:+961${contact}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaPhoneAlt />
          </a>
          <strong>مكالمة</strong>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="modal fade "
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      id={`s-${contact}`}
      // @ts-ignore
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-fullscreen-md-down">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          {modalBody}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary text-white"
              data-bs-dismiss="modal"
            >
              إغلاق
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineModal;
