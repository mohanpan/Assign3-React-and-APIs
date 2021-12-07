import "./styles.css";
import { useEffect, useState, useContext } from "react";
import { AccessoryItem } from "../../AccessoryItem";
import AccessoriesOrderContext from "../../../context/AccessoriesOrderContext";
import { Search } from "../../Search";

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

export const AccessoriesHomePage = () => {

  const [Accessories, setAccessories] = useState([]);
  const [filteredAccessories, setFilteredAccessories ] = useState([]);
  const [loading, setLoading ] = useState(true);
  const [searchString, setSearchString] = useState('');

  const globalState = useContext(AccessoriesOrderContext);

  const history = useHistory();

  //check if a current user is logged into the firebase
  useEffect(
    () => {
      getAccessories();
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          history.push('/login');
        }
      })
    }, []
  );

  useEffect(
    () => {
      getAccessories();
    }, []
  );

  useEffect(
    () => {
      handleSearchByPart();
    }, [searchString]
  )

  const handleSearchByPart = () => {
    if (searchString === '') {
      setFilteredAccessories(Accessories);
      return;
    }

    // filter
    const AccessoriesFiltered = Accessories.filter(
      (Accessory) => {
        const part = Accessory.breed.stringValue.toLowerCase();
        const isMatch = part.indexOf(searchString.trim().toLowerCase());

        return isMatch !== -1;
      }
    )
    setFilteredAccessories(AccessoriesFiltered);
  }

  const getAccessories = async() => {
    try {
      const response = await fetch('https://firestore.googleapis.com/v1/projects/assign3-subaruaccessoryapis/databases/(default)/documents/Accessories/');
      const data = await response.json();
      console.log(data);
      const formattedData = data.documents.map( (item) => {
        return item.fields
      });

      console.log(formattedData);
      setAccessories(formattedData);
      setFilteredAccessories(formattedData);
      globalState.initializeAccessories(formattedData);
      setLoading(false);

    } catch(err) {
      console.log(err);
      setLoading(false);
    }
  }

  const handleSearchUpdate = (event) => {
    setSearchString(event.target.value);
  }

  return (
    <div className="Accessories-page">
      <h1 className="Accessories-title"> All Accessories</h1>
      <Search handleSearchUpdate={handleSearchUpdate} />
      <div className="Accessories-container">
        {
          filteredAccessories.map( (Accessory) => (
            <AccessoryItem key={Accessory.id.stringValue} image={Accessory.image.stringValue} name={Accessory.name.stringValue} part={Accessory.part.stringValue} amount={Accessory.amount.stringValue} type={Accessory.AccessoryType.stringValue} id={Accessory.id.stringValue} ></AccessoryItem>
          )) 
        }

        {
          !loading && filteredAccessories.length === 0 && <p>Nothing found for {searchString}!</p>
        }

        {
          loading && <p>Loading data..</p>
        }
      </div>
    </div>
  );
};
