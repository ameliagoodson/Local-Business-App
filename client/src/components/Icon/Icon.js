import React from "react";
import icon from "./components/Icon"; // Tell webpack this JS file uses this image
console.log(icon); // /
function Icon() {
  // Import result is the URL of your image
  return <img src={icon} alt="icon" />;
}
export default Icon;
