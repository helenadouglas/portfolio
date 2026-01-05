"use client";

import { useEffect, useState } from "react";

export default function ModeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        // Read saved theme from localStorage if it exists
        if (typeof window !== "undefined") {
            const saved = window.localStorage.getItem("theme");
            if (saved === "dark" || saved === "light") {
                setTheme(saved);
                document.body.classList.toggle("dark-mode", saved === "dark");
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.localStorage.setItem("theme", theme);
            document.body.classList.toggle("dark-mode", theme === "dark");
        }
    }, [theme]);

    const enableLightMode = () => setTheme("light");
    const enableDarkMode = () => setTheme("dark");


    return (
        <div className="mode-toggle">
            <button
                className={`mode-button ${theme === "light" ? "active" : ""}`}
                onClick={enableLightMode}
            >
                LIGHT MODE
            </button>
            <button
                className={`mode-button ${theme === "dark" ? "active" : ""}`}
                onClick={enableDarkMode}
            >
                DARK MODE
            </button>
        </div>
    );
}