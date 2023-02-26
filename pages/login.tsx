import React from 'react'
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import app from "./api/firebase";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import redis from '../utils/redis';
import { useRouter} from 'next/router';
import Link from "next/link"
const auth = getAuth(app);


type Props = {}
//get loggin detaills
function Login(props: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
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
        Router.push('/');
    }
    return (
        <div className='w-screen flex h-screen justify-center items-center'>
            <div className="App flex flex-col w-80 space-y-3 mx-auto  ">
                <h1>Login</h1>
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
                <button onClick={() => signInWithEmailAndPassword(email, password)}
                    className='bg-blue-500 text-white rounded-md px-2 hover:bg-blue-200 hover:text-black'
                >
                    Submit
                </button>
                <Link
                    href="\signup"
                    className='text-blue-500'   
                >
                    Don't have an account? Sign up
                </Link>
            </div>
        </div>
    );
};

export default Login;

/*
    const Login = (props: Props) => {

        return (
            <div>login</div>
        )
    }

    export default Login
*/