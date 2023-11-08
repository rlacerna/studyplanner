import React from "react";
import { useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";
import Planner from "../components/Planner";  // Import 'Planner' component

const Index = (props) => {
  const studyPlans = useLoaderData();  // Use 'studyPlans' consistently

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
      <h2>My Study Planner</h2>
      <Form action="/create" method="post">
        <input type="text" name="course" placeholder="Course Name" />
        <input type="number" name="hours" placeholder="Hours" />
        <input type="date" name="completion_date" placeholder="Expected completion date" />
        <input type="text" name="goals" placeholder="Study goals" />
        <input type="text" name="details" placeholder="How will you achieve it" />
        <button>Plan It</button>
      </Form>
      {studyPlans.map((post) => (
        <Planner post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Index;
