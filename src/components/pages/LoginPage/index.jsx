import "./styles.css"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useHistory } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

export const LoginPage = () => {

    const [mode, setMode] = useState("login");

    const {register, handleSubmit } = useForm();

    const history = useHistory();

    const loginUser = async(formVals) => {
        
        try {
            console.log("Login Submitted", formVals);
            const auth = getAuth();
            console.log("before", auth);
            const loginUser = await signInWithEmailAndPassword(auth, formVals.user, formVals.password);
            console.log("after login", auth);
            history.push('/');
            console.log(auth, loginUser);
        } catch (error) {
            console.log ("Error connecting to firebase", error)
        }
    }

    const signUpUser = async(formVals) => {
        console.log("Sign Up Submitted", formVals)
        const auth = getAuth();

        try {
            const signUpUser = await createUserWithEmailAndPassword(auth, formVals.user, formVals.password);
            console.log("New user was created", signUpUser);
            history.push('/');
        } catch (error){
            //handle incorrect password at here
            console.log("Error from firebase", error)
        }
    }

    return (
        <div className="Accessories-page">
            
            {
                mode === "login" && (
                    <form className="form-layout" onSubmit={handleSubmit(loginUser)}>
                        <h2>Welcome back, please sign in!</h2>
                        <br />

                        <label htmlFor="user">Username</label>
                        <input type="email" name="user" required {...register('user')}/>

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required {...register('password')}/>

                        <input type="submit" value="Login" />
                        <br />
                        <p> Don't have an account with us yet? Create a new account with your email and password.</p>
                        <button onClick={() => setMode("signup")}>Sign Up</button>
                    </form>
                )
            }

            {
                mode === "signup" && (
                    <form className="form-layout" onSubmit={handleSubmit(signUpUser)}>
                        <h2>Create a new account now!</h2>
                        <br />

                        <label htmlFor="user">Email</label>
                        <input type="email" name="user" required {...register('user')}/>

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required {...register('password')}/>

                        <label htmlFor="passwordConfirm">Confirm password</label>
                        <input type="password" name="passwordConfirm" required {...register('password')}/>

                        <input type="submit" value="Sign Up" />
                        <br />
                        <p> Have an account with us? Login your account with your email and password.</p>
                        <button onClick={() => setMode("login")}>Login</button>
                    </form>
                )
            }
        </div>
    )
}