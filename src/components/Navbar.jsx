"use client";
import Image from "next/image";
import React from "react";
import NavMenu from "./NavMenu";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
	const { data: session, status } = useSession();
	console.log(session, status);

	return (
		<div className="shadow-md">
			<div className="w-9/12 mx-auto navbar">
				<div className="navbar-start -ml-2">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{" "}
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>{" "}
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
						>
							<NavMenu></NavMenu>
						</ul>
					</div>
					<Link
						href={"/"}
						className="text-xl cursor-pointer flex items-center gap-2"
					>
						<Image
							src="/assets/logo.png"
							alt="logo image"
							width={40}
							height={40}
						></Image>
						<span className="text-2xl font-extrabold">
							<span className="text-green-600">Pro</span>
							<span>dify</span>
						</span>
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<NavMenu></NavMenu>
					</ul>
				</div>
				<div className="navbar-end gap-2 -mr-2">
					{status == "authenticated" ? (
						<button onClick={()=>signOut()} className="btn bg-green-400 hover:bg-green-500/90 transition duration-300 rounded text-sm">
							Logout
						</button>
					) : (
						<>
							<Link
								className="btn bg-green-400 hover:bg-green-500/90 transition duration-300 rounded text-sm"
								href="/register"
							>
								Register
							</Link>
							<Link
								className="btn bg-green-400 hover:bg-green-500/90 transition duration-300 rounded text-sm"
								href="/login"
							>
								Login
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
