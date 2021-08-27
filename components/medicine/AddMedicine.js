import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextField from "@/components/form/TextField";
import SelectField from "@/components/form/SelectField";
import ImageUpload from "@/components/form/ImageUpload";
import Spinner from "../Spinner";
import firebase from "../../config/firebase";

const AddMedicine = ({ setLoading }) => {
  const [image, setImage] = useState(null);

  const validate = Yup.object({
    name: Yup.string().required("الاسم مطلوب"),
    city: Yup.string().required("العنوان مطلوب"),
    expiryDate: Yup.date().required("تاريخ انتهاء الصلاحية مطلوب"),
    contact: Yup.number()
      .positive()
      .required("الرقم للتواصل مطلوب (باللغة الانكليزية)"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        expiryDate: "",
        city: "",
        contact: "",
      }}
      validationSchema={validate}
      onSubmit={({ name, expiryDate, city, contact }) => {
        setLoading(true);
        firebase
          .firestore()
          .collection("availableMedicines")
          .add({
            name,
            expiryDate,
            city,
            contact,
          })
          .then(() => setLoading(false))
          .catch((err) => alert(err.message));
      }}
    >
      {({ isValid }) => (
        <div>
          <Form>
            <ImageUpload setImage={setImage} />
            <TextField label="إسم الدواء" name="name" type="text" />
            <TextField
              label="تاريخ انتهاء الصلاحية"
              name="expiryDate"
              type="date"
            />

            <SelectField label="العنوان" name="city" />
            <TextField
              label="رقم للتواصل (دون رمز البلد)"
              name="contact"
              type="number"
            />

            <div className="text-center">
              <button
                className="btn btn-primary text-white mt-3"
                type="submit"
                disabled={!isValid}
              >
                إضافة الدواء
              </button>
              <button className="btn btn-danger mt-3 me-3" type="reset">
                حذف
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default AddMedicine;
