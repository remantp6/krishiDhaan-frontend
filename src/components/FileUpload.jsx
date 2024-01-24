import React, { useState } from "react";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FileUpload = () => {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setResult(null); // Reset result when a new file is selected
    // console.log(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      // console.error("No file selected for upload.");
      alert("No file selected for upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/classification/classify/",
        formData
      );

      if (response.status === 200) {
        const data = response.data;
        // setResult(data);
        //navigate("/riceLeafInfo", { state: { result: data } }); // Navigate to the next page if needed
        const uploadedImageUrl = URL.createObjectURL(selectedFile);
        setResult({ ...data, uploadedImageUrl });
        navigate("/riceLeafInfo", {
          state: { result: { ...data, uploadedImageUrl } },
        });
      } else {
        console.error("Failed to upload file.");
      }
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };
  return (
    <>
      <div className="text-center pb-28">
        <Title title="Heal Your Crop" />
        <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md mt-12">
          <h2 className="text-2xl font-bold mb-6">File Upload</h2>
          <label className="block mb-4">
            <span className="text-gray-700">Select File:</span>
            <input
              type="file"
              onChange={handleFileChange}
              className="mt-2 p-2 border border-gray-300 rounded-md"
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
            className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:shadow-outline-blue"
          >
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
