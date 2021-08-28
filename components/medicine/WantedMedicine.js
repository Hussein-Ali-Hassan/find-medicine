import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextField from "@/components/form/TextField";
import SelectField from "@/components/form/SelectField";
import ImageUpload from "@/components/form/ImageUpload";
import firebase from "../../config/firebase";

const AddMedicine = ({ setLoading }) => {
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
        setLoading(true);
        const addedAt = new Date().toLocaleDateString();

        if (image) {
          const storageRef = firebase.storage().ref(image.name);

          storageRef.put(image).on(
            "state_changed",
            (snap) => {},
            (err) => {
              alert(err.message);
            },
            async () => {
              const url = await storageRef.getDownloadURL();

              firebase
                .firestore()
                .collection("wantedMedicines")
                .add({
                  name,
                  city,
                  disease,
                  contact,
                  addedAt,
                  image: url,
                })
                .then(() => {
                  setLoading(false);
                  alert("تم ارسال طلبكم! نأمل أن تجدوا طلبكم");
                  window.location = "/";
                })
                .catch((err) => alert(err.message));
            }
          );
        } else {
          firebase
            .firestore()
            .collection("wantedMedicines")
            .add({
              name,
              city,
              disease,
              contact,
              addedAt,
            })
            .then(() => {
              setLoading(false);
              alert("تم ارسال طلبكم!");
            })
            .catch((err) => alert(err.message));
        }
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
