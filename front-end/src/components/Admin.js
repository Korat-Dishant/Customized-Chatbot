import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Link } from "react-router-dom";
const fileTypes = ["JPEG", "PNG", "GIF"];

const Admin = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="absolute top-0 left-0 text-xl m-6 px-6 py-3 cursor-pointer border-black border rounded-md hover:bg-[#e8e8e8]">
        <Link to="/">Go Back</Link>
      </div>
      <div>
        <FileUploader
          multiple={true}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
        <p>{file ? `File name: ${file[0].name}` : "No files uploaded yet"}</p>
      </div>
    </div>
  );
};

export default Admin;
