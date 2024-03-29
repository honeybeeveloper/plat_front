import React from "react";
import PropTypes from "prop-types";

import { Button } from "@mui/material";
import StyledTheme from "../theme/StyledTheme";

function QuestButton(props) {
  const { name, disabled, isMain, linkQuestId, onClick } = props;

  return (
    <div className="root" style={useStyles.root}>
      <Button
        className="questButton"
        style={
          isMain
            ? { ...useStyles.common, ...useStyles.questMainButton }
            : { ...useStyles.common, ...useStyles.questSubButton }
        }
        disabled={disabled}
        onClick={onClick}
        data-link-quest-id={linkQuestId}
      >
        {name}
      </Button>
    </div>
  );
}

QuestButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  isMain: PropTypes.bool.isRequired,
};

const useStyles = {
  common: {
    minHeight: StyledTheme.spacing * 3,
    minWidth: StyledTheme.spacing * 12,
    fontWeight: "bold",
    color: StyledTheme.base.button.labelColor,
  },
  questMainButton: {
    backgroundColor: "#ffacac",
  },
  questSubButton: {
    backgroundColor: "#acacff",
  },
};

export default QuestButton;
