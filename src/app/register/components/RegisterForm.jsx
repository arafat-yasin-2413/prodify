"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import SocialLogin from "@/app/login/components/SocialLogin";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

const RegisterForm = () => {
	const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;

		const res = await registerUser({ name, email, password });

		if (res.success) {
			form.reset();
            toast.success("Registration Successfull!");
			setMessage("Registration successfull");
		} else {
			toast.error("Something went wrong!!");
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
                <p className="text-sm font-semibold tracking-wider">
                    Already have an Account? <span><Link className="link link-hover hover:text-green-600" href="/login">Login</Link></span>
                </p>
            </div>
            <button className="btn bg-green-600 text-white tracking-wider hover:bg-green-600/90 mt-4">Register</button>

			<div className="flex flex-col justify-center items-center mt-6">
				<p className="text-sm font-semibold">Or Start with</p>

				<SocialLogin></SocialLogin>
			</div>
		</form>
	);
};

export default RegisterForm;
