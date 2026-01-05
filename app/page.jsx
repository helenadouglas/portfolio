"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
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
      <main className={"page"}>
          <section className="frame">
              {/* gradient / noise background */}
              <div className="noise-panel" />
              <div className={"left-column"}>
                  <div>
                      <h1 className={"name"}>Helena Douglas</h1>
                      <p className={"role"}>Full-stack Developer</p>

                      <nav className="nav">
                          <Link href="/projects" className="nav-item">
                              PROJECTS
                          </Link>
                          <Link href="/about" className="nav-item">
                              ABOUT ME
                          </Link>
                          <Link href="/contact" className="nav-item">
                              CONTACT
                          </Link>
                      </nav>
                  </div>
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
              </div>

            <div className={"right-column"}>
                <p>
                    Born in 2002 in Oslo, Norway.
                    <br />
                    Currently taking my master's degree in Informatics: Programming and System Architecture at the University of Oslo.
                    <br />
                    Passionate about building web applications and exploring new technologies.
                </p>
            </div>
          </section>
      </main>
    );
}
