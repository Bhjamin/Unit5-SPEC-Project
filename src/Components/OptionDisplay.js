import React from "react";
import { useSelector } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";
import { useDispatch } from "react-redux";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";

const OptionDisplay = () => {


    let currentPotentials = useSelector(selectPotentials)
    console.log(currentPotentials)

    const dispatch = useDispatch()


    return <div className="stack">{
        currentPotentials.map((country, i) => {
            return <h2 onClick={() => dispatch(setDisplayCountry(currentPotentials[i]))} key={country.name.offical} >{country.name.common}</h2>
        })
    }</div>;
};

export default OptionDisplay;
