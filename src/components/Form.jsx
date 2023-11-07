/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ContactStyle from '../components/styles/ContactStyle.css'
import { validateEmail } from './utils/helper';

const Form = () => {
    const [name,  setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) =>  {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
            console.log(name, email, message);
        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'name') {
          setName(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue)
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(name);

        if (!validateEmail(email)  || !name || !message) {
            setErrorMessage('This field is required');

            return;
        }

        setName('');
        setEmail('');
        setMessage('');
    };

  return (
    <div className='container text-center'>
    <form className='form' onSubmit={handleFormSubmit}>
        <input className='name'
            value={name}
            name='name'
            onChange={handleInputChange}
            type='text'
            placeholder='Name'
            />
        <input className='email'
            value={email}
            name='email'
            onChange={handleInputChange}
            type='email'
            placeholder='Email'
            /><br></br>
        <input className='message'
            value={message}
            style={{width: '388px', height: '100px'}}
            name='message'
            onChange={handleInputChange}
            type='text'
            placeholder='Please enter message'
            />
        <button type='submit' className='button'>
            Send
        </button>
        </form>
        {errorMessage && (
            <div>
            <p className='error-text'>{errorMessage}</p>
            </div>
        )}
    </div>
  );
}

export default Form