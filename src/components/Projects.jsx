import { useTheme } from "../context/ThemeContext";
import Section from "./common/Section";
import SectionTitle from "./common/SectionTitle";
import Glass from "./common/Glass";
import useSectionReveal from "../hooks/useSectionReveal";
import data from "../config/data";

function ProjectLinks({ p, t }) {
  return (
    <div style={{ display: "flex", gap: 14, marginTop: 16, flexWrap: "wrap" }}>
      {p.live && (
        <a
          href={p.live}
          target="_blank"
          rel="noreferrer"
          data-umami-event={`Project Live Demo - ${p.title}`}
          style={{
            color: t.primary, fontSize: 13, fontWeight: 600,
            textDecoration: "none", borderBottom: `1px solid ${t.primary}40`,
          }}
        >
          Live Demo ↗
        </a>
      )}
      {p.github && (
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          data-umami-event={`Project Source Code - ${p.title}`}
          style={{
            color: t.textSec, fontSize: 13, fontWeight: 500,
            textDecoration: "none", borderBottom: `1px dashed ${t.textMuted}40`,
          }}
        >
          Source Code ↗
        </a>
      )}
    </div>
  );
}

function TechTags({ tech, t }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
      {tech.map(tc => (
        <span key={tc} style={{
          padding: "4px 12px", borderRadius: 6, fontSize: 11,
          fontWeight: 600, background: t.primaryLight, color: t.primary,
        }}>{tc}</span>
      ))}
    </div>
  );
}

function DateTag({ date, t }) {
  return (
    <span style={{
      fontSize: 11, fontWeight: 600, color: t.textMuted,
      background: t.primaryLight, padding: "3px 10px",
      borderRadius: 20, whiteSpace: "nowrap",
    }}>
      {date}
    </span>
  );
}

function RevealCard({ children, index, direction = "up" }) {
  const [ref, visible] = useSectionReveal(0.1);
  const transforms = {
    up:    visible ? "translateY(0)"   : "translateY(30px)",
    left:  visible ? "translateX(0)"  : "translateX(-30px)",
    right: visible ? "translateX(0)"  : "translateX(30px)",
  };
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: transforms[direction],
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function Projects() {
  const { t } = useTheme();
  const accents = [t.gFrom, t.gTo, t.primary];

  const featured = data.projects.filter(p => p.featured);
  const rest = data.projects.filter(p => !p.featured);

  return (
    <Section id="projects">
      <SectionTitle sub="What I've built">Projects</SectionTitle>

      {/* Featured row */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 20,
        marginBottom: 20,
      }}>
        {featured.map((p, i) => (
          <RevealCard key={p.title} index={i} direction={i === 0 ? "left" : "right"}>
            <Glass style={{ position: "relative", overflow: "hidden", height: "100%" }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 3,
              background: `linear-gradient(90deg, ${accents[p.accent % 3]}, ${accents[(p.accent + 1) % 3]})`,
            }} />
            <div style={{ paddingTop: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, marginBottom: 4 }}>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: t.text }}>{p.title}</h3>
                <DateTag date={p.date} t={t} />
              </div>
              <p style={{ fontSize: 13, color: t.primary, fontWeight: 600, marginBottom: 10 }}>{p.sub}</p>
              <p style={{ color: t.textSec, fontSize: 14, lineHeight: 1.75 }}>{p.desc}</p>
              <TechTags tech={p.tech} t={t} />
              <ProjectLinks p={p} t={t} />
            </div>
          </Glass>
          </RevealCard>
        ))}
      </div>

      {/* Grid row */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 16,
      }}>
        {rest.map((p, i) => (
          <RevealCard key={p.title} index={i} direction="up">
            <Glass style={{ position: "relative", overflow: "hidden", height: "100%" }}>
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${accents[p.accent % 3]}, ${accents[(p.accent + 1) % 3]})`,
              }} />
              <div style={{ paddingTop: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, marginBottom: 4 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: t.text }}>{p.title}</h3>
                  <DateTag date={p.date} t={t} />
                </div>
                <p style={{ fontSize: 12, color: t.primary, fontWeight: 600, marginBottom: 8 }}>{p.sub}</p>
                <p style={{ color: t.textSec, fontSize: 13, lineHeight: 1.7 }}>{p.desc}</p>
                <TechTags tech={p.tech} t={t} />
                <ProjectLinks p={p} t={t} />
              </div>
            </Glass>
          </RevealCard>
        ))}
      </div>
    </Section>
  );
}