import "./ECGChart.css";

const ECGChart = ({ bpm = 60 }) => {
  const duration = 60 / bpm;

  return (
    <svg
      viewBox="0 0 130 75"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ecg-svg"
    >
      <path
        id="ecg-path"
        d="M0 50
        L10 50 L20 10
        A1 1 0 0 1 22 10 
        L30 70 
        A1 1 0 0 0 32 70 
        L40 50 L50 50 L60 10 
        A1 1 0 0 1 62 10 
        L70 70 
        A1 1 0 0 0 72 70 
        L80 50 L90 50 L100 10 
        A1 1 0 0 1 102 10 
        L110 70 
        A1 1 0 0 0 112 70 
        L120 50 L130 50"
        stroke="#FEF180"
        strokeWidth={3}
        strokeLinecap="round"
        fill="none"
      />

      <circle r="5" fill="#FEF180">
        <animateMotion
          dur={`${duration * 5}s`}
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath href="#ecg-path" />
        </animateMotion>
      </circle>

      <circle r="3" fill="#ffffff">
        <animateMotion
          dur={`${duration * 5}s`}
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath href="#ecg-path" />
        </animateMotion>
      </circle>
    </svg>
  );
};

export default ECGChart;
