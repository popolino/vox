import React, { useState } from "react";
import classes from "./MyTooltip.module.css";

const MyTooltip = ({ text, children }) => {
  const [isTooltipShown, setIsTooltipShown] = useState(false);

  return (
    <div
      className={classes.container}
      onMouseEnter={() => setIsTooltipShown(true)}
      onMouseLeave={() => setIsTooltipShown(false)}
    >
      {isTooltipShown && <div className={classes.tooltip}>{text}</div>}
      {children}
    </div>
  );
};

export default MyTooltip;
