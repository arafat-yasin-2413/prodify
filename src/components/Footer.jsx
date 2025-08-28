import React from 'react'
import ProdifyLogo from './ProdifyLogo'
import Link from 'next/link'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="footer bg-green-500/10 footer-horizontal footer-center text-base-content rounded p-10">
            <ProdifyLogo></ProdifyLogo>
            
            <nav className="grid grid-flow-col gap-4">
                <Link href="/" className='link link-hover'>Home</Link>
                <Link href="/about" className="link link-hover">About us</Link>
                <Link href="/contact" className="link link-hover">Contact</Link>
               
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link className="text-2xl hover:text-green-600" href={"https://www.facebook.com/yasin.arafat.482092/"}><FaFacebook></FaFacebook></Link>
                    <Link className="text-2xl hover:text-green-600" href={"https://github.com/arafat-yasin-2413"}><FaGithub ></FaGithub></Link>
                    <Link className="text-2xl hover:text-green-600" href={"https://www.linkedin.com/in/yasin-arafat-web/"}><FaLinkedin ></FaLinkedin></Link>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Prodify Ltd</p>
            </aside>
        </footer>
    )
}


