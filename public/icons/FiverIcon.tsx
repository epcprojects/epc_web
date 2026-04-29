import React from "react";

const FiverIcon = ({ fill = "black",width="20",height="21" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.029 6.10837H6.993V5.38517C6.993 3.96487 8.413 3.93797 9.136 3.93797C9.966 3.93797 10.342 4.01877 10.342 4.01877V0.106872C9.75599 0.0337723 9.165 -0.0018278 8.57401 7.21999e-05C6.27001 7.21999e-05 2.00999 0.642471 2.00999 5.51887V6.13887H0V9.75547H2.00999V17.3908H0.134995V21.0075H9.188V17.3872H6.991V9.75197H13.016V17.3872H11.143V21.0039H19.905V17.3872H18.029V6.10837Z"
        fill={fill}
      />
    </svg>
  );
};

export default FiverIcon;
