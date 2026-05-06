import Image from "next/image";
import Link from "next/link";
import MetaHead from "@/components/MetaHead";
import { businessWork, projects, services, skillGroups } from "@/data/portfolio";

const cvPath = "/2425_CV_patryklagoda_1-1.pdf";

export default function Home() {
  return (
    <>
      <MetaHead
        title="Patryk Lagoda - Programming Student & Web Developer"
        description="Patryk Lagoda builds clean websites, web applications, automation tools, and practical digital solutions for real-world use."
      />

      <main className="site-shell" id="top">
        <nav className="topbar" aria-label="Main navigation">
          <Link className="brand" href="/" aria-label="Patryk Lagoda home">
            <img src="/favicon.ico" alt="" width="28" height="28" />
          </Link>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#work">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            <Link href="/resume">CV</Link>
          </div>
        </nav>

        <section className="hero-card" aria-labelledby="hero-title">
          <Image
            src="/profilePicture.png"
            alt="Patryk Lagoda"
            width={132}
            height={132}
            className="avatar"
            priority
          />
          <p className="eyebrow">Programming Student & Web Developer</p>
          <h1 id="hero-title">Patryk Lagoda</h1>
          <p className="intro">
            I build practical web applications, clean websites, and digital tools that
            solve real problems.
          </p>
          <div className="hero-actions centered" aria-label="Primary actions">
            <a className="button primary" href="#work">
              View Projects
            </a>
            <a className="button secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </section>

        <section className="summary-strip" aria-label="Professional summary">
          <article>
            <span>Core work</span>
            <p>Clean websites, web applications, automation tools, and practical digital solutions.</p>
          </article>
          <article>
            <span>Real deployment</span>
            <p>VPS hosting, domains, SSL, PM2, deployment planning, and production setup.</p>
          </article>
          <article>
            <span>Business direction</span>
            <p>Building a serious portfolio for future clients, small businesses, and recruiters.</p>
          </article>
        </section>

        <section className="content-section about-section" id="about" aria-labelledby="about-title">
          <div className="section-header centered-header">
            <p className="eyebrow">About</p>
            <h2 id="about-title">Hands-on developer with real project experience.</h2>
          </div>
          <div className="about-panel">
            <p>
              My name is Patryk Lagoda. I am a programming student and web developer from
              Belgium. I graduated magna cum laude with an Associate Degree in Programming
              from AP Hogeschool Antwerpen, and I am currently studying Professional
              Bachelor Applied Computer Science at AP Hogeschool Antwerpen.
            </p>
            <p>
              I like building real, deployed projects instead of only theoretical demos. I
              own a VPS and the domain lagodapat.com, and I already have real projects
              online, including dpwedding.eu. My goal is to start my own business soon, so
              this portfolio is designed to present my work in a serious, polished, and
              practical way.
            </p>
            <div className="about-highlights" aria-label="Professional highlights">
              <span>Magna cum laude graduate</span>
              <span>Applied Computer Science student</span>
              <span>VPS and domain owner</span>
              <span>Real deployed projects</span>
            </div>
          </div>
        </section>

        <section className="content-section" id="services" aria-labelledby="services-title">
          <div className="section-header">
            <p className="eyebrow">Services</p>
            <h2 id="services-title">Practical digital solutions for real-world use.</h2>
            <p>
              I help turn ideas, business needs, and technical problems into working online
              solutions with a clear purpose.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="work" aria-labelledby="work-title">
          <div className="section-header">
            <p className="eyebrow">Featured projects</p>
            <h2 id="work-title">Examples of practical technical work.</h2>
            <p>
              These projects show frontend development, backend thinking, deployment
              experience, automation, and the ability to move from idea to working result.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <Image
                  src={project.image}
                  alt=""
                  width={720}
                  height={420}
                  className="project-image"
                />
                <div className="project-body">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-actions">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        Visit project
                      </a>
                    )}
                    {project.sourceUrl && (
                      <a href={project.sourceUrl} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="skills" aria-labelledby="skills-title">
          <div className="section-header">
            <p className="eyebrow">Skills</p>
            <h2 id="skills-title">A practical full-stack skill set.</h2>
            <p>
              My strengths are software development, real deployment experience,
              infrastructure curiosity, automation, and practical problem-solving.
            </p>
          </div>

          <div className="skill-group-grid">
            {skillGroups.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section business-focus" aria-labelledby="business-title">
          <div className="section-header">
            <p className="eyebrow">Business focus</p>
            <h2 id="business-title">For small businesses, freelancers, and entrepreneurs.</h2>
            <p>
              I help small businesses, freelancers, and entrepreneurs get a professional
              online presence and simple digital tools that save time.
            </p>
          </div>

          <div className="pill-list" aria-label="Possible work">
            {businessWork.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Have a project, business idea, or website that needs improvement?</h2>
            <p>
              Let’s talk about a practical next step. I can help with websites, small
              tools, automation, deployment, or turning an idea into something usable online.
            </p>
          </div>

          <div className="contact-panel compact-contact" aria-label="Contact details">
            <a className="contact-method primary-method" href="mailto:lagoda.patryk@gmail.com">
              <span>Email</span>
              lagoda.patryk@gmail.com
            </a>
            <a
              className="contact-method"
              href="https://github.com/xdpatrykxd"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              github.com/xdpatrykxd
            </a>
            <a
              className="contact-method"
              href="https://www.linkedin.com/in/patryk-lagoda-505a54309/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              patryk-lagoda
            </a>
            <div className="contact-actions">
              <a className="button primary" href="mailto:lagoda.patryk@gmail.com">
                Contact Me
              </a>
              <Link className="button secondary" href="/resume">
                View CV
              </Link>
            </div>
          </div>
        </section>

        <a className="back-to-top" href="#top" aria-label="Back to top">
          ↑
        </a>
      </main>
    </>
  );
}
