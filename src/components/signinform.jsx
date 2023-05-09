import '../components/signinform.css';
import React, { useState } from 'react';
import axios from 'axios';



const SIGNUP = () =>{

    const [form, setForm] = useState({

        username:"",
        email:"",
        password:""
    });

    const  handlechange = (e) =>{
        const {value, name,} = e.target;
        setForm ((state) =>  ({
            ...state,
            [name]: value
        }))
    
    }
    const resetForm = () =>{
        setForm({
            username:"",
            email:"",
            password:""
        });
    }

    function onSubmit (e){
        e.preventDefault();
        console.log(form);
       resetForm();
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('https://user-auth-8ruy.onrender.com/api/auth/register', form)
          console.log(response.data); // Do something with the response, like show a success message or redirect to the login page
        } catch (error) {
          console.error(error);
        }
      };



    return(
        <>
          <div className="signinwrapper">
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
                <h1>REGISTER</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label for='username'>Username</label><br/>
                        <input type="text" value={form.username} onChange={handlechange} name="username" placeholder='' />
                    </div>
                    <div>
                        <label for='email'>Email</label><br/>
                        <input type="text" value={form.email} onChange={handlechange} name="email" placeholder='' />
                    </div>
                    <div>
                        <label for='password'>Password</label><br/>
                        <input type="password" value={form.password} onChange={handlechange} name="password" placeholder='' />
                    </div>

                    <button onClick={onSubmit} type='submit'>
                        CONTINUE & SIGNUP
                    </button>
                </form>
            </div>
          </div>
        </>
    )
}

export default SIGNUP;