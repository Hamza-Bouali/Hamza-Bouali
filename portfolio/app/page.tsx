'use client'

import { useState } from 'react'
import useSWR from 'swr'

const articles = [
  {
    title: 'Idempotency: Why It Matters and How to Achieve It',
    platform: 'Medium',        // or Substack, dev.to, LinkedIn, etc.
    date: '2026.08',
    url: 'https://medium.com/@hamzabouali322/idempotency-why-it-matters-and-how-to-achieve-it-c58a0dc8c690',
    summary: 'the most forgotten DE concept in the industry, it is the persisting temporary fix for data specialist.',
  },
  // add more entries here, newest first
]

const projects = [
  {
    id: 'fabric',
    number: '01',
    title: 'Data-as-a-Service Pipeline',
    subtitle: 'Microsoft Fabric / Medallion architecture',
    summary: 'A repeatable data factory for ingesting large, multi-tenant on-premise estates into OneLake.',
    metric: '900 tables / 20GB per client',
    problem: 'Clients needed a dependable path from on-premise databases to analytics-ready data without rebuilding ingestion logic for every tenant.',
    stages: ['On-prem DBs', 'JDBC', 'Bronze', 'Silver', 'Gold'],
    decisions: ['Separated raw, refined, and serving layers to keep replay and quality checks explicit.', 'Used Dataflow Gen2 and notebooks for a mix of managed movement and custom transformations.', 'Designed refresh windows around full and incremental workloads.'],
    outcome: '40min full load · 5min incremental · 3 refreshes/day',
    different: 'I would formalize tenant-level observability earlier, especially around freshness, failed partitions, and cost per refresh.',
    stack: ['Microsoft Fabric', 'Lakehouse', 'Dataflow Gen2', 'Notebooks'],
  },
  {
    id: 'bitcoin',
    number: '02',
    title: 'Bitcoin Real-Time ML Pipeline',
    subtitle: 'Streaming / per-batch model training',
    summary: 'A live BTC-USD pipeline that turns market events into model metrics, predictions, and a readable dashboard.',
    metric: 'Kafka → Spark → FastAPI',
    problem: 'A live market feed needed to move through ingestion, training, serving, and visualization without collapsing those concerns into one service.',
    stages: ['BTC-USD', 'Kafka', 'Spark', 'FastAPI', 'Streamlit'],
    decisions: ['Kept streaming computation in Spark Structured Streaming and model access behind a small API.', 'Used Docker Compose to make the complete multi-container system reproducible.', 'Exposed both real-time metrics and prediction endpoints for downstream consumers.'],
    outcome: 'Live price stream · model metrics · prediction API',
    different: 'I would add a stronger replay and evaluation harness so new model versions can be compared against identical historical windows.',
    stack: ['Kafka', 'Spark Structured Streaming', 'FastAPI', 'Streamlit', 'Docker Compose'],
  },
  {
    id: 'taxi',
    number: '03',
    title: 'NYC Green Taxi Data Pipeline',
    subtitle: 'Airflow / star-schema OLAP warehouse',
    summary: 'A historical warehouse load engineered for repeatable monthly ingestion and long-range backfills.',
    metric: '50GB / 71+ months',
    problem: 'A large historical dataset needed predictable monthly scheduling, validation, schema creation, and the ability to backfill without manual babysitting.',
    stages: ['CSV files', 'Airflow', 'Validate', 'Warehouse', 'OLAP'],
    decisions: ['Built chunked inserts and connection pooling around the warehouse boundary.', 'Made schema creation and validation part of the DAG rather than an external checklist.', 'Scheduled monthly loads while keeping backfill behavior explicit for 71+ months of history.'],
    outcome: '50GB loaded · 71+ months automated backfill',
    different: 'I would expose per-month lineage and row-count drift as first-class run artifacts for faster operational review.',
    stack: ['Apache Airflow', 'Python', 'SQL', 'Star schema'],
  },
  {
    id: 'banking',
    number: '04',
    title: 'Banking BI System & Data Warehouse',
    subtitle: 'SQL Server / SSIS / Power BI',
    summary: 'A reporting foundation connecting a star-schema warehouse to decision-ready dashboards.',
    metric: 'DirectQuery + Import',
    problem: 'Banking reporting needed a stable analytical model and a BI layer that could balance freshness with dashboard performance.',
    stages: ['Source systems', 'SSIS', 'SQL Server', 'Model', 'Power BI'],
    decisions: ['Used a star schema to keep measures and dimensions legible to reporting users.', 'Combined DirectQuery and Import strategies according to dashboard needs.', 'Kept ETL responsibilities in SSIS and analytical presentation in Power BI.'],
    outcome: 'Star schema · SSIS ETL · optimized Power BI dashboards',
    different: 'I would define performance budgets per dashboard before tuning the storage mode, then make those trade-offs visible to stakeholders.',
    stack: ['SQL Server', 'SSIS', 'Power BI', 'Star schema'],
  },
]

