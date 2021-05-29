import React from "react";
import "./TestCard.css";

const TestCard = props => (
    <div className="testCard" onClick={() => console.log(props)}></div>
);

export default TestCard;