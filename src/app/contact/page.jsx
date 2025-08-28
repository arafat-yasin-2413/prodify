"use client";

import Container from "@/components/Container";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: API Call here

        toast.success("Message sent successfully! ✅");

        // form reset
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <Container>
            <section className="py-16 bg-white">
                <div className="w-11/12 md:w-7/12 mx-auto">
                    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                    <p className="text-gray-600 mb-8">
                        Have questions or need support? Fill out the form below and we will get back to you as soon as possible.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows={5}
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-green-400 hover:bg-green-500 cursor-pointer text-white font-semibold py-3 rounded-lg transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </Container>
    );
}
