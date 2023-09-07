import React from 'react';

interface IProps {
  containerClass: string;
}

const IconDiagonalUp = ({ containerClass }: IProps) => {
  return (
    <svg
      height="50"
      width="50"
      version="1.1"
      id="diagonal_up_icon"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 50 50"
      xmlSpace="preserve"
      className={containerClass}
    >
      <g>
        <path
          fill="#fdfdfd"
          d="M50.026,47.043V0H2.983C1.337,0,0,1.337,0,2.983s1.337,2.983,2.983,2.983h36.857L2.679,43.129
			c-1.164,1.164-1.164,3.055,0,4.219c0.585,0.585,1.349,0.871,2.112,0.871s1.528-0.292,2.112-0.871l37.162-37.168v36.857
			c0,1.647,1.337,2.983,2.983,2.983C48.69,50.026,50.026,48.69,50.026,47.043z"
        />
      </g>
    </svg>
  );
};

export default IconDiagonalUp;
