import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Show = () => {
  const studyPlan = useLoaderData();

  const div = {
    textAlign: "center",
    border: "1px solid #d4d4d4",
    borderRadius: "8px",
    width: "80%",
    margin: "30px auto",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    background: "#fff",
  };

  return (
    <div style={div}>
      <h1>{studyPlan.course}</h1>
      <h2>Study Goals: {studyPlan.goals}</h2>
      <h2>Study Plan: {studyPlan.details}</h2>
      <h2>Hours per Day: {studyPlan.hours}</h2>
      <h2>Completion Date: {studyPlan.completionDate}</h2>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;
