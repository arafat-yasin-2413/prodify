import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {

    const handleSocialLogin = async(providerName) =>{
        console.log("SOCIAL LOGIN : ", providerName);

        const result = await signIn(providerName, {redirect: false})
        console.log(result);
    }



	return (
		<p onClick={()=>handleSocialLogin("google")} className="text-2xl bg-gray-100 flex justify-center items-center gap-2 w-full p-2 mt-2 cursor-pointer">
			<span>Login with </span><FcGoogle></FcGoogle>
		</p>
	);
};

export default SocialLogin;
