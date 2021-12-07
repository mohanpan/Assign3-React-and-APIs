import { Button } from "../Button";
import "./styles.css"
import { useContext } from "react";
import AccessoriesOrderContext from "../../context/AccessoriesOrderContext";

export const OrderItem = (props) => {
    const {image, amount, name, id} = props;

    const globalState = useContext(AccessoriesOrderContext);

    const removeAccessory = () => {
        globalState.removeAccessoryFromOrder(id);
    }

    return (
        <div className="order-item">
            <img className="order-item-photo" src={image} alt="Accessory photo" />
            <div className="order-item-desc">
                <h1 className="order-item-name">{name}</h1>
                <p className="order=item-amount">{amount}</p>
            </div>
            <Button text="Remove Accessory" type="secondary" isDisabled={false} action={removeAccessory} />
        </div>
    )
}