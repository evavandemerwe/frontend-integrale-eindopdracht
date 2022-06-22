import React, {useContext, useEffect} from 'react';
import { pageInnerContainer } from './Login.css';
import Button from '../../components/button/Button'
import {AuthContext} from "../../context/AuthContext";
import axios from 'axios';
import LoginForm from "../../components/forms/LoginForm";
import Header from "../../components/header/Header";

function Login() {

    const {login} = useContext(AuthContext);

    useEffect(() => {
        document.documentElement.style.setProperty('--dynamic-background-color', '#BFD7EA')
    }, []);

    async function signUpRequest() {
        try{
            const result = await axios.post(' https://frontend-educational-backend.herokuapp.com/api/auth/signup', {

                "username": "Eva",
                "email" : "Eva@novi.nl",
                "password" : "123456",
            }
            )
            login(result.data.accessToken);
        } catch(e){
            console.error(e);
        }

    }


        return (
            <>
                <Header />
                <main>
                    <section className='pageOuterContainer'>
                        <div className='pageInnerContaine'>
                            <span className='seperator'>
                              <div className='loginpage-left'>
                                <h2>Login</h2>
                                <LoginForm />
                              </div>

                              <div className='seperator-line'>
                              </div>

                              <div className='registerpage-right'>
                                 <h2>Register</h2>
                                 <Button type='submit' text='Register' onClick={signUpRequest}/>
                              </div>
                            </span>
                         </div>
                    </section>
                </main>
            </>
        )
    }

export default Login;