import { Routes, Route } from "react-router-dom";
import AddTea from "./AddTea";
import { fetchTeas } from "redux/operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Layout from "./Layout";
import HomePage from "./HomePage";
import { RestrictedRoute } from "./RestrictedRoute";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeas());
  }, [dispatch]);

  return (
    // <AddTea />
    <div id="content">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/addTea" element={<AddTea />} />
          <Route path="*" element={
                <RestrictedRoute redirectTo="/" />
              }
          />
        </Route>
      </Routes> 
    </div>
  )

}

