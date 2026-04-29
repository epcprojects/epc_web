import React from "react";

const PolygonIcon = ({ fill = "#4939D2" }) => {
  return (
    <svg
      width="11"
      height="12"
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 2.96104L5.2987 0L10.5974 2.96104V9.19481L5.2987 12L0 9.19481V2.96104Z"
        fill={fill}
      />
    </svg>
  );
};

export default PolygonIcon;
