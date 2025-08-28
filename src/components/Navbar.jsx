"use client";
import Image from "next/image";
import React from "react";
import NavMenu from "./NavMenu";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import ProdifyLogo from "./ProdifyLogo";
import { IoMenu } from "react-icons/io5";
import ThemeToggle from "@/app/components/ThemeToggle";

const Navbar = () => {
    const { data: session, status } = useSession();
    console.log(session);

    return (
        <div className="shadow-md sticky top-0 z-1 backdrop-blur-lg">
            <div className="w-9/12 mx-auto navbar ">
                <div className="navbar-start gap-2 -ml-2">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="cursor-pointer lg:hidden"
                        >
                            <IoMenu className="text-3xl"></IoMenu>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <NavMenu></NavMenu>
                        </ul>
                    </div>
                    <ProdifyLogo></ProdifyLogo>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavMenu></NavMenu>
                    </ul>
                </div>

                <div className="navbar-end gap-2 -mr-2">
                    <ThemeToggle />

                    {status == "authenticated" ? (
                        <>
                            {session?.user?.image ? (
                                <Image
                                    className="rounded-full"
                                    src={session.user.image}
                                    width={36}
                                    height={36}
                                    alt={session.user.name ?? "User"}
                                />
                            ) : (
                                <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center">
                                    {session?.user?.name?.[0] || "U"}
                                </div>
                            )}
                            <button
                                onClick={() => signOut()}
                                className="btn bg-green-400 hover:bg-green-500/90 transition duration-300 rounded text-sm"
                            >
                                Logout
                            </button>
                        </>
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

                {/* previous */}
                {/* <div className="navbar-end gap-2 -mr-2">

                    <div className="flex">
                        <div>
                            <ThemeToggle></ThemeToggle>
                        </div>

                        <div>
                            {status == "authenticated" ? (
                                <>
                                    {session?.user?.image ? (
                                        <Image
                                            className="rounded-full"
                                            src={session.user.image}
                                            width={36}
                                            height={36}
                                            alt={session.user.name ?? "User"}
                                        />
                                    ) : (
                                        <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center">
                                            {session?.user?.name?.[0] || "U"}
                                        </div>
                                    )}
                                    <button onClick={() => signOut()} className="btn bg-green-400 hover:bg-green-500/90 transition duration-300 rounded text-sm">
                                        Logout
                                    </button>

                                </>
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
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;
