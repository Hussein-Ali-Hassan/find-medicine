import { useState, useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import MedicineContext from "@/context/MedicineContext";
import TextField from "@/components/form-elements/TextField";
import SelectField from "@/components/form-elements/SelectField";
import ImageUpload from "@/components/form-elements/ImageUpload";

const AddMedicine = () => {
  const { submitAvailabelMedicine } = useContext(MedicineContext);
  const [image, setImage] = useState(null);

  const validate = Yup.object({
    name: Yup.string().required("الاسم مطلوب"),
    city: Yup.string().required("العنوان مطلوب"),
    disease: Yup.string().required("المرض مطلوب"),
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
        disease: "",
        contact: "",
      }}
      validationSchema={validate}
      onSubmit={({ name, expiryDate, city, contact, disease }) => {
        submitAvailabelMedicine({
          name,
          expiryDate,
          city,
          contact,
          disease,
          image,
        });
      }}
    >
      {({ isValid }) => (
        <div>
          <Form>
            <ImageUpload setImage={setImage} />
            <TextField label="إسم الدواء المتوفر" name="name" type="text" />
            <TextField label="المرض" name="disease" type="text" />
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
