import React, { useState } from "react";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FileUpload = () => {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Perform upload logic here (e.g., send the file to a server)
    if (selectedFile) {
      console.log(`Uploading file: ${selectedFile.name}`);
      // Add your upload logic here, such as using Axios or the Fetch API
      navigate("/riceLeafInfo");
    } else {
      console.error("No file selected for upload.");
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
