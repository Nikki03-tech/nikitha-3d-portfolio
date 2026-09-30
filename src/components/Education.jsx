import { useTheme } from "../context/ThemeContext";
import Section from "./common/Section";
import SectionTitle from "./common/SectionTitle";
import data from "../config/data";

export default function Education() {
  const { t } = useTheme();

  return (
    <Section id="education">
      <SectionTitle sub="Where I studied">Education</SectionTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {data.education.map((ed, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              borderRadius: 16,
              overflow: "hidden",
              border: `1px solid ${t.border}`,
              background: t.surface,
              boxShadow: `0 2px 16px ${t.glow}`,
              minHeight: 200,
            }}
          >
            {/* School photo - left panel */}
            <div style={{
              flex: "0 0 280px",
              position: "relative",
              overflow: "hidden",
              background: `linear-gradient(135deg, ${t.gFrom}20, ${t.gTo}20)`,
            }}>
              <img
                src={ed.image}
                alt={ed.school}
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover", objectPosition: "center",
                  display: "block",
                }}
                onError={e => {
                  // fallback: show school initials if image not found
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback placeholder */}
              <div style={{
                display: "none", position: "absolute", inset: 0,
                alignItems: "center", justifyContent: "center",
                flexDirection: "column", gap: 8,
                background: `linear-gradient(135deg, ${t.gFrom}25, ${t.gTo}25)`,
              }}>
                <div style={{
                  fontSize: 36, fontWeight: 900, color: t.primary,
                  fontFamily: "'JetBrains Mono', monospace", letterSpacing: -1,
                }}>
                  {ed.school.split(" ").map(w => w[0]).slice(0, 3).join("")}
                </div>
                <div style={{ fontSize: 11, color: t.textMuted, textAlign: "center", padding: "0 12px" }}>
                  Add /{ed.image.replace("/", "")} to /public
                </div>
              </div>
            </div>

            {/* Content - right panel */}
            <div style={{
              flex: 1,
              padding: "28px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
              <h3 style={{
                fontSize: 20, fontWeight: 800, color: t.primary,
                marginBottom: 6, lineHeight: 1.3,
              }}>
                {ed.degree}
              </h3>
              <p style={{
                fontSize: 14, color: t.textSec, fontWeight: 500, marginBottom: 4,
              }}>
                {ed.school}
              </p>
              <p style={{
                fontSize: 13, color: t.textMuted, marginBottom: 16,
              }}>
                {ed.location} &nbsp;·&nbsp; {ed.period}
              </p>

              {/* Bullets */}
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                {ed.bullets.map((b, j) => (
                  <li key={j} style={{ display: "flex", gap: 10, fontSize: 13, color: t.textSec, lineHeight: 1.6 }}>
                    <span style={{ color: t.primary, flexShrink: 0, marginTop: 2 }}>▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive: stack image on top on narrow screens */}
      <style>{`
        @media (max-width: 640px) {
          #education .edu-card { flex-direction: column !important; }
          #education .edu-image { flex: 0 0 180px !important; width: 100% !important; }
        }
      `}</style>
    </Section>
  );
}