// import { Routes, Route } from "react-router-dom";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading, selectTeasList } from "redux/selectors";
import { useEffect } from "react";
import { fetchTeas } from "redux/operations";
// import Main from "./Main";
import AddTea from "./AddTea";
import TeasList from "./TeasList";

export default function App() {
  const dispatch = useDispatch();
  const teas = useSelector(selectTeasList);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTeas());
  }, [dispatch]);

  return (
    
    <>
      <h2>Teas</h2>
      <AddTea />
      <Filter />
      <TeasList />
      {/* <Main /> */}
      
      { !isLoading && !error && teas.length === 0 && <h2 style={{ marginLeft: "20px", fontFamily: "monospace" }}> Your tea shop is empty </h2> }
      { isLoading && !error && <h2 style={{ marginLeft: "20px", fontFamily: "monospace" }}>Loading tea shop...</h2> }     
    </>
  )

}

