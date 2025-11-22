import {
  Area,
  AreaChart,
  XAxis,
  CartesianGrid,
  YAxis,
  Tooltip,
} from "recharts";

const StepsChart = ({ stepsData, onHoverValue }) => {
  const handleTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const pl = payload[0].payload;
      const value = pl.value;
      const valueDay = pl.day;
      // const yesterdayValue = stepsData.filter(
      //   (day) => day.day + 1 === valueDay
      // )[0].value;

      onHoverValue(value);
    } else {
      onHoverValue(null);
    }
    return null;
  };

  return (
    <AreaChart
      style={{ width: "100%", aspectRatio: 1.3 }}
      accessibilityLayer={false}
      responsive
      data={stepsData}
      baseValue="dataMin"
      margin={{ top: 0, bottom: 0, left: 10, right: 10 }}
    >
      <CartesianGrid strokeDasharray="4 4" horizontal={false} />
      <XAxis
        axisLine={false}
        tickLine={false}
        padding="gap"
        dataKey="day"
        tick={{ fill: "#7e8189", fontSize: ".9rem" }}
      />
      <YAxis type="number" domain={["dataMin - 2000", "dataMax + 2000"]} hide />

      <Area
        type="monotone"
        dataKey="value"
        stroke="#daf17d"
        fill="transparent"
        strokeWidth={4}
        activeDot={{
          stroke: "#daf17d",
          strokeWidth: 3,
          fill: "#ffffff",
          r: 6,
        }}
      />

      <Tooltip content={handleTooltip} cursor={false} />
    </AreaChart>
  );
};

export default StepsChart;
