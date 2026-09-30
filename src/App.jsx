import { useState, useEffect, useRef } from "react";
import { useTheme } from "./context/ThemeContext";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Terminal from "./components/Terminal";
import SnakeGame from "./components/SnakeGame";
import MemoryGame from "./components/MemoryGame";
import TetrisGame from "./components/TetrisGame";
import TypingGame from "./components/TypingGame";

// ─── SECTION CONFETTI CONFIG ──────────────────────────────────────────────────
// Each entry maps a section id to the emojis that burst when it enters view.
const SECTION_CONFETTI = {
  about:          ["👋", "🙌", "✌️"],
  experience:     ["💼", "⚡", "🔧"],
  projects:       ["🚀", "💻", "🛠️"],
  education:      ["🎓", "📚", "✏️"],
  certifications: ["🏆", "🎖️", "📜"],
  contact:        ["📬", "✉️", "🤝"],
};

const KONAMI = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

// Spawn a short emoji confetti burst at a random position near center-top of section
function spawnConfetti(emojis) {
  const count = 16;
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    const x = 40 + Math.random() * 20;
    const rotation = (Math.random() > 0.5 ? 1 : -1) * (180 + Math.random() * 180);
    const duration = 0.7 + Math.random() * 0.6;
    const delay = i * 0.05;
    el.style.cssText = `
      position: fixed;
      left: ${x}vw;
      top: 30vh;
      font-size: ${20 + Math.random() * 14}px;
      pointer-events: none;
      z-index: 9999;
      animation: confettiBurst ${duration}s ease-out ${delay}s forwards;
      --rot: ${rotation}deg;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1600);
  }
}

export default function App() {
  const { t } = useTheme();
  const [scrollY, setScrollY] = useState(0);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [showSnake, setShowSnake] = useState(false);
  const [showMemory, setShowMemory] = useState(false);
  const [showTetris, setShowTetris] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [konamiKeys, setKonamiKeys] = useState([]);
  const [konamiActive, setKonamiActive] = useState(false);
  const firedSections = useRef(new Set());

  // Scroll progress
  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Section confetti via IntersectionObserver
  useEffect(() => {
    const observers = [];
    Object.keys(SECTION_CONFETTI).forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !firedSections.current.has(id)) {
          firedSections.current.add(id);
          spawnConfetti(SECTION_CONFETTI[id]);
        }
      }, { threshold: 0.25 });
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  // Konami code
  useEffect(() => {
    const handler = (e) => {
      setKonamiKeys(prev => {
        const next = [...prev, e.keyCode].slice(-10);
        if (next.length === 10 && next.every((v, i) => v === KONAMI[i])) {
          setKonamiActive(true);
          setTimeout(() => setKonamiActive(false), 5000);
        }
        return next;
      });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const maxScroll = typeof document !== "undefined"
    ? document.documentElement.scrollHeight - window.innerHeight
    : 1;
  const progress = Math.min((scrollY / (maxScroll || 1)) * 100, 100);

  return (
    <div style={{
      background: t.bg, color: t.text, minHeight: "100vh",
      fontFamily: "'Figtree', -apple-system, BlinkMacSystemFont, sans-serif",
      transition: "background 0.4s, color 0.4s",
      position: "relative",
    }}>
      {/* Scroll progress bar */}
      <div style={{
        position: "fixed", top: 0, left: 0, height: 3, zIndex: 200,
        background: `linear-gradient(90deg, ${t.gFrom}, ${t.gTo})`,
        width: `${progress}%`, transition: "width 0.1s linear",
      }} />

      {/* Noise texture overlay */}
      <div style={{
        position: "fixed", inset: 0, opacity: 0.025, pointerEvents: "none", zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      <Nav scrollY={scrollY} />
      <Hero scrollY={scrollY} onOpenTerminal={() => setTerminalOpen(true)} />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <Footer />

      <Terminal
        externalOpen={terminalOpen}
        onExternalClose={() => setTerminalOpen(false)}
        onOpenSnake={() => setShowSnake(true)}
        onOpenMemory={() => setShowMemory(true)}
        onOpenTetris={() => setShowTetris(true)}
        onOpenTyping={() => setShowTyping(true)}
      />

      {showSnake  && <SnakeGame  onClose={() => setShowSnake(false)}  />}
      {showMemory && <MemoryGame onClose={() => setShowMemory(false)} />}
      {showTetris && <TetrisGame onClose={() => setShowTetris(false)} />}
      {showTyping && <TypingGame onClose={() => setShowTyping(false)} />}

      {/* Konami easter egg */}
      {konamiActive && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 300,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(0,0,0,0.8)",
        }}>
          <div style={{ textAlign: "center", color: "#fff" }}>
            <div style={{ fontSize: 72, marginBottom: 16 }}>🎉🕹️🚀</div>
            <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>You found the secret!</h2>
            <p style={{ fontSize: 16, color: "#aaa" }}>The Konami code still works. You're clearly a person of culture.</p>
            <p style={{ fontSize: 14, color: "#666", marginTop: 16 }}>Disappearing in 5 seconds...</p>
          </div>
        </div>
      )}

      {/* Back to top */}
      {scrollY > 400 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed", bottom: 28, right: 28, width: 46, height: 46, borderRadius: 14,
            border: "none", cursor: "pointer",
            background: `linear-gradient(135deg, ${t.gFrom}, ${t.gTo})`,
            color: "#fff", fontSize: 18, boxShadow: `0 4px 20px ${t.glow}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 50, transition: "all 0.3s",
          }}
        >↑</button>
      )}

      {/* Global styles */}
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slideInLeft { from{opacity:0;transform:translateX(-30px)} to{opacity:1;transform:translateX(0)} }
        @keyframes slideInRight { from{opacity:0;transform:translateX(30px)} to{opacity:1;transform:translateX(0)} }
        @keyframes scaleIn { from{opacity:0;transform:scale(0.9)} to{opacity:1;transform:scale(1)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.6} }
        @keyframes confettiBurst {
          0%   { opacity:1; transform: translateY(0) rotate(0deg) scale(1); }
          60%  { opacity:0.8; }
          100% { opacity:0; transform: translateY(-120px) rotate(var(--rot, 240deg)) scale(0.3); }
        }
        * { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth }
        body { font-family: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif; }
        ::selection { background:${t.primary}30 }

        @media (max-width: 768px) {
          section > div > div[style*="flex: 1 1 440px"] { text-align: center; }
          section > div > div[style*="flex: 0 0 320px"] { flex: 0 0 260px !important; }
          nav > div > div > div[style*="gap: 2"] { display: none !important; }
        }
        @media (max-width: 640px) {
          section[id] { padding: 60px 16px !important; }
          h1 { font-size: 36px !important; }
        }
      `}</style>
    </div>
  );
}