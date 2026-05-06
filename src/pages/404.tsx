import Link from "next/link";
import MetaHead from "@/components/MetaHead";

export default function NotFound() {
  return (
    <>
      <MetaHead title="Page not found - Patryk Lagoda" />
      <main className="not-found">
        <div>
          <p className="eyebrow">404</p>
          <h1>Page not found.</h1>
          <Link className="button primary" href="/">
            Back home
          </Link>
        </div>
      </main>
    </>
  );
}
