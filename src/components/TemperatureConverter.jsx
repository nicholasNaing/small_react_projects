import { useContext } from "react";
import { useState } from "react";
import { styleContext } from '../App';

function TemperatureConverter() {
    // Define state variables for Celsius and Fahrenheit
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    // Access the style context for styling
    const [style, setStyle, theme, setTheme] = useContext(styleContext);

    // Handle temperature input changes
    const handleTemp = (e) => {
        if (e.target.name === "celsius") {
            if (e.target.value) {
                // Convert the input value to a float
                let floatCelsius = parseFloat(e.target.value);
                // Update the Celsius state
                setCelsius(floatCelsius);
                // Calculate Fahrenheit and update its state
                let changeFahrenheit = (floatCelsius * 1.8) + 32;
                setFahrenheit(changeFahrenheit);
            } else {
                // If the input is empty, reset both states
                setCelsius(e.target.value);
                setFahrenheit(e.target.value);
            }
        } else if (e.target.name === "fahrenheit") {
            if (e.target.value) {
                // Convert the input value to a float
                let floatFahrenheit = parseFloat(e.target.value);
                // Update the Fahrenheit state
                setFahrenheit(floatFahrenheit);
                // Calculate Celsius and update its state
                let changeCelsius = (floatFahrenheit - 32) / 1.8;
                setCelsius(changeCelsius);
            } else {
                // If the input is empty, reset both states
                setCelsius(e.target.value);
                setFahrenheit(e.target.value);
            }
        }
    }

    return (
        <div className="temp-page" style={{ color: style.textColor, boxShadow: `3px 3px 15px ${style.linearColor1} inset` }}>
            <div>
                <h1>Welcome From the Temperature Converter</h1>
                {/* Display temperature conversion if both values are not empty */}
                {fahrenheit.toString() && celsius.toString() ? <h2>{celsius} degree Celsius = {fahrenheit} degree Fahrenheit</h2> : ''}
            </div>
            <div className="temperature-container">
                <label style={{ color: style.navColor, fontSize: "18px" }} htmlFor="celsius">Celsius</label><br />
                <input type="number" id="celsius" name="celsius" value={celsius} onChange={handleTemp} />
                <br />
                <label style={{ color: style.navColor, fontSize: "18px" }} htmlFor="fahrenheit">Fahrenheit</label><br />
                <input type="number" id="fahrenheit" name="fahrenheit" value={fahrenheit} onChange={handleTemp} />
            </div>
        </div>
    );
}

export default TemperatureConverter;