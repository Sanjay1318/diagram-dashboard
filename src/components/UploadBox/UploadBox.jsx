import React, { useRef, useState } from "react";
import "./UploadBox.css";

const UploadBox = ({ onUpload }) => {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (file) => {
    if (!file) return;
    if (!["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
      alert("Only PNG/JPG images are supported.");
      return;
    }
    const url = URL.createObjectURL(file);
    onUpload({ name: file.name, url });
  };

  const handleChange = (e) => handleFile(e.target.files[0]);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <div
      className={`upload-box ${dragging ? "dragging" : ""}`}
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current.click()}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <div className="upload-icon">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
      </div>
      <p className="upload-primary">Drop diagram here or <span>browse</span></p>
      <p className="upload-secondary">Supports PNG &amp; JPG</p>
    </div>
  );
};

export default UploadBox;
