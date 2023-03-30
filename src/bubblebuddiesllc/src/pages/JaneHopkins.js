import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../firebase-config';
import {useState} from "react";
import { useEffect } from 'react';

const JaneHopkins = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    useEffect(() => {

        onAuthStateChanged(auth, (currentUser) => {
    
            setUser(currentUser);
    
        });
    });
    
    const register = async () => {
        try{
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }

    const login = async () => {
        try{
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user);
            } catch (error) {
                console.log(error.message);
            }
    }

    const logout = async () => {

        await signOut(auth);
    }

    return (
        <div className="jane-hopkins">
            <div>
                <h2>Jane Hopkins Portal</h2>
                <h3>Register User</h3>
                <input class = "input1"
                    placeholder="Email..." 
                    onChange={(event) => {
                        setRegisterEmail(event.target.value)
                        }} 
                />
                <input
                    placeholder="Password..."
                    onChange={(event) => {
                        setRegisterPassword(event.target.value)
                    }}
                 />

                <button onClick={register}> Create User</button>
            </div>

            <div>
                <h3>Login</h3>
                <input 
                    placeholder="Email..."
                    onChange={(event) => {
                        setLoginEmail(event.target.value)
                        }}
                />
                <input 
                    placeholder="Password..." 
                    onChange={(event) => {
                        setLoginPassword(event.target.value)
                        }}
                />

                <button onClick={login}> Log In</button>
            </div>

            <div>
                <h4>User Logged In: </h4>
                {user ? user.email: "Not Logged In"}
                <button onClick={logout}>Log Out</button>
            </div>

        </div>
    );
}

export default JaneHopkins;