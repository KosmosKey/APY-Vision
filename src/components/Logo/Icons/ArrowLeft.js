import React from "react";

const ArrowLeft = ({ fill, ...rest }) => {
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
        d="M5.41424 7H14V9H5.41424L8.70714 12.2929L7.29292 13.7071L1.58582 8L7.29292 2.29289L8.70714 3.70711L5.41424 7Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowLeft;
