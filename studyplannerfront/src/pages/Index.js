import React from "react";
import { useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";
import Post from "../components/Post";

const Index = () => {
  const studyPlans = useLoaderData();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>My Study Planner</h2>
      <Form action="/create" method="post">
        <input type="text" name="course" placeholder="Course Name" />
        <input type="number" name="hours" placeholder="Hours per day" />
        <input type="date" name="completion_date" placeholder="Expected completion date" />
        <input type="text" name="goals" placeholder="Study goals" />
        <input type="text" name="details" placeholder="How will you achieve it" />
        <button>Plan It</button>
      </Form>
      {studyPlans.map((plan) => (
        <Post post={plan} key={plan.id} />
      ))}
    </div>
  );
};

export default Index;
