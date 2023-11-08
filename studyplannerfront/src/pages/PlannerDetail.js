import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";

const PlannerDetail = () => {  // Renamed from 'Show' to 'PlannerDetail'
  const studyPlan = useLoaderData();  // Use 'studyPlan' consistently


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
      <h1>Update Plan or Delete it When Done</h1>
      <h2>Course: {studyPlan.course}</h2>
      <h2>Goals: {studyPlan.goals}</h2>
      <h2>Details: {studyPlan.details}</h2>
      <div style={{ textAlign: "center" }}>
        <Form action={`/update/${studyPlan.id}`} method="post">
          <input
            type="text"
            name="course"
            placeholder="Course Name"
            defaultValue={studyPlan.course}
          />
          <input
            type="number"
            name="hours"
            placeholder="Hours"
            defaultValue={studyPlan.hours}
          />
          <input
            type="text"
            name="goals"
            placeholder="Update study goals"
            defaultValue={studyPlan.goals}
          />
          <input
            type="text"
            name="details"
            placeholder="Update study plan"
            defaultValue={studyPlan.details}
          />
          <button>Update Plan</button>
        </Form>
        <Form action={`/delete/${studyPlan.id}`} method="post">
          <button>Delete Plan</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default PlannerDetail;