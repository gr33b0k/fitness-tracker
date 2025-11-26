import { ResponsiveContainer, RadialBarChart, RadialBar, Cell } from "recharts";

const RadialChart = ({ data, nameKey, dataKey, maxDataKey }) => {
  const chartData = [
    {
      name: "hidden",
      value: 100,
    },
    ...data.map((item) => ({
      name: item[nameKey],
      value: (item[dataKey] / item[maxDataKey]) * 100,
      fill: item.fill,
    })),
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        width="100%"
        height="100%"
        innerRadius="10%"
        outerRadius="100%"
        barSize={15}
        accessibilityLayer={false}
        cx="50%"
        cy="50%"
        data={chartData}
        startAngle={90}
        endAngle={-270}
      >
        <RadialBar background dataKey={"value"} cornerRadius={10}>
          {chartData.map((item, index) => (
            <Cell
              key={`roundedCell-${index}`}
              fill={item.fill}
              display={item.name === "hidden" ? "none" : ""}
            />
          ))}
        </RadialBar>
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RadialChart;
