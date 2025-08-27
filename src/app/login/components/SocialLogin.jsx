"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {

    const router = useRouter();
    const session = useSession();

    const handleSocialLogin = (providerName) =>{
        // console.log("SOCIAL LOGIN : ", providerName);
        console.log(session);
        signIn(providerName)
        console.log('after signin  :',session);
       
    }


    useEffect(()=>{
        if(session?.status == "authenticated"){
            router.push("/");
            toast.success("Login with Google Successfull");
        }
    },[session?.status])



	return (
		<p onClick={()=>handleSocialLogin("google")} className="text-2xl bg-gray-100 flex justify-center items-center gap-2 w-full p-2 mt-2 cursor-pointer">
			<span>Login with </span><FcGoogle type="button"></FcGoogle>
		</p>
	);
};

export default SocialLogin;
