import Link from "next/link";
import MetaHead from "@/components/MetaHead";

const cvPath = "/2425_CV_patryklagoda_1-1.pdf";

export default function Resume() {
  return (
    <>
      <MetaHead
        title="CV - Patryk Lagoda"
        description="View or download the CV of Patryk Lagoda."
      />
      <main className="site-shell" id="top">
        <nav className="topbar" aria-label="Resume navigation">
          <Link className="brand" href="/" aria-label="Patryk Lagoda home">
            <img src="/favicon.ico" alt="" width="28" height="28" />
          </Link>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <a href={cvPath} download>
              Download CV
            </a>
          </div>
        </nav>

        <section className="resume-section" aria-labelledby="resume-title">
          <div className="resume-header">
            <div>
              <p className="eyebrow">Curriculum vitae</p>
              <h1 id="resume-title">Patryk Lagoda CV</h1>
            </div>
            <a className="button primary" href={cvPath} download>
              Download PDF
            </a>
          </div>
          <div className="resume-frame">
            <iframe src={cvPath} title="Patryk Lagoda CV" />
          </div>
        </section>

        <a className="back-to-top" href="#top" aria-label="Back to top">
          ↑
        </a>
      </main>
    </>
  );
}
