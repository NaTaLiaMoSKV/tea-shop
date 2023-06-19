import { useState } from "react";
import { addTea } from 'redux/operations';
import { useSelector, useDispatch } from "react-redux";
import { selectTeasList } from 'redux/selectors';

export default function AddTea() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const teas = useSelector(selectTeasList);
    const dispatch = useDispatch();

    const onFormSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const teaName = form.elements.name.value;
        const teaPrice = form.elements.price.value;
        const teaDescription = form.elements.description.value;
        const teaImage = form.elements.image.value;

        const tea = {
            name: teaName,
            price: teaPrice,
            description: teaDescription,
            image: teaImage,
        }
         const isTeaInTeasList = tea => {
            return (teas.find(t => t.name.toLocaleLowerCase() === tea.name.toLocaleLowerCase()) !== undefined)
        }

        if (!isTeaInTeasList(tea) ) {
            dispatch(addTea(tea));
        } else alert(`${tea.name} is already in shop.`);
        
        setName('');
        setPrice('');
        setDescription('');
        setImage('');
    }

    const handleInputChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'price':
                setPrice(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'image':
                setImage(value);
                break;
            default:
                return;
        }
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label className="form__label">
                Name 
                <input type="text" value={name} name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. "
                onChange={handleInputChange} required/>
            </label>

            <label className="form__label">
                Price
                <input type="number" min={1} value={price} name="price" title="Name may contain only тгьиук., " onChange={handleInputChange} required/>
            </label>
            <label className="form__label">
                Description 
                <input type="text" value={description} name="description" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. "
                onChange={handleInputChange} required/>
            </label>
            <label className="form__label">
                Photo URL 
                <input type="url" value={image} name="image" onChange={handleInputChange} required/>
            </label>

            
            <button type="submit" className="form__button">Add tea</button>
        </form>
    )
}