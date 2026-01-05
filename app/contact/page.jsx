import { SiMailboxdotorg, SiGithub, SiLinkedin } from "react-icons/si";
import "./contact.css";

export default function ContactPage() {
    return (
        <div className="page">
            <div className="frame contact-frame">
                <div className="noise-panel" />
                {/* LEFT COLUMN */}
                <div className="left-column contact-left">
                    <div className="left-top">
                        <h1 className="name">Contact</h1>
                        <p className="role">Let&apos;s get in touch</p>
                    </div>

                    <p className="contact-intro">
                        Based in Oslo — open for internships, part-time work, and interesting side projects.
                    </p>

                    <div className="contact-meta">
                        <span className="contact-meta-label">Currently interested in</span>
                        <ul className="pill-list">
                            <li>Backend / full-stack roles</li>
                            <li>Learning + contributing to real-world projects</li>
                            <li>Web apps & APIs</li>
                            <li>Remote or Oslo-based teams</li>
                        </ul>
                    </div>

                    <p className="contact-meta-secondary">
                        Time zone: CET · Languages: Norwegian &amp; English
                        <br />
                        Always happy to grab a coffee in Oslo ☕
                    </p>
                </div>

                {/* RIGHT COLUMN */}
                <div className="right-column contact-content">
                    <section className="contact-intro-block">
                        <p>
                            If you&apos;d like to talk about projects, internships, study
                            collaborations or just say hi, feel free to reach out.
                        </p>
                    </section>

                    <section className="contact-list">
                        <div className="contact-item">
                            <span className="contact-label">Email</span>
                            <a
                                href="mailto:helena.m.douglas02@gmail.com"
                                className="contact-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiMailboxdotorg size={16} />
                                <span>helena.m.douglas02@gmail.com</span>
                            </a>
                        </div>

                        <div className="contact-item">
                            <span className="contact-label">LinkedIn</span>
                            <a
                                href="https://www.linkedin.com/in/helenadouglas"
                                className="contact-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiLinkedin size={16} />
                                <span>helenadouglas</span>
                            </a>
                        </div>

                        <div className="contact-item">
                            <span className="contact-label">GitHub</span>
                            <a
                                href="https://github.com/helenadouglas"
                                className="contact-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiGithub size={16} />
                                <span>helenadouglas</span>
                            </a>
                        </div>
                    </section>

                    <p className="contact-note">I usually reply within a few days 💌</p>
                </div>
            </div>
        </div>
    );
}