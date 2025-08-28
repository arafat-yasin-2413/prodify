"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import SocialLogin from "./SocialLogin";



const LoginForm = () => {

    const [message, setMessage] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        toast("Submitting ...");

        try{
            const response = await signIn("credentials", {email, password, callbackUrl: "/", redirect: false});
            // router.push("/");
            // console.log({email , password});

            if(response.ok){
                toast.success("Logged in Successfully");
                router.push("/products");
                form.reset();
            }
            else{
                toast.error("Failed to Login!")
            }
        }
        catch(error){
            console.log(error);
            toast.error("Failed to Login!")
        }


        // const res = await registerUser({ name, email, password });

        // if(res.success) {
        //     setMessage("Registration successfull");
        //     form.reset();
        // }
        // else{
        //     setMessage(" XX " + res.message);
        // }
    };

    return (
        <form onSubmit={handleSubmit} className="fieldset">
            
            <label className="text-base font-semibold">Email</label>
            <input
                type="email"
                className="border-2 border-gray-200 p-2 h-12 rounded text-base  tracking-wider placeholder:text-gray-400 placeholder:text-md placeholder:font-normal"
                placeholder="your email"
                name="email"
            />
            <label className="text-base font-semibold">Password</label>
            <input
                type="password"
                className="border-2 border-gray-200 p-2 h-12 rounded text-base  tracking-wider placeholder:text-gray-400 placeholder:text-md placeholder:font-normal"
                placeholder="enter your password"
                name="password"
            />
            <div>
                <a className="link link-hover text-sm font-semibold">
                    Don't have an Account? 
                </a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>


            <div className="flex flex-col justify-center items-center mt-6">
                <p className="text-sm font-semibold">
                    Or Sign In with
                </p>

                <SocialLogin></SocialLogin>


            </div>
        </form>
    );
};

export default LoginForm;
