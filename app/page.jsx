import Link from "next/link";

export default function Home() {
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
                      <button className="mode-button active">LIGHT MODE</button>
                      <button className="mode-button">DARK MODE</button>
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
