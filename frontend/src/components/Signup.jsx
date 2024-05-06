import React, { useContext, useState } from 'react'
import { Button, Checkbox, Label, Radio, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import google from "../assets/google-logo.svg"




const Signup = () => {
    const { createUser, loginWithGoogle } = useContext(AuthContext)
    const [error, setError] = useState("error");



    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"

    function handleSignup(event) {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const userType = form.userType.value;
        createUser(email, password,userType).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Signed up successfully")
            navigate(from, { replace: true })
            // ...
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            // ..
        });

    }

    function handleRegister() {
        loginWithGoogle().then(result => {
            const user = result.user
            alert("Signed up successfully")
            navigate(from, { replace: true })
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            // ..
        });
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            <form onSubmit={handleSignup} className="lg:w-[600px] flex max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Your email" />
                    </div>
                    <TextInput id="email" type="email" placeholder="abc@xyz.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Your password" />
                    </div>
                    <TextInput id="password" type="password" required />
                </div>
                <div>
                    <div className="block w-full">
                        <Label value="User Type" />
                        {/* show user type radio     */}
                        <div className="flex w-full my-3 justify-between">
                            <div className="flex items-center gap-2">
                                <Radio id="admin" name="userType" value="admin" />
                                <Label htmlFor="admin">Admin</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio id="user" name="userType" value="user" />
                                <Label htmlFor="user">User</Label>
                            </div>
                        </div>

                    </div>



                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <p>If already have an account, please <Link to="/login" className='text-blue-600 underline'>login</Link></p>
                <Button type="submit">Sign Up</Button>
                <Button onClick={handleRegister} className=''><img src={google} alt='' className='w-6' />Login with Google</Button>
            </form>
        </div>
    )
}

export default Signup