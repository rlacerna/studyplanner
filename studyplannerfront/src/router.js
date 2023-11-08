import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import App from "./App";
import { indexLoader, showLoader } from "./loaders";
import Index from "./pages/Index";
import { createAction, updateAction, deleteAction } from "./actions";
import PlannerDetail from "./pages/PlannerDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Index />} loader={indexLoader} />
        <Route path="/planner/:id" element={<PlannerDetail />} loader={showLoader} />
        <Route path="create" action={createAction} />
        <Route path="update/:id" action={updateAction} />
        <Route path="delete/:id" action={deleteAction} />
      </Route>
    </>
  )
);

export default router;