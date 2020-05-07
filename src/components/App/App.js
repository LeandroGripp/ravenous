import React, {useState} from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import { Yelp } from "../../util/Yelp";

// let business = {
//   imageSrc:
//     "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
//   name: "MarginOtto Pizzeria",
//   address: "1010 Paddington Way",
//   city: "Flavortown",
//   state: "NY",
//   zipCode: "10101",
//   category: "Italian",
//   rating: 4.5,
//   reviewCount: 90,
// };

// let businesses = [business, business, business, business, business, business];

function App() {
  const [businesses, setBusinesses] = useState([]);
  function searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then((businesses) => {
      setBusinesses(businesses);
    });
  }
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
