import React from 'react'
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import app from "./api/firebase";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import redis from '../utils/redis';
import Link from "next/link"
import { useRouter} from 'next/router';
const auth = getAuth(app);


type Props = {}
//get loggin detaills
function Logindetaill(props: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const Router = useRouter();
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        Router.push('/index');
    }
    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="App mt-3 flex flex-col w-80 mx-auto space-y-3 items-center justify-center">
                <h1>Signup</h1>
                <input
                    type="email"
                    className='bg-red-100 h-8 rounded-md px-2'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className='bg-red-100 h-8 rounded-md px-2'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={() => createUserWithEmailAndPassword(email, password)}
                     className="bg-blue-400 text-white hover:text-black rounded-md mx-auto p-3"
                >
                    Signup
                </button>
                <Link
                    href="/login"
                    className="text-sky-500"
                   
                >
                 Already have an account? Login
                </Link>
            </div>
        </div>
    );
};

export default Logindetaill;

/*
const Login = (props: Props) => {

    return (
        <div>login</div>
    )
}

export default Login
*/