const experience = [
  ['02.2026—08.2026', 'Data Engineer', 'Veolia Software Solutions', 'On-premise multi-tenant data factory with Meltano, dbt, and Podman. 807+ tables and 58M+ rows ingested with an 89% reduction in processing time.'],
  ['06.2025—08.2025', 'Data Analyst Intern', 'Decathlon', 'Consolidated 14GB from 5 internal systems; the resulting self-serve dashboard was adopted by 9 stakeholders.'],
  ['07.2024', 'Data Engineer Intern', 'AiLand', 'Worked with large-scale social media data and fine-tuned NLP models for localized social listening.'],
]

function Node({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return <span className={`node ${active ? 'node-active' : ''}`}>{children}</span>
}

function Architecture({ stages }: { stages: string[] }) {
  return (
    <div className="architecture" aria-label={`Pipeline stages: ${stages.join(', ')}`}>
      {stages.map((stage, index) => (
        <div className="architecture-step" key={stage}>
          <Node active={index === stages.length - 1}>{String(index + 1).padStart(2, '0')}</Node>
          <span>{stage}</span>
          {index < stages.length - 1 && <span className="flow-line" aria-hidden="true" />}
        </div>
      ))}
    </div>
  )
}

const fetcher = (url: string) => fetch(url).then((response) => response.json())

export default function Page() {
  const { data } = useSWR<{ projects: typeof projects; experience: typeof experience }>('/api/portfolio', fetcher, { revalidateOnFocus: false })
  const liveProjects = data?.projects?.length ? data.projects : projects
  const liveExperience = data?.experience?.length ? data.experience : experience
  const [activeProject, setActiveProject] = useState('fabric')
  const selected = liveProjects.find((project) => project.id === activeProject) ?? liveProjects[0]

  function inspectProject(id: string) {
    setActiveProject(id)
    document.getElementById(`project-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Hamza Bouali home">HB<span>/</span>DE</a>
        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#writing">Writing</a>
          <a href="#contact">Contact</a>
        </nav>
        <span className="header-status"><i /> Open to data engineering roles</span>
      </header>

      <section className="hero stage" id="top">
        <div className="stage-label"><Node active>00</Node><span>system.identity</span><span className="rule" /></div>
        <div className="hero-grid">
          <div>
            <p className="eyebrow">DATA ENGINEER / RABAT, MOROCCO</p>
            <h1>Hamza<br /><em>Bouali</em></h1>
            <p className="hero-copy">I build data pipelines, streaming systems, and analytics platforms — on-premise, containerized, and cloud.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Inspect work <span>↘</span></a><a className="text-link" href="mailto:hamzabouali322@gmail.com">Start a conversation <span>↗</span></a></div>
          </div>
          <div className="status-panel" aria-label="Pipeline status">
            <div className="panel-heading"><span>PIPELINE STATUS</span><span>LIVE / 3Hz</span></div>
            <div className="status-flow"><div><Node active>BR</Node><span>Bronze</span></div><b>→</b><div><Node active>SI</Node><span>Silver</span></div><b>→</b><div><Node active>GO</Node><span>Gold</span></div></div>
            <p className="status-note"><i /> All systems nominal <span>last check 09:41:08</span></p>
          </div>
        </div>
        <div className="hero-footer"><span>SCROLL TO TRACE THE SYSTEM</span><span>01—05 / PORTFOLIO INDEX</span></div>
      </section>

      <section className="section stage" id="projects">
        <div className="stage-label"><Node>01</Node><span>projects.index</span><span className="rule" /></div>
        <div className="section-intro"><div><p className="eyebrow">SELECTED SYSTEMS</p><h2>Built to move<br /><em>reliably.</em></h2></div><p className="intro-copy">A field log of pipelines, warehouses, and real-time systems. Select a node to inspect the architecture.</p></div>
        <div className="dag-layout">
          <div className="dag-nav" role="tablist" aria-label="Project navigator">
            <div className="dag-line" aria-hidden="true" />
            {liveProjects.map((project) => <button className={`dag-node ${activeProject === project.id ? 'selected' : ''}`} key={project.id} onClick={() => inspectProject(project.id)} role="tab" aria-selected={activeProject === project.id}><Node active={activeProject === project.id}>{project.number}</Node><span>{project.title}</span></button>)}
          </div>
          <div className="project-preview" aria-live="polite"><div className="preview-meta"><span>{selected.subtitle}</span><span>{selected.metric}</span></div><h3>{selected.title}</h3><p>{selected.summary}</p><div className="preview-stack">{selected.stack.map((item) => <span key={item}>{item}</span>)}</div><a className="text-link" href={`#project-${selected.id}`}>Open case study <span>↘</span></a></div>
        </div>
      </section>

      <section className="section stage case-studies">
        <div className="stage-label"><Node>02</Node><span>projects.case_studies</span><span className="rule" /></div>
        <div className="case-list">{liveProjects.map((project) => <article className="case-study" id={`project-${project.id}`} key={project.id}><div className="case-index"><Node>{project.number}</Node><span>CASE / {project.id.toUpperCase()}</span></div><div className="case-content"><div className="case-heading"><div><p className="eyebrow">{project.subtitle}</p><h3>{project.title}</h3></div><strong>{project.metric}</strong></div><div className="case-grid"><div><h4>01 / Problem</h4><p>{project.problem}</p></div><div><h4>02 / Architecture</h4><Architecture stages={project.stages} /></div><div><h4>03 / Key decisions</h4><ul>{project.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ul></div><div className="outcome"><h4>04 / Outcome</h4><p>{project.outcome}</p></div><div><h4>05 / What I&apos;d do differently</h4><p>{project.different}</p></div></div></div></article>)}</div>
      </section>

      <section className="section stage split-section" id="about">
        <div className="stage-label"><Node>03</Node><span>about.credibility</span><span className="rule" /></div>
        <div className="split-grid"><div><p className="eyebrow">OPERATING CONTEXT</p><h2>Systems-minded.<br /><em>Detail-aware.</em></h2><p className="body-copy">My work sits between dependable infrastructure and the people who need to trust what comes out of it. I care about clear interfaces between stages, observable runs, and making the next change safer than the last.</p></div><div className="experience"><p className="eyebrow">EXPERIENCE LOG</p>{liveExperience.map(([date, role, company, detail]) => <div className="experience-row" key={company}><span>{date}</span><div><h3>{role}</h3><strong>{company}</strong><p>{detail}</p></div></div>)}</div></div>
        <div className="skills"><p className="eyebrow">STACK / WORKING SET</p><div><span>INGESTION <b>Meltano · JDBC · Kafka</b></span><span>TRANSFORM <b>dbt · Spark · Python · SQL</b></span><span>SERVE <b>FastAPI · Power BI · Streamlit</b></span><span>RUN <b>Podman · Docker Compose · Airflow</b></span></div></div>
      </section>

      <section className="section stage writing-section" id="writing"><div className="stage-label"><Node>04</Node><span>writing.feed</span><span className="rule" /></div><div className="section-intro"><div><p className="eyebrow">READING LOG</p><h2>Notes from<br /><em>the pipeline.</em></h2></div><p className="intro-copy">Published articles will appear here as a chronological feed once titles, platforms, dates, and live URLs are available.</p></div><div className="empty-feed"><Node>—</Node><div><strong>NO ENTRIES INDEXED</strong><p>Writing metadata not supplied yet. No placeholder articles or non-working RSS feed included.</p></div></div></section>

      <section className="section stage contact-section" id="contact"><div className="stage-label"><Node active>05</Node><span>contact.endpoint</span><span className="rule" /></div><div className="contact-grid"><div><p className="eyebrow">NEXT CONNECTION</p><h2>Let&apos;s build<br /><em>the next layer.</em></h2></div><div className="contact-details"><a href="mailto:hamzabouali322@gmail.com">hamzabouali322@gmail.com <span>↗</span></a><a href="tel:+212648572537">+212 648 572 537 <span>↗</span></a><span>Rabat, Morocco</span><div className="social-links"><a href="https://github.com/Hamza-Bouali" target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href="https://www.linkedin.com/in/hamza-bouali/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div></div></div></section>

      <footer><span>HB/DE — DATA ENGINEERING PORTFOLIO</span><span>© 2026 HAMZA BOUALI</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  )
}
