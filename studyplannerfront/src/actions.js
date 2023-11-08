import { redirect } from "react-router-dom";

const URL = "https://studyplanner-t8yu.onrender.com";

export const createAction = async ({ request }) => {
  const formData = await request.formData();

  const newPlan = {
    course: formData.get("course"),
    hoursPerDay: formData.get("hours"),
    completionDate: formData.get("completion_date"),
    goals: formData.get("goals"),
    details: formData.get("details"),
  };

  // Send a request to the backend to create a study plan
  await fetch(URL + "/planner/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlan),
  });

  // Redirect back to the index page
  return redirect("/");
};

export const updateAction = async ({ request, params }) => {
  const formData = await request.formData();
  const id = params.id;

  const updatedPlan = {
    course: formData.get("course"),
    goals: formData.get("goals"),
    details: formData.get("details"),
  };

  // Send a request to the backend to update the study plan
  await fetch(URL + `/planner/${id}/`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPlan),
  });

  // Redirect back to the study plan details page
  return redirect(`/post/${id}`);
};

export const deleteAction = async ({ params }) => {
  const id = params.id;

  // Send a request to the backend to delete the study plan
  await fetch(URL + `/planner/${id}/`, {
    method: "delete",
  });

  // Redirect back to the index page
  return redirect("/");
};
