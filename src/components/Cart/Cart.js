import React from "react";

const Cart = (props) => {
  const counties = props.counties;
  const selectedCountry = props.selectedCountry;

  // loop through countries population and add them to the cart
  let totalPopulation = 0;
  for (let i = 0; i < selectedCountry.length; i++) {
    const element = selectedCountry[i];
    totalPopulation += element.population;
    // totalPopulation = totalPopuration + element.population;
  }

  // // reduce Populations
  // const totalPopulation = counties.reduce(
  //   (sum, country) => sum + country.population,
  //   0
  // );
  return (
    <div>
      <h1>Total countries: {counties.length}</h1>
      <h3>Total Added countries: {selectedCountry.length}</h3>
      <h3>Selected Countries Total Population: {totalPopulation}</h3>
    </div>
  );
};

export default Cart;
