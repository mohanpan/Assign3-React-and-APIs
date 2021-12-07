import { useParams } from "react-router-dom";
import { useContext, useEffect, useState} from "react";
import "./styles.css";
import AccessoriesOrderContext from "../../../context/AccessoriesOrderContext";

export const AccessoryDetailsPage = (props) => {
    const {id} = useParams();

    const [Accessory, setAccessory] = useState({});

    const globalState = useContext(AccessoriesOrderContext);

    useEffect ( () => {
        const Accessory = globalState.Accessories.find(
            (Accessory) => Accessory.id.stringValue === id
        );
        setAccessory(Accessory);
    }, [])

    if (Accessory) {
        return (
            <div className="Accessories-page">
                <h1 className="Accessories-title"> {Accessory.name?.stringValue} </h1>
                <img src={Accessory.image?.stringValue} alt="Accessory photo" />
            </div>
        )
    } else {
        return <p>No accessory with this id</p>
    }
}