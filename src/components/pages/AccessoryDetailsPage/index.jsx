import { useParams } from "react-router-dom";
import { useContext, useEffect, useState} from "react";
import "./styles.css";
import AccessoriesOrderContext from "../../../context/AccessoriesOrderContext";

export const AccessoryDetailsPage = (props) => {
    /*const {id} = useParams();

    const [pet, setPet] = useState({});

    const globalState = useContext(PetsOrderContext);

    useEffect ( () => {
        const pet = globalState.pets.find(
            (pet) => pet.id.stringValue === id
        );
        setPet(pet);
    }, [])

    if (pet) {
        return (
            <div className="pets-page">
                <h1 className="pets-title"> {pet.name?.stringValue} </h1>
                <img src={pet.image?.stringValue} alt="pet photo" />
            </div>
        )
    } else {
        return <p>No pet with this id</p>
    }
*/

    return (
    <div className="product-details-page">
      Product A in details
    </div>
  );
}