import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProdifyLogo() {
    return (
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
    )
}
