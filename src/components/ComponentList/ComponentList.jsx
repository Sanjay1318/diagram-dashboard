import React from "react";
import "./ComponentList.css";

const ComponentList = ({ components, selected, onSelect, loading }) => {
  if (loading) {
    return (
      <div className="comp-panel">
        <div className="comp-panel-header">
          <h2>Components</h2>
        </div>
        <div className="comp-loading">
          {[1,2,3,4].map(i => (
            <div key={i} className="skeleton-item" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="comp-panel">
      <div className="comp-panel-header">
        <h2>Components</h2>
        <span className="comp-count">{components.length}</span>
      </div>
      <ul className="comp-list">
        {components.map((comp) => (
          <li
            key={comp.id}
            className={`comp-item ${selected?.id === comp.id ? "selected" : ""}`}
            onClick={() => onSelect(comp)}
          >
            <div className="comp-symbol">{comp.symbol}</div>
            <div className="comp-info">
              <span className="comp-name">{comp.name}</span>
              <span className="comp-desc">{comp.description}</span>
            </div>
            {selected?.id === comp.id && (
              <div className="comp-check">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            )}
          </li>
        ))}
      </ul>
      {selected && (
        <div className="comp-detail">
          <p className="detail-label">Selected</p>
          <p className="detail-name">{selected.name} <span>{selected.symbol}</span></p>
          <p className="detail-desc">{selected.description}</p>
        </div>
      )}
    </div>
  );
};

export default ComponentList;
