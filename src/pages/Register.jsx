import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { checkEmailApi, registerApi } from '../services/allApi';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });


    const nav=useNavigate


    const handleRegister = async () => {
        console.log(user);
        const { username, email, password } = user;
        if ( !username || !email || !password) {
            toast.warning("Enter valid input!!");
        } else {
            const result = await checkEmailApi(email);
            console.log(result);
            if (result.data.length > 0) {
                toast.warning("Email ID Already Used!!");
            } else {
                const result=await registerApi(user)
                if(result.status==201){
                    toast.success("Registration Successfull!!")
                    setUser({
                        email:"",usename:"",password:""
                    })
                    nav('/log')


                }
                else{
                    toast.error("registration failed!!")
                    console.log(result);
                    
                }
                toast.success("User Registered!!");
            }
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center align-item-center p-5 m-4" style={{ height: "95vh" }}>
                <div className="w-75 border shadow bg-light p-5">
                    <h1>Register</h1>
                    <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="Enter Email ID"
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Enter Username"
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                    />
                    <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="Enter Password"
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-success" onClick={handleRegister}>
                            Register
                        </button>
                        <Link to={'/log'}>Already a User?</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
