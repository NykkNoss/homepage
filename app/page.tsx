import Image from "next/image";

export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.bgOverlay} />

      <div style={styles.content}>
        <h1 style={styles.title}>QUESTO SITO È SPONSORIZZATO DA</h1>

        <div className="row">
          {/* --- CARD TRUFFALDINI --- */}
          <div style={styles.card}>
            <Image
              src="/truffaldini.png"
              alt="Logo Truffaldini"
              width={400}
              height={400}
              style={styles.img}
              priority
            />
            <p style={{ ...styles.caption, fontFamily: "Impact, Charcoal, sans-serif" }}>
              Truffiamo dal 2000
            </p>
          </div>

          {/* --- CARD VOLPE ARGENTATA (con link a Instagram) --- */}
          <a
            href="https://www.instagram.com/la.volpeargentata/?hl=it"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={styles.card}>
              <Image
                src="/VA.png"
                alt="Logo La Volpe Argentata"
                width={400}
                height={400}
                style={styles.img}
                priority
              />
              <p style={{ ...styles.caption, fontFamily: "Georgia, serif" }}>
                🍸 Liquori e fermentati fatti in casa <br />
📖 Tra il fantasy e il reale.<br />
🔍 L’unica cosa autentica? Il sapore.<br />
clicca per scoprire di più
              </p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}

const styles: { [k: string]: React.CSSProperties } = {
  main: {
    position: "relative",
    minHeight: "100svh",
    width: "100%",
    overflow: "hidden",
    color: "#fff",
    display: "grid",
    placeItems: "center",
    background: "radial-gradient(1200px 600px at 20% 10%, #1a1a1a, #000)",
  },
  bgOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0,0,0,.65) 40%, rgba(0,0,0,.85))",
    pointerEvents: "none",
  },
  content: {
    position: "relative",
    zIndex: 1,
    maxWidth: 1200,
    width: "100%",
    padding: "32px 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "clamp(24px, 3vw, 40px)",
    fontWeight: 800,
    letterSpacing: ".04em",
    margin: "0 0 28px",
    fontFamily: "Arial Black, sans-serif",
  },
  card: {
    backdropFilter: "blur(6px)",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 20,
    padding: 20,
    boxShadow: "0 10px 30px rgba(0,0,0,.45)",
    width: "min(420px, 92vw)",
    justifySelf: "center",
    textAlign: "center",
    transition: "transform 0.2s ease",
  },
  img: {
    width: "100%",
    height: "auto",
    borderRadius: 14,
    display: "block",
    marginBottom: 12,
  },
  caption: {
    margin: 0,
    fontSize: "clamp(14px, 1.5vw, 18px)",
    fontWeight: 500,
    opacity: 0.9,
  },
};
