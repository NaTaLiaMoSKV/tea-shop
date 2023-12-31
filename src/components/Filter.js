import { useDispatch } from "react-redux"
import { update } from "redux/filter/filterSlice";

export default function Filter() {
    const dispatch = useDispatch();

    const handleInputChange = e => {
        const filterString = e.currentTarget.value;
        dispatch(update(filterString));
    }
    
    return (
        <div className="filter">
            <label> Пошук чаю за назвою: </label>
            <input className="filter__input" name="filter" onChange={handleInputChange} />
        </div>
    )
}