import MetaHead from "@/components/MetaHead";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/About.module.css"; // Use the updated styles
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function About() {
  return (
    <>
      <MetaHead
        title="About – Lagoda Patryk"
        description="Learn more about Lagoda Patryk, a passionate web developer."
        image="/images/portfolio-preview.jpg"
      />
      <Header />

      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <section className={styles.aboutSection}>
            <h1>About Me</h1>

            <div className={styles.contentWrapper}>
              {/* About Content Section */}
              <div className={styles.aboutContent}>
                {/* Bio Section */}
                <section className={styles.bio}>
                  <div className={styles.bioImageContainer}>
                    <img
                      src="/profilePicture.png"
                      alt="Patryk Lagoda"
                      className={styles.bioImage}
                    />
                  </div>
                  <h2>Wie ben ik?</h2>
                  <p>
                    Ik ben een gepassioneerde webontwikkelaar met een sterke
                    focus op het bouwen van dynamische, responsieve en
                    gebruiksvriendelijke webapplicaties. Met meer dan twee jaar
                    ervaring in moderne webtechnologieën, geniet ik van het
                    oplossen van problemen en het creëren van intuïtieve
                    gebruikerservaringen.
                  </p>
                  <p>
                    Mijn expertise omvat full-stack ontwikkeling met React,
                    Next.js, Node.js, en meer. Ik sta altijd open om nieuwe
                    technologieën te leren en mijn vaardigheden uit te breiden.
                  </p>
                </section>

                {/* Stage Info Section */}
                <section className={styles.stageInfo}>
                  <h2>Mijn Stage bij Brightest</h2>
                  <p>
                    Op dit moment loop ik stage bij <strong>Brightest</strong>,
                    een Belgisch consultancybedrijf dat zich richt op
                    softwarekwaliteit en testing. Ik ben ontzettend enthousiast
                    over deze kans, omdat het mij de gelegenheid biedt om
                    diepgaande inzichten te krijgen in de wereld van
                    softwaretesten en kwaliteitsbewaking.
                  </p>
                  <p>
                    Brightest is een bedrijf dat hoogwaardige
                    softwareoplossingen levert aan zijn klanten, met een sterke
                    focus op samenwerking, innovatie en continue verbetering. Ze
                    helpen organisaties bij het creëren van betrouwbare software
                    door middel van innovatieve diensten en de inzet van een
                    team van ervaren consultants. Het is geweldig om deel uit te
                    maken van zo'n dynamisch en vooruitstrevend bedrijf.
                  </p>
                  <p>
                    Als stagiair ben ik actief betrokken bij het automatiseren
                    van tests en het verbeteren van de softwarekwaliteit door
                    het toepassen van diverse testtechnieken. Mijn werk richt
                    zich voornamelijk op het bouwen van een gebruikersinterface
                    (UI) voor een testing framework in <strong>Selenium</strong>
                    , waarmee we de automatisering en effectiviteit van onze
                    testprocessen verbeteren.
                  </p>
                  <p>
                    Deze stage biedt mij de mogelijkheid om niet alleen te leren
                    over softwaretesten, maar ook om waardevolle ervaring op te
                    doen in het ontwikkelen van betrouwbare en robuuste
                    applicaties. Het is bijzonder waardevol om mijn technische
                    vaardigheden te combineren met de inzichten die ik krijg
                    over hoe bedrijven als Brightest samenwerken met klanten om
                    kwalitatieve softwareoplossingen te bieden.
                  </p>
                  <p>
                    Mijn tijd bij Brightest is een ongelooflijke leerervaring,
                    en ik kijk ernaar uit om mijn kennis verder uit te breiden
                    en bij te dragen aan het succes van het team. Het stelt me
                    in staat om te begrijpen hoe belangrijk het is om te blijven
                    leren en te innoveren in de software-industrie, en ik ben
                    dankbaar voor de kans om onderdeel uit te maken van dit
                    inspirerende bedrijf.
                  </p>
                  <div className={styles.logoContainer}>
              <img
                src="/brightestLogo.png"
                alt="Brightest Logo"
                className={styles.brightestLogo}
              />
              <address className={styles.address}>
                <strong>Brightest HQ</strong>
                <br />
                Satenrozen 10
                <br />
                2550 Kontich, Belgium
              </address>
            </div>
                </section>

                {/* Projects Section */}
                <section className={styles.projects}>
                  <h2>Projecten</h2>
                  <p>Hier zijn enkele projecten waar ik trots op ben:</p>
                  <ul>{/* Voeg project links of een showcase toe */}</ul>
                </section>
              </div>

              {/* Skills and Contact Section */}
              <div className={styles.skillsAndContact}>
                {/* Skills Section */}
                <section className={styles.skills}>
                  <h2>Skills</h2>
                  <ul className={styles.skillList}>
                    <li>JavaScript / TypeScript</li>
                    <li>React / Next.js</li>
                    <li>Node.js</li>
                    <li>ASP.NET / C#</li>
                    <li>HTML / CSS</li>
                    <li>MySQL</li>
                    <li>Git</li>
                    <li>Adobe Photoshop</li>
                    <li>Microsoft Office</li>
                  </ul>
                </section>

                {/* Contact Section */}
                <section className={styles.contact}>
                  <h2>📬 Contact</h2>
                  <p>
                    Zin om samen te werken, een vraag te stellen of gewoon hallo
                    te zeggen? Ik hoor graag van je!
                  </p>
                  <ul className={styles.contactList}>
                    <li>
                      <Link href="mailto:lagoda.patryk@gmail.com">
                        <p className="link">✉️ lagoda.patryk@gmail.com</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/in/patryk-lagoda-505a54309/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="link">💼 LinkedIn: /patryk-lagoda</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://github.com/lagodapatryk"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="link">🐙 GitHub: /xdpatrykxd</p>
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
