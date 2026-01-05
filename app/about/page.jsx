"use client";

import Image from "next/image";
import { SiGithub, SiLinkedin } from "react-icons/si";
import "./about.css";

export default function AboutPage() {
    return (
        <div className="page">
            <div className="frame">
                <div className="noise-panel" />

                {/* LEFT COLUMN */}
                <div className="left-column">
                    <div>
                        <h1 className="name">About me</h1>
                        <p className="role">Informatics student learning full-stack development</p>
                        <p className="about-intro-left">
                            I&apos;m Helena — an informatics student in Oslo who enjoy turning ideas into practical web tools.
                            I care about solid foundations, readable code, and interfaces that feel simple to use.
                        </p>
                        <a
                            href="/Helena_Douglas_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="cv-link">
                            Download my CV
                        </a>
                        <div className="about-text">
                            <div className="about-section">
                                <h2>Currently</h2>
                                <p>
                                    Master&apos;s student in Informatics: Programming and Systems
                                    Architecture at the University of Oslo. Before that, I completed a bachelor’s in
                                    Applied Computer Technology at OsloMet and spent a semester abroad at QUT in Brisbane.
                                </p>
                            </div>

                            <div className="about-section">
                                <h2>What I work with</h2>
                                <p>
                                    I usually live somewhere between backend and frontend - designing APIs, modelling data,
                                    and wiring it up to simple, responsive UIs. Lately that&apos;s meant a lot of Java/Quarkus, React/Next.js, and cloud-hosted databases.
                                </p>
                            </div>

                            <div className="about-section">
                                <h2>Beyond the screen</h2>
                                <p>
                                    Outside of code you&apos;ll usually find me travelling, spending time outdoors,
                                    making coffees, and exploring new places around Oslo.
                                </p>
                            </div>
                            <div className="about-section">
                                <div className="social-links">
                                    <a
                                        href="https://www.linkedin.com/in/helenadouglas" // <- your real URL
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <SiLinkedin size={16} />
                                        <span> LinkedIn - helenadouglas</span>
                                    </a>

                                    <a
                                        href="https://github.com/helenadouglas"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <SiGithub size={16} />
                                        <span> GitHub - helenadouglas</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN */}
                <div className="right-column about-right">
                    <div className="about-top">
                        <div className="about-photo-wrapper">
                            <Image
                                src="/aboutMeImage.png"
                                alt="Portrait of Helena Douglas"
                                width={340}
                                height={420}
                                className="about-photo"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}