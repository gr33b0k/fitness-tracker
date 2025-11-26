import { useState } from "react";
import { PiFire, PiHeartbeat, PiFootprints } from "react-icons/pi";
import Header from "../components/layout/Header/Header.jsx";
import PageContent from "../components/layout/PageContent/PageContent.jsx";
import Card from "../components/ui/Card/Card.jsx";
import SemiCircleChart from "../components/charts/SemiCircleChart/SemiCircleChart.jsx";
import ECGChart from "../components/charts/ECGChart/ECGChart.jsx";
import StepsChart from "../components/charts/StepsChart/StepsChart.jsx";
import RadialChart from "../components/charts/RadialChart/RadialChart.jsx";
import ActivityChart from "../components/charts/ActivityChart/ActivityChart.jsx";
import { activityData, trainingData } from "../data/data.js";

const Home = ({ userInfo, stepsData }) => {
  const [stepsHover, setStepsHover] = useState(null);
  const userCurrents = userInfo.current;
  const userNorms = userInfo.norms;
  const { totalCurrentSets, totalGoalSets } = trainingData.reduce(
    (acc, item) => {
      acc.totalCurrentSets += item.current_sets;
      acc.totalGoalSets += item.goal_sets;
      return acc;
    },
    { totalCurrentSets: 0, totalGoalSets: 0 }
  );

  const exerciseProgress = Math.ceil((totalCurrentSets / totalGoalSets) * 100);

  return (
    <>
      <Header
        header={`Hello, ${userInfo.name}`}
        subheader="Welcome and Let's do some workout today!"
        userInfo={userInfo}
      />
      <PageContent isTransparent={true} gridColumns={5}>
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
          <div className="card__description">
            <h3 className="card__description--large">
              <span>{userCurrents.calorie_intake}</span> kcal
            </h3>
            <p className="card__description--small">
              Remaining:{" "}
              {userNorms.calorie_intake - userCurrents.calorie_intake} kcal
            </p>
          </div>
        </Card>
        <Card
          colSpan={1}
          rowSpan={2}
          title="Heart Rate"
          titleIcon={<PiHeartbeat />}
        >
          <ECGChart bpm={userCurrents.bpm} />
          <div className="card__description">
            <h3 className="card__description--large">
              <span>{userCurrents.bpm}</span> bpm
            </h3>
            <p className="card__description--small">
              Normal: {userNorms.bpm} bpm
            </p>
          </div>
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

          <div className="card__description">
            <h3 className="card__description--large">
              <span>
                {stepsHover?.toLocaleString() ??
                  stepsData.at(-1).value.toLocaleString()}
              </span>{" "}
              steps
            </h3>
            <p className="card__description--small">
              Yesterday: {stepsData.at(-2)?.value.toLocaleString() ?? "—"} steps
            </p>
          </div>
        </Card>
        <Card colSpan={2} rowSpan={10} title="Progress">
          <div className="card__subtitle">
            <h3 className="card__description--large">
              <span>{exerciseProgress}%</span>
            </h3>
            <p className="card__description--small">Goal completion</p>
          </div>
          <RadialChart
            data={trainingData.map((item, index) => ({
              ...item,
              fill: ["#daf17d", "#fef180", "#cee8ff"][index % 3],
            }))}
            nameKey="exercise"
            dataKey="current_sets"
            maxDataKey="goal_sets"
          />
          <div className="card__description">
            <ul className="card__description-list">
              {trainingData.map((exercise, index) => (
                <li
                  key={`exercise-progress-${index}`}
                  className="card__description-list-item"
                >
                  <div className="card__description-list-item-title">
                    <h4
                      className="card__description--large card__exercise-name"
                      style={{
                        "--bullet-color": ["#daf17d", "#fef180", "#cee8ff"][
                          index % 3
                        ],
                      }}
                    >
                      {exercise.exercise}
                    </h4>
                    <p>
                      {Math.ceil(
                        (exercise.current_sets / exercise.goal_sets) * 100
                      )}
                      %
                    </p>
                  </div>
                  <p>
                    {exercise.current_sets} of {exercise.goal_sets} sets done
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Card>
        <Card colSpan={3} rowSpan={8} title="Activity">
          <ActivityChart
            data={activityData}
            goal={userNorms.calorie_burn}
            fill="#cee8ff"
          />
        </Card>
      </PageContent>
    </>
  );
};

export default Home;
