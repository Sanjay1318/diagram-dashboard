import React, { useState } from "react";
import "./DiagramViewer.css";

const MIN_ZOOM = 0.3;
const MAX_ZOOM = 3;
const STEP = 0.2;

const DiagramViewer = ({ image, onReplace, selectedComponent }) => {
  const [zoom, setZoom] = useState(1);

  const zoomIn = () => setZoom((z) => Math.min(z + STEP, MAX_ZOOM));
  const zoomOut = () => setZoom((z) => Math.max(z - STEP, MIN_ZOOM));
  const reset = () => setZoom(1);

  if (!image) {
    return (
      <div className="viewer-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        <p>No diagram uploaded yet</p>
        <span className="viewer-empty-hint">Upload a diagram to get started</span>
      </div>
    );
  }

  return (
    <div className="viewer-root">
      <div className="viewer-toolbar">
        <div className="file-chip">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
            <polyline points="13 2 13 9 20 9"/>
          </svg>
          <span>{image.name}</span>
        </div>
        <div className="zoom-controls">
          <button onClick={zoomOut} disabled={zoom <= MIN_ZOOM} title="Zoom Out">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
          </button>
          <span className="zoom-label">{Math.round(zoom * 100)}%</span>
          <button onClick={zoomIn} disabled={zoom >= MAX_ZOOM} title="Zoom In">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
          </button>
          <button onClick={reset} title="Reset View" className="reset-btn">Reset</button>
          <button onClick={onReplace} title="Replace Image" className="replace-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.95"/>
            </svg>
            Replace
          </button>
        </div>
      </div>

      <div className="viewer-canvas">
        {/* Zoomable wrapper with overlay */}
        <div
          className="viewer-zoom-wrapper"
          style={{ transform: `scale(${zoom})`, transformOrigin: "center center" }}
        >
          <img
            src={image.url}
            alt="Uploaded diagram"
            draggable={false}
          />

          {/* Highlight overlay: shown when a component is selected */}
          {selectedComponent && selectedComponent.position && (
            <div
              className="component-highlight"
              style={{
                left: `${selectedComponent.position.x}%`,
                top: `${selectedComponent.position.y}%`,
              }}
              key={selectedComponent.id}
            >
              <div className="highlight-ring" />
              <div className="highlight-pulse" />
              <div className="highlight-label">
                <span className="highlight-symbol">{selectedComponent.symbol}</span>
                <span className="highlight-name">{selectedComponent.name}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom hint bar */}
      {selectedComponent && (
        <div className="viewer-selected-bar">
          <span className="vsb-dot" />
          <span>
            Highlighting <strong>{selectedComponent.name}</strong> — {selectedComponent.description}
          </span>
        </div>
      )}
    </div>
  );
};

export default DiagramViewer;
