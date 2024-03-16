import React, { useState } from "react";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Fade from "./animation/Fade";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const FileUpload = () => {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setResult(null); // Reset result when a new file is selected
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("No file selected for upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const authToken = Cookies.get("auth");
      const response = await axios.post(
        "http://127.0.0.1:8000/classification/classify/",
        formData,
        {
          headers: {
            'Authorization': `Token ${authToken}`,
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        const uploadedImageUrl = URL.createObjectURL(selectedFile);
        setResult({ ...data, uploadedImageUrl });
        navigate("/riceLeafInfo", {
          state: { result: { ...data, uploadedImageUrl } },
        });
      } else {
        toast.error("Failed to upload file.");
      }
    } catch (error) {
      toast.error(error.response.data.error);
      //clearing file when this error occurs
      setSelectedFile(null);
      setResult(null);
    }
  };
  return (
      <div className="text-center pb-28">
        <Title title="Heal Your Crop" />
        <Fade direction="up" delay={0.2}>
          <div className="max-w-md mx-auto p-8 bg-cyan-300 bg-opacity-30 rounded-md  mt-16">
            <h2 className="text-2xl text-white font-bold mb-6">File Upload</h2>
            <label className="block mb-4">
              <span className="text-white">Select File:</span>
              <input
                type="file"
                onChange={handleFileChange}
                className="mt-2 p-2 border border-white text-white rounded-md"
              />
            </label>
            {selectedFile && (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="image"
                className="w-52 h-52 ms-auto me-auto my-4"
              />
            )}
            <button
              onClick={handleUpload}
              className="text-white border border-white hover:bg-white hover:text-[#05202A] py-2 px-8 rounded-md focus:outline-none focus:shadow-outline-blue"
            >
              Diagnose
            </button>
          </div>
        </Fade>
      </div>
  );
};

export default FileUpload;
