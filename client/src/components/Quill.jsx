import React, { useMemo, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import ImageUploader from "quill-image-uploader";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { ImageBB } from "../api/config";
Quill.register("modules/imageUploader", ImageUploader);

const QuillLable = ({ name, placeholder, label, setValue, value }) => {
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline"],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" },
        ],
        ["link", "image"],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ],
      imageUploader: {
        upload: async (file) => {
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
          return response.data.data.url;
        },
      },
    }),
    []
  );
  return (
    <div>
      <label
        htmlFor={name}
        className="mt-5  text-text2 text-sm block  font-bold "
      >
        {label}
      </label>
      <ReactQuill
        placeholder={placeholder}
        modules={modules}
        theme="snow"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default QuillLable;
