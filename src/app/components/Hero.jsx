import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import heroImage from "../../../public/assets/hero.webp"

const Hero = () => {
	return (
		<Container>
			<div>
				<div className="relative h-[400px] xl:h-[600px] w-full">
					<Image
						className="object-cover rounded-2xl"
						src={heroImage}
						alt="hero image"
						fill
					></Image>

					<div className="absolute inset-0 bg-black/40 rounded-2xl flex flex-col items-center justify-center text-center px-6">
						<h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
							Discover the Future of Electronics
						</h1>
						<p className="mt-6 text-base lg:text-xl text-gray-200 max-w-2xl">
							Premium gadgets and accessories designed to upgrade
							your lifestyle.
						</p>
                        <Link href="/products">
						<button className="mt-8 px-2 py-1 xl:px-4 xl:py-2 text-sm bg-green-600 hover:bg-green-600/90 text-white font-semibold tracking-wider rounded shadow-lg transition cursor-pointer">
							All Products
						</button>
                        </Link>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Hero;
