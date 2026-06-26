type Skill = { name: string; level: 'advanced' | 'intermediate' };

type Category = {
  title: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    title: 'Building & Shipping',
    skills: [
      { name: 'Vanilla JS', level: 'advanced' },
      { name: 'Next.js', level: 'advanced' },
      { name: 'TypeScript', level: 'intermediate' },
      { name: 'Cloudflare Workers', level: 'advanced' },
      { name: 'Supabase', level: 'advanced' },
    ],
  },
  {
    title: 'Design & Product',
    skills: [
      { name: 'Product Strategy', level: 'advanced' },
      { name: 'UX Design', level: 'intermediate' },
      { name: 'Figma', level: 'intermediate' },
      { name: 'User Research', level: 'intermediate' },
    ],
  },
  {
    title: 'Data & Systems',
    skills: [
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'REST APIs', level: 'advanced' },
      { name: 'System Architecture', level: 'intermediate' },
    ],
  },
  {
    title: 'AI Augmented',
    skills: [
      { name: 'Claude (Anthropic)', level: 'advanced' },
      { name: 'Prompt Engineering', level: 'advanced' },
      { name: 'AI-assisted Development', level: 'advanced' },
    ],
  },
  {
    title: 'Documentation & Knowledge Management',
    skills: [
      { name: 'Technical Documentation', level: 'advanced' },
      { name: 'Product Specifications', level: 'advanced' },
      { name: 'Records Management', level: 'advanced' },
      { name: 'Technical Writing', level: 'advanced' },
      { name: 'Knowledge Management', level: 'advanced' },
    ],
  },
  {
    title: 'Also done',
    skills: [
      { name: 'Flutter', level: 'intermediate' },
      { name: 'Legal (Cameroon)', level: 'advanced' },
      { name: 'Project Management', level: 'advanced' },
      { name: 'Aquaculture (AgroNova)', level: 'intermediate' },
    ],
  },
];

const levelColors: Record<string, { bg: string; color: string }> = {
  advanced: { bg: '#0a2010', color: '#10b981' },
  intermediate: { bg: '#0c1a35', color: '#60a5fa' },
};

export default function Skills() {
  return (
    <section
      aria-label="Compétences"
      style={{
        background: 'var(--bg)', padding: '4rem 1.5rem',
        borderTop: '0.5px solid var(--bg3)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '22px', fontWeight: 500, color: 'var(--text1)',
          margin: '0 0 6px',
        }}>
          Skills
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text3)', margin: '0 0 2rem' }}>
          Honest levels. No 99% bars.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem',
        }}>
          {categories.map((cat) => (
            <div
              key={cat.title}
              style={{
                background: 'var(--bg2)', border: '0.5px solid var(--border)',
                borderRadius: '12px', padding: '1.25rem',
              }}
            >
              <h3 style={{
                fontSize: '12px', fontWeight: 500, color: 'var(--text3)',
                textTransform: 'uppercase', letterSpacing: '0.08em',
                margin: '0 0 12px',
              }}>
                {cat.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {cat.skills.map((skill) => {
                  const c = levelColors[skill.level];
                  return (
                    <span
                      key={skill.name}
                      title={skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                      style={{
                        fontSize: '12px', padding: '4px 10px', borderRadius: '20px',
                        background: c.bg, color: c.color,
                        border: `0.5px solid ${c.color}33`,
                      }}
                    >
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', gap: '16px', marginTop: '1.25rem' }}>
          {Object.entries(levelColors).map(([level, c]) => (
            <span key={level} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: c.color, display: 'inline-block',
              }} />
              <span style={{ fontSize: '11px', color: 'var(--text4)', textTransform: 'capitalize' }}>
                {level}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
