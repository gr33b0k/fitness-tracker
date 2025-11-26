import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  Rectangle,
} from "recharts";
import ActivityTooltip from "./ActivityTooltip";

const ActivityChart = ({ data, goal, fill }) => {
  const handleTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const pl = payload[0].payload;
      const value = pl.burntCalories;
      const date = new Date(pl.date);

      const goalPercentage = Math.ceil((value / goal) * 100);

      const weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const weekday = weekDays[date.getDay()];
      return (
        <ActivityTooltip
          weekday={weekday}
          percentage={goalPercentage}
          calorieBurnt={value}
        />
      );
    } else {
      return null;
    }
  };

  const chartData = data.map((item) => {
    const date = new Date(item.date);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    return {
      date: date,
      formatedDate: formattedDate,
      burntCalories: item.burntCalories,
    };
  });

  return (
    <ResponsiveContainer width="100%" aspect={2.5}>
      <BarChart responsive accessibilityLayer={false} data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="formatedDate" axisLine={false} />
        <YAxis width="auto" axisLine={false} tickLine={false} />
        <Tooltip content={handleTooltip} cursor={false} />
        <Bar
          dataKey="burntCalories"
          fill={fill}
          barSize={45}
          radius={[100, 100, 0, 0]}
          activeBar={<Rectangle fill="#fef180" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;
