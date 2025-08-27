import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
	return (
		<p className="text-2xl bg-gray-100 flex justify-center items-center gap-2 w-full p-2 mt-2 cursor-pointer">
			<span>Login with </span><FcGoogle></FcGoogle>
		</p>
	);
};

export default SocialLogin;
