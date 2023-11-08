import { redirect } from "react-router-dom";

const URL = "https://studyplanner-t8yu.onrender.com";

export const createAction = async ({ request }) => {
  const formData = await request.formData();

  const newPlan = {
    course: formData.get("course"),
    hours: formData.get("hours"),
    completionDate: formData.get("completion_date"),
    goals: formData.get("goals"),
    details: formData.get("details"),
  };

  await fetch(URL + "/planner/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlan),
  });

  return redirect("/");
};

export const updateAction = async ({ request, params }) => {
  const formData = await request.formData();
  const id = params.id; // Ensure this is correctly passed in from the route parameters.

  // Extract the updated plan data from the form data.
  const updatedPlan = {
    goals: formData.get("goals"),
    details: formData.get("details"),
    course: formData.get("course"),
    hours: formData.get("hours"),
  };

  // Construct the URL to update the study plan.

  const updateURL = `${URL}/planner/${id}/`; // Check if this matches your Django endpoint
  await fetch(updateURL, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPlan),
  });

  // Redirect back to the study plan details page.
  return redirect("/");
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
