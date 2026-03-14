import React, { useState, useEffect } from "react";
import UploadBox from "../../components/UploadBox/UploadBox";
import DiagramViewer from "../../components/DiagramViewer/DiagramViewer";
import ComponentList from "../../components/ComponentList/ComponentList";
import { fetchComponents } from "../../services/api";
import "./Dashboard.css";

const Dashboard = () => {
  const [image, setImage] = useState(null);
  const [components, setComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComponents().then((data) => {
      setComponents(data);
      setLoading(false);
    });
  }, []);

  const handleUpload = (file) => setImage(file);
  const handleReplace = () => setImage(null);

  return (
    <div className="dashboard">
      <header className="dash-header">
        <div className="dash-logo">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="3" width="20" height="14" rx="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
          <span>DiagramBoard</span>
        </div>
        <div className="dash-meta">
          {image && <span className="status-badge active">● Diagram Loaded</span>}
          {!image && <span className="status-badge">○ No Diagram</span>}
        </div>
      </header>

      <main className="dash-main">
        {/* Upload Section */}
        <section className="upload-section">
          {!image ? (
            <UploadBox onUpload={handleUpload} />
          ) : (
            <div className="uploaded-banner">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                <polyline points="13 2 13 9 20 9"/>
              </svg>
              <span><strong>{image.name}</strong> — ready to view</span>
              <button onClick={handleReplace} className="upload-new-btn">Upload New</button>
            </div>
          )}
        </section>

        {/* Two-column layout */}
        <section className="content-grid">
          <div className="col-viewer">
            <DiagramViewer image={image} onReplace={handleReplace} selectedComponent={selectedComponent} />
          </div>
          <div className="col-components">
            <ComponentList
              components={components}
              selected={selectedComponent}
              onSelect={setSelectedComponent}
              loading={loading}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
