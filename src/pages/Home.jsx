import {
  Area,
  AreaChart,
  XAxis,
  CartesianGrid,
  YAxis,
  Tooltip,
} from "recharts";
import { PiFire, PiHeartbeat, PiFootprints } from "react-icons/pi";
import Header from "../components/Header/Header.jsx";
import PageContent from "../components/PageContent/PageContent.jsx";
import Card from "../components/Card/Card.jsx";
import SemiCircleChart from "../components/SemiCircleChart/SemiCircleChart.jsx";
import ECGChart from "../components/ECGChart/ECGChart.jsx";
import { stepsData } from "../data/data.js";

const renderTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const value = data.value;
    const day = data.day;
    // const yesterdayPoint = stepsData.filter((data) => {
    //   console.log(payload);
    //   return data.day === parseInt(payload[0].payload.day) - 1;
    // })[0];
    return (
      <div className="chart__tooltip">
        <h3>{value} steps</h3>
        <p>yesterday yesterdayPoint</p>
      </div>
    );
  }
  return null;
};

const Home = ({ userInfo }) => {
  const userCurrents = userInfo.current;
  const userNorms = userInfo.norms;

  return (
    <>
      <Header
        header={`Hello, ${userInfo.name}`}
        subheader="Welcome and Let's do some workout today!"
        userInfo={userInfo}
      />
      <PageContent>
        <Card colSpan={1} rowSpan={2} title="Calories" titleIcon={<PiFire />}>
          <SemiCircleChart
            className="card__chart card__chart--gauge"
            percentage={
              (userCurrents.calorie_intake / userNorms.calorie_intake) * 100
            }
            showNeedle={true}
            hasBackground={true}
            bgStrokeColor="#f5f5f5"
            strokeWidth={12}
            strokeColor="#CEE8FF"
          />
          <h2 className="card__description">
            <p>
              <span>{userInfo.current.calorie_intake}</span> kcal
            </p>
            <p>
              Remaining:{" "}
              {userInfo.norms.calorie_intake - userInfo.current.calorie_intake}{" "}
              kcal
            </p>
          </h2>
        </Card>
        <Card
          colSpan={1}
          rowSpan={2}
          title="Heart Rate"
          titleIcon={<PiHeartbeat />}
        >
          <ECGChart bpm={110} />
        </Card>
        <Card
          colSpan={1}
          rowSpan={2}
          title="Steps"
          titleIcon={<PiFootprints />}
        >
          <AreaChart
            style={{
              width: "100%",
              aspectRatio: 1.3,
            }}
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
              style={{}}
            />
            <YAxis
              type="number"
              domain={["dataMin - 2000", "dataMax + 2000"]}
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
            <Tooltip
              position={{ x: 0, y: 130 }}
              active
              content={renderTooltip}
              contentStyle={{ backgroundColor: "transparent", border: "none" }}
              labelStyle={{ fontSize: "1.2rem" }}
            />
          </AreaChart>
        </Card>
        <Card colSpan={2} rowSpan={10} title="Progress"></Card>
        <Card colSpan={3} rowSpan={8} title="Activity"></Card>
      </PageContent>
    </>
  );
};

export default Home;
