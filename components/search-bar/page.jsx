"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ placeholder = "Search...", onSearch }) {
	const [searchTerm, setSearchTerm] = useState("");

	const handleInputChange = (e) => {
		const value = e.target.value;
		setSearchTerm(value);
		if (onSearch) {
			onSearch(value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (onSearch) onSearch(searchTerm);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex items-center bg-white/10 backdrop-blur rounded-xl shadow-md px-3 py-2 w-full max-w-3xl border border-gray-800"
		>
			<span className="text-gray-200 mr-2 flex items-center">
				<Search size={20} />
			</span>
			<input
				type="text"
				name="search"
				value={searchTerm}
				onChange={handleInputChange}
				placeholder={placeholder}
				className="flex-1 bg-transparent outline-none text-black placeholder-gray-400"
				autoComplete="off"
			/>
			<button
				type="submit"
				className="ml-2 px-4 py-1 rounded-lg bg-purple-600 text-white font-semibold shadow transition-all duration-200 focus:outline-none"
			>
				Search
			</button>
		</form>
	);
}