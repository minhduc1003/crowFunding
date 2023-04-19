import React from "react";
import { ImageBB } from "../../api/config";
import axios from "axios";

const ImageUpload = ({ onChange = () => {}, name }) => {
  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    const response = await axios({
      method: "post",
      url: ImageBB,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const imageObj = {
      thumb: response.data.data.thumb.url,
      url: response.data.data.url,
    };
    onChange(name, imageObj);
  };
  return (
    <label
      className="h-[250px] border border-solid border-text3 text-text3 flex justify-center items-center rounded-xl
    "
    >
      <input
        type="file"
        className="hidden"
        onChange={handleUploadImage}
      ></input>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
      </span>
    </label>
  );
};

export default ImageUpload;
