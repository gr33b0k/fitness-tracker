import { useEffect, useRef } from "react";

const ECGChart = ({ bpm = 60 }) => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  }, []);
  return (
    <svg
      viewBox="0 0 130 75"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      height="100%"
      width="100%"
    >
      <path
        ref={pathRef}
        d="M0 50
        L50 50 L60 10
        A1 1 0 0 1 62 10
        L70 70
        A1 1 0 0 0 72 70
        L80 50 L130 50"
        stroke="#FEF180"
        strokeWidth={3}
        fill="none"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="230"
          to="0"
          dur={60 / bpm}
          fill="freeze"
        />
      </path>
    </svg>
  );
};

export default ECGChart;
