# Diagram Dashboard

A React-based dashboard for uploading and viewing circuit diagrams with a components panel.

## Features

- **Upload Diagram** — drag & drop or click to upload PNG/JPG images
- **Diagram Viewer** — zoom in/out, reset view, replace image
- **Components List** — sidebar with mock API data, click to highlight/select
- **Responsive Layout** — two-column on desktop/tablet, stacked on mobile

## Tech Stack

- React 18 (functional components + hooks)
- CSS Modules (no external UI library)
- Google Fonts (Syne + DM Sans)

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── components/
│   ├── UploadBox/         # Drag & drop file upload
│   ├── DiagramViewer/     # Image viewer with zoom controls
│   └── ComponentList/     # Sidebar component list panel
├── pages/
│   └── Dashboard/         # Main dashboard layout
├── services/
│   └── api.js             # Mock API for components data
├── App.jsx
├── index.js
└── index.css              # Global styles & CSS variables
```

## Usage

1. Click or drag an image onto the upload area
2. Use Zoom In / Zoom Out / Reset to navigate the diagram
3. Click any component in the right panel to select/highlight it
4. Click "Replace" or "Upload New" to swap the diagram
