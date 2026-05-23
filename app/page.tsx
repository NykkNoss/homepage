import Image from "next/image";

const appLinks = [
  {
    title: "Dispensa",
    image: "/dipensa.png",
    alt: "Icona Dispensa",
    href: "https://dispensa.nicoberghi.net/"
  },
  {
    title: "Dashboard Ore",
    image: "/dashboard.png",
    alt: "Icona Dashboard Ore",
    href: "https://dashboard.nicoberghi.net/"
  },
  {
    title: "Spese Casa",
    image: "/spese.png",
    alt: "Icona Spese Casa",
    href: "https://spese.nicoberghi.net/"
  }
];

const sponsor = {
  title: "La Volpe Argentata",
  image: "/volpe.png",
  alt: "Logo La Volpe Argentata",
  href: "https://www.instagram.com/la.volpeargentata/?hl=it",
  description: (
    <>
      {"\u{1F378}"} Liquori e fermentati fatti in casa
      <br />
      {"\u{1F4D6}"} Tra il fantasy e il reale.
      <br />
      {"\u{1F50D}"} L&apos;unica cosa autentica? Il sapore.
      <br />
      clicca per scoprire di pi{"\u00f9"}
    </>
  )
};

export default function Home() {
  return (
    <main className="home">
      <div className="bg-overlay" />

      <section className="content" aria-label="Link principali">
        <header className="site-header">
          <div className="brand-plate">
            <Image
              className="brand-logo"
              src="/logo.png"
              alt="Noss Production"
              width={260}
              height={120}
              priority
            />
          </div>
        </header>

        <section className="link-section" aria-labelledby="apps-title">
          <h1 id="apps-title">Applicazioni</h1>
          <div className="app-grid">
            {appLinks.map((link) => (
              <a
                className="link-card compact-card"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                key={link.href}
              >
                <Image
                  className="link-image"
                  src={link.image}
                  alt={link.alt}
                  width={132}
                  height={132}
                />
                <div className="link-copy">
                  <h2>{link.title}</h2>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="link-section sponsor-section" aria-labelledby="sponsor-title">
          <h1 id="sponsor-title">QUESTO SITO È SPONSORIZZATO DA</h1>
          <div className="sponsor-grid">
            <a
              className="link-card featured-card"
              href={sponsor.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="link-image"
                src={sponsor.image}
                alt={sponsor.alt}
                width={260}
                height={260}
                priority
              />
              <div className="link-copy">
                <h2>{sponsor.title}</h2>
                <p>{sponsor.description}</p>
              </div>
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
