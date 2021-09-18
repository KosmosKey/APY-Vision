import React from "react";

const ArrowRight = ({ fill, ...rest }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5858 9H2V7H10.5858L7.29289 3.70711L8.70711 2.29289L14.4142 8L8.70711 13.7071L7.29289 12.2929L10.5858 9Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowRight;
