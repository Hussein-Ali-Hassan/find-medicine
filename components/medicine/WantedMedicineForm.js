import { useState, useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import MedicineContext from "@/context/MedicineContext";
import TextField from "@/components/form-elements/TextField";
import SelectField from "@/components/form-elements/SelectField";
import ImageUpload from "@/components/form-elements/ImageUpload";

const AddMedicine = () => {
  const { submitWantedMedicine } = useContext(MedicineContext);
  const [image, setImage] = useState(null);

  const validate = Yup.object({
    name: Yup.string().required("الاسم مطلوب"),
    city: Yup.string().required("العنوان مطلوب"),
    disease: Yup.string().required("المرض مطلوب"),
    contact: Yup.number()
      .positive()
      .required("الرقم للتواصل مطلوب (باللغة الانكليزية)"),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        city: "",
        disease: "",
        contact: "",
      }}
      validationSchema={validate}
      onSubmit={({ name, city, contact, disease }) => {
        submitWantedMedicine({ name, city, contact, disease, image });
      }}
    >
      {({ isValid }) => (
        <div>
          <Form>
            <ImageUpload setImage={setImage} />
            <TextField label="إسم الدواء المطلوب" name="name" type="text" />
            <TextField label="المرض" name="disease" type="text" />
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
                إرسال الطلب
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
