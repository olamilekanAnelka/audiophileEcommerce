import '../components/login.css';
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/userslice';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch
    const [form, setForm] = useState({

        username:"",
        password:""
    });

    

   

    
    const  handlechange = (e) =>{
        const {value, name,} = e.target;
        setForm ((state) =>  ({
            ...state,
            [name]: value
        }));
    };
    
    const resetForm = () =>{
        setForm({
            username:"",
            password:""
        });
    }

    const handleClick = async (e) => {
        e.preventDefault();
        console.log(form);
        resetForm();

        /* try {
      const response = await axios.post('https://user-auth-8ruy.onrender.com/api/auth/login', form);
      setForm(response.data.user); // Set the logged-in user in state or local storage
       navigate.push('/'); // Route to the home component after logging in
    } catch (error) {
      console.error(error);
    }
  };
*/
  try {
    const response = await axios.post('https://user-auth-8ruy.onrender.com/api/auth/login', JSON.stringify(form), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const { username, email, password } = form;
    dispatch(login({
        username: username,
        email: email,
        password: password,
        loggedIn: true,
    }));
    
    console.log(response.data); // Display the response data in the console
    navigate('/'); // Route to the home component after logging in
  } catch (error) {
    console.error(error);
  }
};


    return(
        <>
          <div className="loginwrapper">
            <div className="wrapper">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div>
                    <a class="navbar-brand" href="#">audiophile</a></div>
                    <div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">HEADPHONES</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled">SPEAKERS</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled">EARPHONES</a>
                        </li>
                    </ul>
                    </div>
                    </div>
                    <div>
                    <i class="fa-regular fa-cart-shopping"></i>
                    </div>
                </div>
            </nav>
            </div>

            <div className="Gobackbtn">
                <button>Go Back</button>
            </div>

            <div className="form">
                <h1>LOGIN</h1>
                <form>
                <div>
                        <label for='username'>Username</label><br/>
                        <input type="text" value={form.username} onChange={handlechange} name="username" placeholder='' />
                    </div>
                    <div>
                        <label for='password'>Password</label><br/>
                        <input type="password" value={form.password} onChange={handlechange} name="password" placeholder='' />
                    </div>
                    <button className="btn btn-primary loginbutton" onClick={handleClick}>
                        CONTINUE & SIGNUP
                    </button>
                </form>
                    
            </div>

          </div>
        </>
        
    )
}

export default Login;
