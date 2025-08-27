import React from "react";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
    

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Want to see details of your preferred products? Hurry Up!
                    </p>
                </div>

                <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
                    <div className="card-body">
                        
                        <LoginForm></LoginForm>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
