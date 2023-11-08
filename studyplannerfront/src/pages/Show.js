import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";

const Show = () => {
  const studyPlan = useLoaderData();


  return (
    <div style={divStyle}>
      <h1>{studyPlan.course}</h1>
      <h2>{studyPlan.goals}</h2>
      <h2>{studyPlan.details}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>The Plan</h2>
        <Form action={`/update/${studyPlan.id}`} method="post">
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

export default Show;
