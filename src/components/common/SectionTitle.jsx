import { useTheme } from "../../context/ThemeContext";
import useSectionReveal from "../../hooks/useSectionReveal";

export default function SectionTitle({ children, sub }) {
  const { t } = useTheme();
  const [ref, visible] = useSectionReveal(0.2);

  return (
    <div
      ref={ref}
      style={{
        marginBottom: 48,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6 }}>
        {/* Animated accent line */}
        <div style={{
          height: 2, borderRadius: 2,
          background: `linear-gradient(90deg, ${t.gFrom}, ${t.gTo})`,
          width: visible ? 48 : 0,
          transition: "width 0.6s ease 0.2s",
        }} />
        <span style={{
          fontSize: 13, fontWeight: 600, textTransform: "uppercase",
          letterSpacing: 2, color: t.primary,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.5s ease 0.3s",
        }}>
          {sub}
        </span>
      </div>

      {/* Title with gradient shimmer on the key word */}
      <h2 style={{
        fontSize: 36, fontWeight: 800, letterSpacing: -0.5,
        background: `linear-gradient(90deg, ${t.text} 0%, ${t.primary} 50%, ${t.text} 100%)`,
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        animation: visible ? "titleShimmer 3s linear infinite" : "none",
      }}>
        {children}
      </h2>

      <style>{`
        @keyframes titleShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </div>
  );
}