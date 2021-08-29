import { createContext, useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

import firebase from "../config/firebase";

const MedicineContext = createContext();

const addedAt = new Date().toLocaleDateString();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const submitWantedMedicine = ({ name, city, disease, contact, image }) => {
    setLoading(true);
    const data = {
      name,
      city,
      disease,
      contact,
      addedAt,
    };

    if (image) {
      const storageRef = firebase.storage().ref(image.name);

      storageRef.put(image).on(
        "state_changed",
        (snap) => {},
        (err) => {
          toast.error("عذرا حصل خطأ, الرجاء إعادة المحاولة");
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          data.image = url;

          sendToFirestore(
            "wantedMedicines",
            data,
            "تم ارسال طلبكم! نأمل أن تجدوا طلبكم",
            "/"
          );
        }
      );
    } else sendToFirestore("wantedMedicines", data, "تم ارسال طلبكم!", "/");
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
    const data = {
      name,
      city,
      disease,
      contact,
      expiryDate,
      addedAt,
    };

    if (image) {
      const storageRef = firebase.storage().ref(image.name);

      storageRef.put(image).on(
        "state_changed",
        (snap) => {},
        (err) => {
          toast.error("عذرا حصل خطأ, الرجاء إعادة المحاولة");
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          data.image = url;

          sendToFirestore(
            "availableMedicines",
            data,
            "تم ارسال الدواء! شكرا لمساهمتكم",
            "/give"
          );
        }
      );
    } else
      sendToFirestore(
        "availableMedicines",
        data,
        "تم ارسال الدواء! شكرا لمساهمتكم",
        "/give"
      );
  };

  function sendToFirestore(collectionName, data, responseMessage, destination) {
    firebase
      .firestore()
      .collection(collectionName)
      .add(data)
      .then(() => {
        setLoading(false);
        toast.success(responseMessage);
        router.push(destination);
      })
      .catch((err) => toast.error("عذرا حصل خطأ, الرجاء إعادة المحاولة"));
  }

  return (
    <MedicineContext.Provider
      value={{ loading, submitWantedMedicine, submitAvailabelMedicine }}
    >
      {children}
    </MedicineContext.Provider>
  );
};

export default MedicineContext;
