import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading, selectTeasList } from "redux/selectors";
import { useEffect } from "react";
import { fetchTeas } from "redux/operations";
import TeasList from "./TeasList";

export default function HomePage() {
    const dispatch = useDispatch();
    const teas = useSelector(selectTeasList);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchTeas());
    }, [dispatch]);

    return (
        <>
            <h1>Tea Shop</h1>
            {/* <AddTea /> */}
            <Filter />
            <TeasList />
                {/* <Main /> */}
                { !isLoading && !error && teas.length === 0 && <h2 style={{ marginLeft: "20px", fontFamily: "monospace" }}> Your storage is empty </h2> }
            { isLoading && !error && <h2 style={{ marginLeft: "20px", fontFamily: "monospace" }}>Loading storage...</h2> }
        </>
    )
}

