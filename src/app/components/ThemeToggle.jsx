"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme) {
			setTheme(storedTheme);
			document
				.querySelector("html")
				.setAttribute("data-theme", storedTheme);
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		document.querySelector("html").setAttribute("data-theme", newTheme);
		localStorage.setItem("theme", newTheme);
	};

	return (
		<button onClick={toggleTheme} className="bg-gray-200 cursor-pointer p-2 rounded-full">
			{theme === "light" ? (
				<FiMoon className="text-xl text-gray-800" />
			) : (
				<FiSun className="text-xl text-yellow-400" />
			)}
		</button>
	);
}
