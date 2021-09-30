/*
  Font resize slider - 5 modes for accessibility - comes as scale
*/

import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2
  },

  margin: {
    height: theme.spacing(3)
  }

}));

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const marks = [
  {
    value: 0
  },
  {
    value: 25
  },
  {
    value: 50
  },
  {
    value: 75
  },
  {
    value: 100
  }
];

const IOSSlider = withStyles({
  root: {
    color: "#3880ff",
    height: 2,
    padding: "15px 0"
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    "&:focus, &:hover, &$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow
      }
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 12px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000"
    }
  },
  track: {
    height: 2
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: "#bfbfbf"
  },
  mark: {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    marginTop: -3
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor"
  }
})(Slider);

export default function CustomizedSlider() {
  const classes = useStyles();

  const [userFontSize, setUserFontSize] = React.useState("1rem");
  const [sliderTracker, setSliderTracker] = React.useState(0);

  const handleChange = (e, newValue) => {
    switch (newValue) {
      case 0: {
        setUserFontSize("1rem");
        setSliderTracker(0);
        break;
      }
      case 25: {
        setUserFontSize("1.19rem");
        setSliderTracker(25);
        break;
      }
      case 50: {
        setUserFontSize("1.37rem");
        setSliderTracker(50);
        break;
      }
      case 75: {
        setUserFontSize("1.55rem");
        setSliderTracker(75);
        break;
      }
      case 100: {
        setUserFontSize("1.75rem");
        setSliderTracker(100);
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "2em" }}>
        <IOSSlider
          aria-label="Font Size Slider"
          key={sliderTracker}
          defaultValue={sliderTracker}
          marks={marks}
          step={25}
          onChangeCommitted={handleChange}
          valueLabelDisplay="off"
        />
    </Container>
  );
}
