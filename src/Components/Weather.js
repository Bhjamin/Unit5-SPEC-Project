import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
    const [weather, setWeather] = useState();

    const display = useSelector(selectDisplay)

    let latitude = display.capitalInfo.latlng[0]
    let longitude = display.capitalInfo.latlng[1]

    

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: {q: `${latitude}, ${longitude}`},
            headers: {
              'X-RapidAPI-Key': '68ec8ee029msh3bc3bb7b428e069p169cddjsn1f76acb2dfe6',
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
          };

        axios.request(options).then(function (response) {
            setWeather(response.data)
            console.log(response.data)
        }).catch(function (error) {
            console.error(error);
        });

    }, [])

    return (
        <div>
            <table className="overview-table">
                <tr>
                    <td>Conditions: {weather?.current.condition.text} </td>
                </tr>
                <tr>
                    <td>Temperature: {weather?.current.temp_f} Farenheit </td>
                </tr>
                <tr>
                    <td>Feels Like: {weather?.current.feelslike_f} Farenheit </td>
                </tr>
                <tr>
                    <td>Humidity: %{weather?.current.humidity} </td>
                </tr>
                <tr>
                    <td>Wind Speed: {weather?.current.wind_mph} mph </td>
                </tr>
                <tr>
                    <td>Wind Direction: {weather?.current.wind_dir}</td>
                </tr>
            </table>
        </div>
    );
};

export default Weather;
