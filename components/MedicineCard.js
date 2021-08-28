import React from "react";

export default function MedicineCard({ medicine }) {
  const { name, disease, city, contact, image, expiryDate, addedAt } = medicine;

  return (
    <div className="card my-3" style={{ width: "18rem" }}>
      <img
        src={image ? image : "/medicine.jpeg"}
        className="card-img-top"
        alt={"img" + name}
      />
      <div className="card-body">
        {addedAt && (
          <p className="card-text">
            <strong>تاريخ الطلب: </strong> {addedAt}
          </p>
        )}
        <p className="card-text">
          <strong> الدواء: </strong> {name}
        </p>
        {disease && (
          <p className="card-text">
            <strong>المرض: </strong> {disease}
          </p>
        )}
        {expiryDate && (
          <p className="card-text">
            {" "}
            <strong>تاريخ انتهاء الصلاحية:</strong> {expiryDate}
          </p>
        )}
        <p className="card-text">
          <strong>المنطقة:</strong> {city}
        </p>
      </div>
      <div className="card-footer">
        للتواصل:{" "}
        <a
          className="mx-2 text-success"
          href={`https://api.whatsapp.com/send?phone=961${contact}`}
          target="_blank"
          rel="noreferrer"
        >
          <strong>واتس اب</strong>
        </a>
        <a
          className="mx-2 text-warning"
          href={`sms:+961${contact}`}
          target="_blank"
          rel="noreferrer"
        >
          <strong>SMS</strong>
        </a>
        <a
          className="mx-2 text-primary"
          href={`tel:+961${contact}`}
          target="_blank"
          rel="noreferrer"
        >
          <strong>اتصال</strong>
        </a>
      </div>
    </div>
  );
}
