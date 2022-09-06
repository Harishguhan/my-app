import React from "react";

const LazyLoad = () => {
  return (
    <div className="d-flex justify-content-center vh-100 align-items-center">
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LazyLoad;
