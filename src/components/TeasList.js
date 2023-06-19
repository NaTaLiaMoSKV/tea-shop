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
                        <img className="contacts__item-image" src={tea.image} alt={tea.name}></img>
                        <p className="contacts__item-name"> {tea.name}</p>
                        <p className="contacts__item-name"> Ціна: <span className="contacts__item-name" style={{ marginLeft: 10 }}>{tea.price}грн. / 50г</span></p>
                        <p className="contacts__item-desription">{tea.description}</p>
                        
                        <button className="contacts__button" type="button" onClick={() => dispatch(deleteTea(tea.id))}> Видалити зі сховища </button>
                    </li>
                ))
            }            
        </ul>
    )
}