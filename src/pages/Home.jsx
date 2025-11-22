import { useState } from "react";
import { PiFire, PiHeartbeat, PiFootprints } from "react-icons/pi";
import Header from "../components/layout/Header/Header.jsx";
import PageContent from "../components/layout/PageContent/PageContent.jsx";
import Card from "../components/ui/Card/Card.jsx";
import SemiCircleChart from "../components/charts/SemiCircleChart/SemiCircleChart.jsx";
import ECGChart from "../components/charts/ECGChart/ECGChart.jsx";
import StepsChart from "../components/charts/StepsChart/StepsChart.jsx";

const Home = ({ userInfo, stepsData }) => {
  const [stepsHover, setStepsHover] = useState(null);
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
              <span>{userCurrents.calorie_intake}</span> kcal
            </p>
            <p>
              Remaining:{" "}
              {userNorms.calorie_intake - userCurrents.calorie_intake} kcal
            </p>
          </h2>
        </Card>
        <Card
          colSpan={1}
          rowSpan={2}
          title="Heart Rate"
          titleIcon={<PiHeartbeat />}
        >
          <ECGChart bpm={62} />
          <h2 className="card__description">
            <p>
              <span>{userCurrents.bpm}</span> bpm
            </p>
            <p>Normal: {userNorms.bpm} bpm</p>
          </h2>
        </Card>
        <Card
          colSpan={1}
          rowSpan={2}
          title="Steps"
          titleIcon={<PiFootprints />}
        >
          <StepsChart
            stepsData={stepsData}
            onHoverValue={(v) => setStepsHover(v)}
          />

          <h2 className="card__description">
            <p>
              <span>
                {stepsHover?.toLocaleString() ??
                  stepsData.at(-1).value.toLocaleString()}
              </span>{" "}
              steps
            </p>
            <p>
              Yesterday: {stepsData.at(-2)?.value.toLocaleString() ?? "—"} steps
            </p>
          </h2>
        </Card>
        <Card colSpan={2} rowSpan={10} title="Progress"></Card>
        <Card colSpan={3} rowSpan={8} title="Activity"></Card>
      </PageContent>
    </>
  );
};

export default Home;
