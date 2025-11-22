import { useEffect, useRef } from "react";
import "./ECGChart.css";

const ECGChart = ({ bpm = 60 }) => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  }, []);

  const duration = (60 / bpm) * 6;

  return (
    <svg
      viewBox="0 0 130 75"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ecg-svg"
    >
      <path
        ref={pathRef}
        id="ecg-path"
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
          from="460"
          to="0"
          dur={60 / bpm}
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default ECGChart;
