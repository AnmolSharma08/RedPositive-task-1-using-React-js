import { useState } from 'react';
import './InputForm.css';
import InputTable from './InputTable';


function InputForm(props){

    const[enterName,SetName]=useState('');
    const[enterPhone,SetPhone]=useState('');
    const[enterEmail,SetEmail]=useState('');
    const[enterHobby,SetHobby]=useState('');


    function NameHandler(event)
    {
        SetName(event.target.value);
    }
    function PhoneHandler(event)
    {
        SetPhone(event.target.value);
    }
    function EmailHandler(event)
    {
        SetEmail(event.target.value);
    }
    function HobbyHandler(event)
    {
        SetHobby(event.target.value);
    }


    function SubmitHandler(event){
        event.preventDefault();
        const data={
            name:enterName,
            phone:enterPhone,
            email:enterEmail,
            hobby:enterHobby
        };

        // Collected Form data 

    // NOw i want to pass data object to InputTable.js for this
    // 1. i will pass data to App.js then 
    // 2. app will pass it to InputTable.js through props
    

        // Passing to App.js
        // Setdata(data);
        props.DataComing(data);


        // TWO WAY BINDING 
        SetEmail('');
        SetPhone('');
        SetName('');
        SetHobby('');

    }




    return(
            <div className="container">
                <div className="form-container glow">
                <h2>RedPositive Task</h2>
                    <form id="entry-form" onSubmit={SubmitHandler}>
                        <div className="form-field">
                            <label for="name">Name:</label>
                            <input type="text" id="name"  value={enterName} required onChange={NameHandler} />
                        </div>
                        <div className="form-field">
                            <label for="phone">Phone Number:</label>
                            <input type="tel" id="phone"  value={enterPhone} pattern="[0-9]+" maxlength="12" minlength="10" required onChange={PhoneHandler}  />
                        </div>
                        <div className="form-field">
                            <label for="email">Email:</label>
                            <input type="email" id="email"  value={enterEmail} required onChange={EmailHandler} />
                        </div>
                        <div className="form-field">
                            <label for="hobbies">Hobbies:</label>
                            <input type="text" id="hobbies"  value={enterHobby} onChange={HobbyHandler}  />
                        </div>
                <button type="submit">Save</button>
                    </form>
                </div>  
            </div>      
    );
}

export default InputForm;