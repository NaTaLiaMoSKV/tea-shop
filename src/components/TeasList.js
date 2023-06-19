import { deleteTea } from "redux/operations";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter, selectTeasList } from "redux/selectors";

export default function TeasList() {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const teasList = useSelector(selectTeasList);

    const findTea = name => {
        const val = filter.toString().toLocaleLowerCase();
        return name.toLocaleLowerCase().includes(val);
    }
    
    return (
        <ul className="contacts__list">
            {teasList
                .filter(tea => findTea(tea.name))
                .map(tea => ( 
                    <li key={tea.id} className="contacts__item">
                        <p>{tea.name}: <span style={{ marginLeft: 10 }}>{tea.price} грн.</span></p>
                        <p>{tea.name}: <span style={{ marginLeft: 10 }}>{tea.description}</span></p>
                        <img src={tea.image} alt={tea.name}></img>
                        
                        <button className="contacts__button" type="button" onClick={() => dispatch(deleteTea(tea.id))}> Delete </button>
                    </li>
                ))
            }            
        </ul>
    )
}