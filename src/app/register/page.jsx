import React from "react";
import RegisterForm from "./components/RegisterForm";

const RegisterPage = () => {
	

	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Register now!</h1>
					<p className="py-6">
						Offers will be gone soon. be the first to avail it.
					</p>
				</div>

				<div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
					<div className="card-body">
						<RegisterForm></RegisterForm>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
