import { useState } from "react";
import { FaCamera } from "react-icons/fa";

export default function ImageUpload({ setImage }) {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const uploadedImage = e.target.files[0];
    if (uploadedImage !== undefined) {
      setImage(uploadedImage);

      const fileReader = new FileReader();
      fileReader.onload = () => {
        setImagePreview(fileReader.result);
      };
      fileReader.readAsDataURL(uploadedImage);
    }
  };
  return (
    <>
      <label className="mb-1">صورة الدواء</label>
      <div className="image-upload">
        <label htmlFor="image">{!imagePreview && <FaCamera />}</label>
        {imagePreview && (
          <img
            src={imagePreview}
            alt="medicine-image"
            width="100"
            height="100"
            className="object-fit"
          />
        )}
        <input
          name="image"
          id="image"
          type="file"
          accept="image/gif, image/jpeg, image/png"
          onChange={handleImageUpload}
          style={{ display: "none" }}
          disabled={imagePreview}
        />
      </div>
    </>
  );
}
