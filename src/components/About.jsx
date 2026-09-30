import { useTheme } from "../context/ThemeContext";
import Section from "./common/Section";
import SectionTitle from "./common/SectionTitle";
import Glass from "./common/Glass";
import useFadeIn from "../hooks/useFadeIn";
import useCountUp from "../hooks/useCountUp";
import data from "../config/data";

function StatCard({ stat, delay }) {
  const { t } = useTheme();
  const [ref, visible] = useFadeIn(0.3);
  // Pass the raw string - useCountUp handles "3.5+", "50K+", "40%", "6" itself
  const count = useCountUp(stat.val, 1500, visible);

  return (
    <Glass
      style={{
        gridColumn: "span 2",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", textAlign: "center",
        opacity: 0,
        animation: visible ? `scaleIn 0.5s ${delay}s forwards` : "none",
      }}
    >
      <div ref={ref} />
      <div style={{
        fontSize: 30, fontWeight: 800, color: t.primary,
        fontFamily: "'JetBrains Mono', monospace", letterSpacing: -1,
      }}>
        {count}
      </div>
      <div style={{
        fontSize: 12, color: t.textMuted, marginTop: 4,
        textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600,
      }}>
        {stat.label}
      </div>
    </Glass>
  );
}

export default function About() {
  const { t } = useTheme();

  return (
    <Section id="about">
      <SectionTitle sub="Who I am">A bit about me</SectionTitle>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: 16,
        gridAutoRows: "minmax(100px, auto)",
      }}>
        {/* Bio card - spans left 4 columns, 2 rows */}
        <Glass style={{ gridColumn: "span 4", gridRow: "span 2", display: "flex", flexDirection: "column", justifyContent: "center", gap: 12 }}>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: t.textSec }}>
            {data.aboutP1}
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: t.textSec }}>
            {data.aboutP2}
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: t.textMuted }}>
            {data.aboutP3}
          </p>
        </Glass>

        {/* Stat cards - 4 cards each spanning 2 columns */}
        {data.stats.map((s, i) => (
          <StatCard key={i} stat={s} delay={0.1 + i * 0.1} />
        ))}

        {/* Location card */}
        <Glass style={{ gridColumn: "span 2", display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: t.primaryLight,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, flexShrink: 0,
          }}>
            📍
          </div>
          <div>
            <div style={{ fontWeight: 700, color: t.text, fontSize: 14 }}>Hyderabad, India</div>
            <div style={{ fontSize: 12, color: t.textMuted, marginTop: 2 }}></div>
            <div style={{ fontSize: 11, color: t.primary, marginTop: 4, fontWeight: 600 }}>
              Open to relocate anywhere
            </div>
          </div>
        </Glass>
      </div>
    </Section>
  );
}