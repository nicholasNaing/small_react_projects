import React, { useContext, useEffect, useState } from 'react';
import { styleContext } from '../App';

function Registration() {
    // Access the style context for styling
    const [style, setStyle, theme, setTheme] = useContext(styleContext);

    // Define state variables
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [color, setColor] = useState('black');
    const [isSubmit, setSubmit] = useState(false);
    const [info, setInfo] = useState({});

    // Handle name input changes
    const handleName = (e) => {
        setName(e.target.value);
    }

    // Handle email input changes
    const handleMail = (e) => {
        setMail(e.target.value);
    }

    // Handle phone input changes
    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const newInfo = { name, mail, phone, color };
        setSubmit(color && true);
        setInfo(newInfo);
        setName('');
        setMail('');
        setPhone('');
        setColor('black');
    }

    // Handle color selection
    const handleColor = (e) => {
        setColor(e.target.id);
    }

    return (
        <div className='registrationContainer'>
            <form className='userRegistration' onSubmit={handleSubmit} style={{ color: style.textColor, boxShadow: `3px 3px 15px ${style.linearColor1}, inset 3px 3px 15px ${style.linearColor1}` }}>
                <h2>User Registration</h2>
                <input type='text' id="name" name="name" value={name} onChange={handleName} placeholder='Enter your name' required />
                <input type='email' id="mail" name="mail" value={mail} onChange={handleMail} placeholder='Enter your E-mail' required />
                <input type='text' id="phone" name="phone" value={phone} onChange={handlePhone} placeholder='Enter your Phone number' required />

                <div className='colorPick'>
                    <div>Choose your Background Color : </div>
                    <div className='colors'>
                        <div id="black" onClick={handleColor} value="black" style={{ boxShadow: color === 'black' ? '5px 5px 25px black inset' : '' }}>black</div>
                        <div id="white" onClick={handleColor} value="white" style={{ boxShadow: color === 'white' ? '5px 5px 25px white inset' : '' }}>white</div>
                        <div id="skyblue" onClick={handleColor} value="skyblue" style={{ boxShadow: color === 'skyblue' ? '5px 5px 25px skyblue inset' : '' }}>skyblue</div>
                    </div>
                </div>
                <button type="submit" className='registerButton'>Submit</button>
            </form>
            <div className="userInfo" style={{ display: isSubmit ? "flex" : "none", backgroundColor: info.color, color: info.color === "black" ? 'white' : '', boxShadow: `5px 5px 25px ${info.color}` }}>
                <h2>User Information</h2>
                <div id="userName">Name - {info.name}</div>
                <div id="userEmail">Email - {info.mail}</div>
                <div id="userPhone">Phone Number - {info.phone}</div>
            </div>
        </div>
    );
}

export default Registration;



