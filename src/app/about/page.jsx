"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { FaMedal, FaHandshake, FaLightbulb, FaUsers } from "react-icons/fa";

//
// this should be in .env.local
//NEXT_PUBLIC_BASE_URL=http://localhost:3000


export default function About() {


    return (
        <Container>



            <main className="space-y-24">

                {/* Hero Section */}
                <section className="bg-gray-50 py-24">
                    <div className="w-11/12 md:w-9/12 mx-auto flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-bold mb-6">About Prodify</h1>
                            <p className="text-gray-700 text-lg">
                                Prodify is your ultimate electronics hub. We provide a wide range of products from keyboards, mice, monitors, to home electronics. Our mission is to offer quality products at affordable prices while ensuring a smooth shopping experience for all users.
                            </p>
                        </div>
                        <div className="md:w-1/2 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/assets/about.webp"
                                alt="About Prodify"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-20 bg-white">
                    <div className="w-11/12 md:w-9/12 mx-auto grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                            <p className="text-gray-700">
                                Our mission is to connect users with the best electronics products and make online shopping hassle-free. We prioritize quality, affordability, and convenience.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                            <p className="text-gray-700">
                                We envision a world where every individual has access to the right technology that enhances their lifestyle. We aim to be the go-to electronics marketplace globally.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                {/* <section className="bg-gray-50 py-20">
                    <div className="w-11/12 md:w-9/12 mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-10">Meet Our Team</h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                            {["Alice", "Bob", "Charlie", "Dana"].map((name, idx) => (
                                <div key={idx} className="space-y-4">
                                    <div className="w-40 h-40 mx-auto relative rounded-full overflow-hidden shadow-lg">
                                        <Image
                                            src={`/assets/team-${idx + 1}.jpg`}
                                            alt={name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold">{name}</h3>
                                    <p className="text-gray-600">Team Member</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}

                {/* Values Section */}
                <section className="py-20 bg-white">
                    <div className="w-11/12 md:w-9/12 mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-12">Our Core Values</h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
                            {[
                                { title: "Quality", icon: <FaMedal className="text-4xl text-green-500 mx-auto mb-4" />, desc: "Top-notch products you can trust." },
                                { title: "Integrity", icon: <FaHandshake className="text-4xl text-green-500 mx-auto mb-4" />, desc: "Honest service and transparent pricing." },
                                { title: "Innovation", icon: <FaLightbulb className="text-4xl text-green-500 mx-auto mb-4" />, desc: "Always bringing new solutions." },
                                { title: "Customer Focus", icon: <FaUsers className="text-4xl text-green-500 mx-auto mb-4" />, desc: "Your satisfaction is our priority." }
                            ].map((val, idx) => (
                                <div key={idx} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                                    {val.icon}
                                    <h3 className="text-xl font-semibold mb-2">{val.title}</h3>
                                    <p className="text-gray-600">{val.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-green-400 text-white text-center">
                    <h2 className="text-4xl font-bold mb-4">Join Our Journey</h2>
                    <p className="text-lg mb-6">
                        Explore our products and discover why thousands of users trust Prodify.
                    </p>
                    <Link href="/products" className="bg-white text-green-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
                        Browse Products
                    </Link>
                </section>

            </main>
        </Container>
    );
}
