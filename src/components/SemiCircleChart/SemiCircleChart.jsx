import "./SemiCircleChart.css";

const SemiCircleChart = ({
  strokeWidth,
  strokeColor,
  showPercentage = false,
  percentage,
  percentageSeperator,
  fontStyle,
  hasBackground = false,
  bgStrokeColor,
  showNeedle = false,
  className,
}) => {
  const validatedPercentage =
    percentage < 0 ? 0 : percentage > 100 ? 100 : percentage;
  const radius = 50 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const half = circumference / 2;
  const strokeDashoffset = half - (validatedPercentage / 100) * half;

  return (
    <svg
      viewBox="0 0 100 60"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"chart " + className}
    >
      <defs>
        <clipPath id="half">
          <rect x="0" y="0" width="100" height="50" />
        </clipPath>
      </defs>
      {hasBackground && (
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke={bgStrokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          clipPath="url(#half)"
        />
      )}
      <circle
        className="chart__progress"
        cx="50"
        cy="50"
        r={radius}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="none"
        clipPath="url(#half)"
        strokeDasharray={`${circumference} ${half}`}
        strokeDashoffset={strokeDashoffset}
      >
        <animate
          attributeName="stroke-dashoffset"
          from="138"
          to={strokeDashoffset}
          dur="1s"
          fill="freeze"
        />
      </circle>
      {showNeedle && (
        <>
          <circle
            cx="50"
            cy="50"
            r={radius - 10}
            stroke="#ebebeb"
            strokeWidth={1}
            fill="none"
            clipPath="url(#half)"
          />
          <path
            d="M50 58 A1 1 0 0 0 50 42 L20 49 A1 1 0 0 0 20 51 Z M50 46 m 0 0 a 4 4 0 1 0 1 0"
            fill={strokeColor}
            fill-rule="evenodd"
            className="needle"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 50 50"
              to={`${(validatedPercentage / 100) * 180} 50 50`}
              dur="1s"
              fill="freeze"
            />
          </path>
        </>
      )}

      {showPercentage && (
        <text
          x="52%"
          y="60%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="20"
          fontFamily="Arial"
          fill="#04001b"
          style={{
            ...fontStyle,
          }}
        >
          {validatedPercentage}
          {percentageSeperator || "%"}
        </text>
      )}
    </svg>
  );
};

export default SemiCircleChart;
