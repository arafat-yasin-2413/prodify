"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import React, { useState } from "react";

const RegisterForm = () => {

    const [message, setMessage] = useState("");


    const handleSubmit = async (e) => {
		e.preventDefault();

		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;

	    const res = await registerUser({ name, email, password });

        if(res.success) {
            setMessage("Registration successfull");
            form.reset();
        }
        else{
            setMessage(" XX " + res.message);
        }
	};

	return (
		<form onSubmit={handleSubmit} className="fieldset">
			<label className="text-base font-semibold">Name</label>
			<input
				type="text"
				className="border-2 border-gray-200 p-2 h-12 rounded text-base tracking-wider placeholder:text-gray-400 placeholder:text-md placeholder:font-normal"
				placeholder="your name"
				name="name"
			/>
			<label className="text-base font-semibold">Email</label>
			<input
				type="email"
				className="border-2 border-gray-200 p-2 h-12 rounded text-base tracking-wider placeholder:text-gray-400 placeholder:text-md placeholder:font-normal"
				placeholder="your email"
				name="email"
			/>
			<label className="text-base font-semibold">Password</label>
			<input
				type="password"
				className="border-2 border-gray-200 p-2 h-12 rounded text-base tracking-wider placeholder:text-gray-400 placeholder:text-md placeholder:font-normal"
				placeholder="enter your password"
				name="password"
			/>
			<div>
				<a className="link link-hover text-sm font-semibold">
					Forgot password?
				</a>
			</div>
			<button className="btn btn-neutral mt-4">Register</button>
		</form>
	);
};

export default RegisterForm;
