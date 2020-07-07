//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

const timePeriod = new Date().getHours();
console.log(timePeriod);
var message = "";
var customStyle = {
  color: ""
};

if (timePeriod < 12) {
  message = "Good morning";
  customStyle.color = "red";
} else if (timePeriod < 18) {
  message = "Good afternoon";
  customStyle.color = "green";
} else {
  message = "Good evening";
  customStyle.color = "blue";
}
ReactDom.render(
  <h1 className="heading" style={customStyle}>
    {message}
  </h1>,
  document.getElementById("root")
);
