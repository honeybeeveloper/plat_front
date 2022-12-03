import React from "react";
import KnowhowDiv from "../../components/div/KnowhowDiv";
import MaterialDiv from "../../components/div/MaterialDiv";
import QuestDiv from "../../components/div/QuestDiv";
import StyledTheme from "../../components/theme/StyledTheme";

function Mission() {
  return (
    <div className="root" style={useStyles.root}>
      <div className="titleDiv" style={useStyles.titleDiv}>
        <label className="missionTitle" style={useStyles.missionTitle}>
          Persona(페르소나) 분석
        </label>
        <label className="missionInfo" style={useStyles.missionInfo}>
          수많은 데이터가 축적되고 데이터를 활용하는 인공지능 기술도 좋아지면서
          <br />
          고객의 관심과 니즈를 파악하는 맥락적 고객 경험의 시대가 왔습니다.
          <br />
          한 명의 고객에게도 시간과 장소를 같이 하는 사람에 따라 맥락을 다르게
          봐야하는 시대입니다.
          <br />
          <br />
          이 미션은 고객 데이터를 딥러닝 기반 클러스터링(Clustering, 군집화)
          기법을 통해 다양한 마이크로 세그먼트로 분류합니다.
          <br />
          빅데이터로 여러 다양한 페르소나를 한꺼번에 찾아내고, 각각의 맥락에
          대해 데이터가 리얼하게 보여주며 수치로 증명하여 객관성을 갖도록
          합니다.
          <br />
        </label>
      </div>
      <div className="materialDiv" style={useStyles.materialDiv}>
        <MaterialDiv></MaterialDiv>
      </div>
      <div className="knowhowDiv" style={useStyles.knowhowDiv}>
        <KnowhowDiv></KnowhowDiv>
      </div>
      <div className="questDiv" style={useStyles.questDiv}>
        <QuestDiv></QuestDiv>
      </div>
    </div>
  );
}

const useStyles = {
  root: {
    marginBottom: StyledTheme.spacing * 5,
  },
  titleDiv: {
    display: "grid",
    height: StyledTheme.variables.titleDivHeight,
  },
  missionTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: StyledTheme.spacing * 7,
    fontWeight: "bold",
  },
  missionInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: StyledTheme.spacing * 2,
    wordSpacing: 2,
    lineHeight: 2,
    fontWeight: "bold",
  },
  materialDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: StyledTheme.spacing * 3,
  },
  knowhowDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: StyledTheme.spacing * 10,
  },
  questDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: StyledTheme.spacing * 10,
  },
};

export default Mission;