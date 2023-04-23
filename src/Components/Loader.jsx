import React from "react";

export default function Loader() {
  return (
    <div
      className="spinner-grow text-warning"
      style={{ width: "3rem", height: "3rem" }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
