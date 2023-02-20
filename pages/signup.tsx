import React from 'react'
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import app from "./api/firebase";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import redis from '../utils/redis';
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
        <div className="App mt-3 flex flex-col w-80 mx-auto space-y-3 items-center justify-center">
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
            <button onClick={() => createUserWithEmailAndPassword(email, password)}>
                Register
            </button>
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