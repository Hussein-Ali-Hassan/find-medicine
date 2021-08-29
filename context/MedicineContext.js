import { createContext, useState } from "react";
import firebase from "../config/firebase";

const MedicineContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const submitWantedMedicine = ({ name, city, disease, contact, image }) => {
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
  };

  const submitAvailabelMedicine = ({
    name,
    city,
    disease,
    contact,
    expiryDate,
    image,
  }) => {
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
            .collection("availableMedicines")
            .add({
              name,
              city,
              disease,
              contact,
              addedAt,
              expiryDate,
              image: url,
            })
            .then(() => {
              setLoading(false);
              alert("تم ارسال الدواء! شكرا لمساهمتكم");
              window.location = "/give";
            })
            .catch((err) => alert(err.message));
        }
      );
    } else {
      firebase
        .firestore()
        .collection("availableMedicines")
        .add({
          name,
          city,
          disease,
          contact,
          addedAt,
          expiryDate,
        })
        .then(() => {
          setLoading(false);
          alert("تم ارسال الدواء! شكرا لمساهمتكم");
          window.location = "/give";
        })
        .catch((err) => alert(err.message));
    }
  };

  return (
    <MedicineContext.Provider
      value={{ loading, submitWantedMedicine, submitAvailabelMedicine }}
    >
      {children}
    </MedicineContext.Provider>
  );
};

export default MedicineContext;
