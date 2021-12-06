import './styles.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import AccessoriesOrderContext from '../../context/AccessoriesOrderContext';
import { useContext } from 'react';

export const AccessoryItem = (props) => {
    
    const {image, amount, name, part, type, id } = props;

    const globalState = useContext(AccessoriesOrderContext);

    const addAccessoryToCart = () => {
        
        const Accessory = {
            id,
            name,
            image,
            part,
            type,
            amount
        }
        globalState.addAccessoryToOrder(Accessory);
        console.log(globalState.order);
        alert("Accessory was added");
    }

    return (
        <div className="Accessory">
            <img className="Accessory-photo" src={image} alt={name + part + "photo"} />

            <Link to={`/Accessory/${id}`}>
                <h1 className="Accessory-name"> { name } </h1>
            </Link>
            <p className="Accessory-part"> {part} </p>
            <p className="Accessory-amount">{amount} years old</p>

            <Button text="Request Accessory" type="primary" isDisabled={false} action={addAccessoryToCart} />
        </div>
    )
}