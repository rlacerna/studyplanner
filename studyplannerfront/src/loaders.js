// Your deployed API base URL
const URL = "https://studyplanner-t8yu.onrender.com";

// indexLoader => get all study plans for the index route
export const indexLoader = async () => {
  const response = await fetch(URL + "/planner/");
  const studyPlans = await response.json();
  return studyPlans;
};

// showLoader => get a single study plan for the Show route
export const showLoader = async ({ params }) => {
  const response = await fetch(URL + `/planner/${params.id}/`);
  const studyPlan = await response.json();
  return studyPlan;
};
