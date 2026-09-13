<div align="center">

# Hamza Bouali

**Software & Data Engineer** · Rabat, Morocco

[![Portfolio](https://img.shields.io/badge/Portfolio-hamza--bouali.me-000000?style=flat-square&logo=react&logoColor=white)](https://hamza-bouali.me)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Hamza%20Bouali-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hamza-bouali-4b11861a1/)
[![Email](https://img.shields.io/badge/Email-hamzabouali322%40gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:hamzabouali322@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-Hamza--Bouali-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Hamza-Bouali)
[![DataCamp](https://img.shields.io/badge/Certified-DataCamp-05930C?style=flat-square&logo=datacamp&logoColor=white)](https://www.datacamp.com/)

</div>

---

## About Me

Recent engineering graduate in Knowledge Engineering and Data Science, passionate about building data pipelines and full-stack, AI-powered products. Hands-on experience across ETL/ELT, data warehousing, visualization, and NLP, as well as full-stack development and AI integration (LLMs, RAG, agents). Immediately available for new opportunities.

---

## 🎓 Education

| Period | Degree | Institution |
|---|---|---|
| 2023 – 2026 | **Data Engineering Degree (Diplôme d'Ingénieur)** | École des Sciences de l'Information (ESI), Rabat |
| 2021 – 2023 | **CPGE — Mathematics & Physics** | CPGE Mohammed VI, Kenitra |
| 2021 | **Baccalaureate in Mathematical Sciences (Option B)** | High school, Rabat |

> ESI curriculum: Artificial Intelligence · Machine Learning · Deep Learning · Big Data · Cloud Computing · DevOps · Software Engineering

---

## 💼 Professional Experience

### 🔵 Data Engineer — *Veolia | Software Solutions*, Rabat *(Feb 2026 – Aug 2026)*
- Built and maintained an on-premise, multi-tenant data factory using **Meltano, dbt, and Podman**
- Ingested 807+ tables and 58M+ rows (20 GB), reducing processing time by **89%**
- Translated functional specifications into technical data models, working with architects and business stakeholders in Agile delivery

### 🟣 Data & AI Engineer — Freelance — *OBG Incub*, Rabat *(Jul 2023 – Nov 2025)*
- Developed full-stack features for external clients: Next.js frontend and backend logic for AI-powered services
- Integrated an AI chatbot (LangChain, Qdrant, OpenAI API) and a collaborative-filtering recommendation engine
- Designed backend RAG pipeline logic and deployed services on AWS ECS with CI/CD via GitHub Actions

### 🟠 Data Analyst Intern — *Decathlon*, Casablanca *(Jun – Aug 2025)*
- Built a pipeline extracting and consolidating data from 5 internal systems (14 GB)
- Designed a self-serve dashboard adopted by 9 stakeholders, saving 2 hours per day

### 🟢 Data Engineer Intern — *AiLand*, Rabat *(Jul 2024)*
- Cleaned, transformed, and analyzed large-scale social media data
- Contributed to fine-tuning NLP models for localized social listening in Morocco

---

## 🚀 Projects

### [MemorAI](https://memorai.tech) — Multi-Agent & Multi-Modal Data Management Chatbot *(2025)*
> Intelligent chatbot integrated with WhatsApp, capable of querying and managing multimedia data (text, image, audio, video); validated with 51 test users

- Multi-agent architecture with **LangChain / LangGraph** for task distribution, orchestration, and contextual persistence
- RAG system powered by **Qdrant** for semantic search, vector indexing, and conversational grounding
- Scalable and secure data pipelines on **AWS (S3, DynamoDB, Lambda)** — ingestion, storage, transformation, monitoring
- Multi-turn conversational context with OpenAI APIs for NLU and data synthesis

**Stack:** Django REST · AWS · Qdrant · LangChain · OpenAI API · GitHub Actions

---

### Data-as-a-Service Pipeline on Microsoft Fabric *(2025)*
> End-to-end data pipeline based on the Medallion architecture

- Extracted, processed, and analyzed data from clients' on-premises databases (~900 tables, 20 GB per client)
- Leveraged Microsoft Fabric's unified platform — Lakehouse, OneLake, Data Pipelines, Dataflow Gen2 — to structure Bronze, Silver, and Gold layers
- Configured JDBC-based connectivity for secure ingestion, refreshing 3x/day (40 min full load, 5 min incremental)

**Stack:** Microsoft Fabric · Lakehouse · OneLake · JDBC

---

### NYC Green Taxi Data Pipeline *(2025)*
> End-to-end ETL pipeline into a star-schema OLAP warehouse

- Moved ~50 GB of NYC Green Taxi trip data into dimension and fact tables optimized for analytics
- Configured an Apache Airflow DAG with monthly scheduling, automated data validation, and automatic schema creation
- Optimized for scale with chunked inserts, connection pooling, and indexing; automated backfill across 71+ months of historical data, with full pipeline runs completing in ~5 minutes

**Stack:** Apache Airflow · Spark · Python · SQL

---

### NYC Taxi Operations Intelligence Platform (Databricks Migration) *(2025 – Present)*
> [Source](https://github.com/Hamza-Bouali/NYC-DATABRICKS) — Databricks migration of the on-premises NYC Taxi pipeline into governed lakehouse data products for fleet operations, finance, and compliance

- Rebuilt the pipeline on **Databricks + Unity Catalog**, using **Auto Loader** for incremental ingestion into a Bronze/Silver/Gold/Quarantine medallion architecture on **Delta Lake**
- Implemented data-quality rules (invalid timestamps, zero-distance trips, duplicate business keys, negative fares) with quarantine tables for auditability instead of silent data loss
- Built Gold dimensional models (zone, date) and daily borough performance metrics via **Databricks SQL Warehouses**
- Deployed and orchestrated jobs with **Databricks Asset Bundles**, replacing the original Docker/Terraform-based on-premises setup
- Published 3 AI/BI dashboards (Fleet Operations, Financial Performance, Compliance & Quality) consumed by distinct business stakeholders

**Stack:** Databricks · Unity Catalog · Delta Lake · Auto Loader · Databricks SQL · Databricks Asset Bundles · PySpark

---

### Real-Time Bitcoin ML Pipeline *(2025)*
> End-to-end streaming data platform for live market analytics

- Ingested live BTC-USD prices into **Apache Kafka**, processed with **Spark Structured Streaming** for per-batch model training
- Developed a FastAPI backend (API + interactive Streamlit dashboard) exposing real-time model metrics and batch predictions
- Orchestrated a multi-container architecture (Kafka, Zookeeper, Spark, dashboard, API) with Docker Compose, with monitoring and metrics persistence

**Stack:** Kafka · Spark · FastAPI · Streamlit · Docker Compose

---

### Banking BI System & Data Warehouse *(2024)*
> Enterprise data warehouse and analytics platform for banking operations

- Designed and implemented a **star schema** Data Warehouse on SQL Server
- Built ETL processes with **SSIS** for ingestion and transformation of complex banking data
- Created interactive **Power BI** dashboards with business KPIs and predictive insights
- Optimized DirectQuery / Import connections between Power BI and SQL Server for real-time analytics

**Stack:** SQL Server · SSIS · Power BI · Python

---

### ML & Deep Learning Models From Scratch *(2024)*
> Full mathematical implementation of ML and DL algorithms

- **6 ML models**: Linear Regression, Logistic Regression, KNN, Decision Trees, Random Forest, SVM
- **4 DL architectures**: MLP, CNN, RNN, Autoencoder
- Complete backpropagation and optimization algorithms implemented from scratch
- Evaluated on real datasets with comprehensive performance metrics

---

## 🛠️ Technical Skills

### Data Engineering & Pipelines
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Apache Airflow](https://img.shields.io/badge/Airflow-017CEE?style=flat-square&logo=apache-airflow&logoColor=white)
![Apache Kafka](https://img.shields.io/badge/Kafka-231F20?style=flat-square&logo=apache-kafka&logoColor=white)
![PySpark](https://img.shields.io/badge/Spark%20%2F%20PySpark-E25A1C?style=flat-square&logo=apache-spark&logoColor=white)
![Kestra](https://img.shields.io/badge/Kestra-1A1A1A?style=flat-square)
![ETL/ELT](https://img.shields.io/badge/ETL%20%2F%20ELT-FF6B6B?style=flat-square)
![SQL](https://img.shields.io/badge/SQL%20Advanced-4479A1?style=flat-square&logo=postgresql&logoColor=white)
![dbt](https://img.shields.io/badge/dbt-FF694B?style=flat-square&logo=dbt&logoColor=white)
![Hadoop](https://img.shields.io/badge/Hadoop%20%2F%20Hive-FF6200?style=flat-square&logo=apachehadoop&logoColor=white)

### Databases & Storage
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-13AA52?style=flat-square&logo=mongodb&logoColor=white)
![SQL Server](https://img.shields.io/badge/SQL%20Server-CC2927?style=flat-square&logo=microsoft-sql-server&logoColor=white)
![Redshift](https://img.shields.io/badge/AWS%20Redshift-527FFF?style=flat-square)
![Azure DW](https://img.shields.io/badge/Azure%20Data%20Warehouse-0078D4?style=flat-square&logo=microsoft-azure&logoColor=white)
![Neo4j](https://img.shields.io/badge/Neo4j-008CC1?style=flat-square&logo=neo4j&logoColor=white)

### Cloud & Infrastructure
![AWS](https://img.shields.io/badge/AWS%20(EC2%2C%20S3%2C%20Lambda%2C%20RDS%2C%20Glue)-232F3E?style=flat-square&logo=amazon-aws&logoColor=white)
![Microsoft Fabric](https://img.shields.io/badge/Microsoft%20Fabric-0078D4?style=flat-square&logo=microsoft-azure&logoColor=white)
![Databricks](https://img.shields.io/badge/Databricks-FF3621?style=flat-square&logo=databricks&logoColor=white)
![Docker](https://img.shields.io/badge/Docker%20%2F%20Compose-2496ED?style=flat-square&logo=docker&logoColor=white)
![AWS ECS](https://img.shields.io/badge/AWS%20ECS-FF9900?style=flat-square)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-4285F4?style=flat-square&logo=github-actions&logoColor=white)
![Linux](https://img.shields.io/badge/Linux%20%2F%20Bash-FCC624?style=flat-square&logo=linux&logoColor=black)

### ML & AI
![LLM](https://img.shields.io/badge/LLMs%20(LLaMA%2C%20GPT)-412991?style=flat-square)
![LangChain](https://img.shields.io/badge/LangChain%20%2F%20LangGraph-1C3C3C?style=flat-square)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![Scikit-learn](https://img.shields.io/badge/Scikit--learn-F7931E?style=flat-square&logo=scikit-learn&logoColor=white)

### Visualization & BI
![Power BI](https://img.shields.io/badge/Power%20BI-F2C811?style=flat-square&logo=power-bi&logoColor=black)
![Tableau](https://img.shields.io/badge/Tableau-E97627?style=flat-square&logo=tableau&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=flat-square&logo=streamlit&logoColor=white)
![SSIS](https://img.shields.io/badge/SSIS-CC2927?style=flat-square)

### Backend & Full-Stack Development
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white)
![React](https://img.shields.io/badge/React%20%2F%20Next.js-61DAFB?style=flat-square&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)

---

## 📜 Certifications

| Domain | Certification |
|---|---|
| Data Engineering | Data Engineer Associate — *DataCamp* |
| Data Science | Data Science Core Designer Certificate |
| Machine Learning | Supervised Machine Learning — *Stanford / Coursera* |
| Python | Python Data Associate — *DataCamp* |
| Big Data | Databricks Fundamentals (preparing Databricks Data Engineering Associate) |

---

## 🏆 Awards & Recognition

| Ranking | Competition |
|---|---|
| 🥈 2nd Place | Hackathon MDFDS — Code ESI Club |
| 🥉 3rd Place | EAIC Data Competition |
| 🎯 Top 25 / 400 | Think AI — 2nd Edition |
| 📍 20th / Top 50 Morocco | MCPC — Moroccan Competitive Programming Championship |

---

## 👥 Leadership & Volunteering

- **Co-Head, Competitive Programming Cell** — CODE-ESI *(Sep 2024 – Jun 2025)*
  Mentoring engineers in algorithmic problem-solving

- **Treasurer** — JCMP-ESI *(Sep – Dec 2024)*
  Managed club finances and budgeting

- **Sponsorship & Events Committee Member** — Moroccan Days of Future Data Scientists *(May 2024 – Present)*
  Coordinated partnerships for national data science events

---

## 🌐 Languages

| Language | Level |
|---|---|
| Arabic | Native |
| French | C1 — Advanced |
| English | B2 — Professional |

---

## 📈 GitHub Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=Hamza-Bouali&show_icons=true&theme=radical&hide_border=true" alt="GitHub Stats" />
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=Hamza-Bouali&theme=radical&hide_border=true" alt="GitHub Streak" />
</div>

---

<div align="center">
  <strong>Open to opportunities in Data Engineering · Software Engineering · Cloud Data Solutions · AI Integration</strong><br/>
  <a href="mailto:hamzabouali322@gmail.com">hamzabouali322@gmail.com</a> 
</div>
