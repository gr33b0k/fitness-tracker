import {
  ResponsiveContainer,
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
      onHoverValue(value);
    } else {
      onHoverValue(null);
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" aspect={1.5}>
      <AreaChart
        accessibilityLayer={false}
        responsive
        data={stepsData}
        baseValue="dataMin"
        margin={{ top: 0, bottom: 0, left: 10, right: 10 }}
      >
        <CartesianGrid horizontal={false} />
        <XAxis
          axisLine={false}
          tickLine={false}
          padding="gap"
          dataKey="day"
          tick={{ fill: "#7e8189", fontSize: ".9rem" }}
        />
        <YAxis
          type="number"
          domain={["dataMin - 1000", "dataMax + 1000"]}
          hide
        />

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
    </ResponsiveContainer>
  );
};

export default StepsChart;
