import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Show = () => {
  const studyPlan = useLoaderData();


  return (
    <div style={divStyle}>
      <h1>{studyPlan.course}</h1>
      <h2>Study Goals: {studyPlan.goals}</h2>
      <h2>Study Plan: {studyPlan.details}</h2>
      <h2>Hours per Day: {studyPlan.hoursPerDay}</h2>
      <h2>Completion Date: {studyPlan.completionDate}</h2>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;
