import { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2, Sparkles } from 'lucide-react';

// ─── Laxmi's full profile context fed to Gemini ───────────────────────────
const SYSTEM_PROMPT = `You are "Ask Laxmi" — a friendly, smart assistant on Laxmi Sahu's personal portfolio website. Your job is to help visitors — recruiters, hiring managers, collaborators, and developers — learn about Laxmi quickly and accurately.

Always answer in first person AS Laxmi. Sound warm, confident, and professional. Keep answers concise (2–4 sentences unless more detail is asked). If you don't know something specific, say "I don't have that detail on hand — feel free to reach out via the Contact page!"

Never make up facts. Only use the information below.

--- PROFILE ---

Name: Laxmi Sahu
Location: Stockholm, Sweden
Work permit: Valid Swedish work permit — available for immediate employment
Email: laxmisahu1211@gmail.com
Portfolio: https://laxmisahu.vercel.app
Open to: Data Engineer, Analytics Engineer, Data Analyst roles

SUMMARY:
Data Engineer and Data Analyst with 7+ years of experience designing and building scalable data platforms, ETL/ELT pipelines, and BI solutions. Expert in SQL, Python, dbt, Apache Airflow, Snowflake, Tableau, Power BI, PySpark, and cloud platforms (AWS, GCP, Azure). Proven track record: 45% improvement in marketing ROI, 60% faster reporting, 80% reduction in manual processes, 10M+ records processed monthly.

SKILLS:
- Languages: SQL (Advanced), Python, PySpark, Bash
- Data Engineering: Apache Airflow, dbt, Apache Kafka, ETL/ELT, Medallion Architecture, Star Schema, Dimensional Modeling
- Cloud: Snowflake, GCP (BigQuery), AWS (Redshift, S3, EC2), Azure (Databricks, Synapse)
- Databases: PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch
- BI & Visualisation: Tableau, Power BI, Looker Studio, Streamlit, Kibana
- Data Analysis: Statistical Analysis, A/B Testing, Cohort Analysis, Churn Prediction, KPI Development
- Observability: Splunk, CloudWatch, Data Governance, GDPR/PII Compliance
- DevOps: CI/CD, Jenkins, Azure DevOps, Git, Docker
- Libraries: Pandas, NumPy, Scikit-learn, Flask, LangChain, BeautifulSoup

EXPERIENCE:

1. Freelance Data & Analytics Engineer | Self-Employed | Jan 2025 – Present | Stockholm
- Built Swedish Energy & Weather Analytics Platform: Snowflake medallion architecture, Apache Airflow, dbt Cloud, Streamlit dashboard
- Built LUX: multi-modal AI assistant using LangChain, Google Gemini Pro, LiveKit
- Participated in 8+ hackathons (AI Sweden, Microsoft, Google, Epiroc)
- Speaker at Women in AI Sweden

2. System Analyst – Data Engineering & QA Automation | Bitwise Solutions | Jul 2024 – Dec 2024 | Pune, India (Remote)
- Engineered NFR Automation Framework — reduced manual testing by 90%
- Integrated Jenkins CI/CD with Kafka, AWS S3, Splunk
- Reduced infrastructure costs by 25%

3. Software Engineer → Senior Software Engineer | Securly India | Mar 2019 – May 2023 | Pune, India
- ETL pipelines from 5+ sources — 60% faster reporting
- PySpark URL classification — 10M+ URLs/month, 99.5% uptime
- PDI platform — 45% marketing ROI improvement
- Airflow-automated reports for 500+ clients — 80% faster
- Reduced data errors by 30%, improved performance by 20%

4. Full Stack & Android Developer | SPEGI Technologies | Dec 2015 – May 2018 | Indore, India
- Swim team management app — reduced admin tasks by 70%
- Android ERP app — 95% user satisfaction, 35% efficiency improvement

PROJECTS:
1. Swedish Energy & Weather Analytics Platform (Jan 2026–Present): Snowflake + Airflow + dbt + Streamlit. Analyses weather vs energy patterns in Sweden using real-time APIs.
2. LUX Multi-Modal AI Assistant (Jun 2025): LangChain + Gemini Pro + LiveKit. Voice/video/chat agent with web search, email, weather tools.
3. NFR Automation Framework (Jul–Dec 2024): Python + Kafka + JMeter + Jenkins + Splunk. 90% reduction in manual testing.
4. Pagescan URL Classification (Sep 2021–May 2023): PySpark + Elasticsearch + AWS. 10M+ URLs/month.
5. Product Data Intelligence / PDI (Oct 2019–May 2022): ETL + Tableau + Redshift. 45% marketing ROI improvement.
6. Securly Visitor (Nov 2020–Dec 2021): Selenium scraping pipeline from 100+ US counties to PostgreSQL.
7. Securly 24 Audit Reports (Mar–Dec 2019): Airflow + Flask + Redshift. Reports for 500+ clients, 80% faster.

EDUCATION:
- Post Graduate Diploma in Big Data Analytics — CDAC, 2018–2019
- B.E. in Computer Science — Sanghvi Innovative Academy, RGTU, 2010–2014

CERTIFICATIONS:
- Microsoft Azure AI Essentials Professional Certificate (Microsoft & LinkedIn)
- Microsoft Azure Machine Learning Fundamentals
- Microsoft Azure AI Essentials: Workloads and Machine Learning on Azure
- Building Applications with GitHub Copilot Agent Mode
- AI Agents Fundamentals

COMMUNITY:
- Speaker, Women in AI Sweden
- 8+ hackathon participant: AI Sweden, Microsoft, Google, Epiroc

LANGUAGES: English (fluent), Swedish (basic, ongoing), Hindi (native)

--- END PROFILE ---`;

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const SUGGESTIONS = [
  "Is Laxmi available for work in Stockholm?",
  "What's her experience with dbt & Airflow?",
  "What projects has she built?",
  "Does she know Tableau and Power BI?",
];

export default function AskLaxmi() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    setError('');

    const userMsg: Message = { role: 'user', text: text.trim() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) throw new Error('NO_KEY');

      // Build conversation history for Gemini
      // System prompt injected as first user/model exchange for compatibility
      const history = updatedMessages.slice(0, -1).map((m) => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }],
      }));

      const body = {
        contents: [
          // System context as first turn
          {
            role: 'user',
            parts: [{ text: `INSTRUCTIONS: ${SYSTEM_PROMPT}\n\nACKNOWLEDGE: Understood, I will act as Ask Laxmi.` }],
          },
          {
            role: 'model',
            parts: [{ text: "Understood! I'm Ask Laxmi, Laxmi Sahu's AI assistant. I'm ready to help visitors learn about her experience, skills, projects, and availability. What would you like to know?" }],
          },
          ...history,
          { role: 'user', parts: [{ text: text.trim() }] },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 400,
        },
      };

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );

      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        console.error('Gemini API error:', res.status, errBody);
        throw new Error(`API_ERROR_${res.status}: ${JSON.stringify(errBody)}`);
      }
      const data = await res.json();
      console.log('Gemini response:', data);
      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I'm not sure how to answer that — try asking something else or visit the Contact page!";

      setMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
    } catch (err: any) {
      console.error('AskLaxmi error:', err);
      if (err.message === 'NO_KEY') {
        setError('API key not configured. Add VITE_GEMINI_API_KEY to your Vercel environment variables.');
      } else if (err.message?.includes('API_ERROR_400')) {
        setError('Bad request — the prompt may be too long. Try a shorter question.');
      } else if (err.message?.includes('API_ERROR_403')) {
        setError('API key invalid or not authorised. Check your VITE_GEMINI_API_KEY in Vercel settings.');
      } else if (err.message?.includes('API_ERROR_429')) {
        setError('Rate limit hit — you\'re on the free tier. Please wait a moment and try again.');
      } else {
        setError(`Error: ${err.message || 'Unknown error. Check browser console for details.'}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close Ask Laxmi chat' : 'Open Ask Laxmi chat'}
        className={`
          fixed bottom-6 right-6 z-50
          flex items-center gap-2 px-4 py-3 rounded-full
          border-2 border-[#64ffda] font-mono text-sm font-semibold
          shadow-lg shadow-[#64ffda]/20
          transition-all duration-300
          ${open
            ? 'bg-[#64ffda] text-[#0a192f]'
            : 'bg-[#0a192f] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f]'
          }
        `}
      >
        {open ? (
          <X size={18} />
        ) : (
          <>
            <Sparkles size={16} />
            Ask Laxmi
          </>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="
          fixed bottom-20 right-6 z-50
          w-[350px] sm:w-[400px] h-[520px]
          flex flex-col
          bg-[#0a192f] border border-[#64ffda]/30
          rounded-2xl shadow-2xl shadow-[#64ffda]/10
          overflow-hidden
        ">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#64ffda]/20 bg-[#0d2137]">
            <div className="w-8 h-8 rounded-full bg-[#64ffda]/20 border border-[#64ffda]/50 flex items-center justify-center flex-shrink-0">
              <Sparkles size={14} className="text-[#64ffda]" />
            </div>
            <div>
              <p className="text-[#64ffda] font-mono font-semibold text-sm">Ask Laxmi</p>
              <p className="text-[#8892b0] text-xs">AI portfolio assistant · Gemini 2.0</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto text-[#8892b0] hover:text-[#64ffda] transition-colors"
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">

            {/* Welcome + suggestions */}
            {messages.length === 0 && (
              <div className="space-y-3">
                <div className="flex gap-2 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 border border-[#64ffda]/40 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <Sparkles size={10} className="text-[#64ffda]" />
                  </div>
                  <div className="bg-[#112240] rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-[#ccd6f6] max-w-[85%] leading-relaxed">
                    👋 Hi! I'm Laxmi's AI assistant. Ask me anything about her experience, skills, projects, or availability!
                  </div>
                </div>
                <div className="space-y-2 pl-8">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="
                        block w-full text-left text-xs px-3 py-2 rounded-lg
                        border border-[#64ffda]/20 text-[#8892b0]
                        hover:border-[#64ffda]/60 hover:text-[#64ffda] hover:bg-[#64ffda]/5
                        transition-all duration-200 font-mono
                      "
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Conversation */}
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 items-start ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 border border-[#64ffda]/40 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <Sparkles size={10} className="text-[#64ffda]" />
                  </div>
                )}
                <div className={`
                  px-4 py-3 rounded-2xl text-sm max-w-[85%] leading-relaxed
                  ${msg.role === 'user'
                    ? 'bg-[#64ffda]/15 text-[#ccd6f6] rounded-tr-sm border border-[#64ffda]/20'
                    : 'bg-[#112240] text-[#ccd6f6] rounded-tl-sm'
                  }
                `}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex gap-2 items-start">
                <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 border border-[#64ffda]/40 flex-shrink-0 flex items-center justify-center">
                  <Sparkles size={10} className="text-[#64ffda]" />
                </div>
                <div className="bg-[#112240] rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1 items-center h-4">
                    <span className="w-1.5 h-1.5 bg-[#64ffda]/60 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 bg-[#64ffda]/60 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 bg-[#64ffda]/60 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="text-xs text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">
                {error}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="px-4 py-3 border-t border-[#64ffda]/20 bg-[#0d2137] flex gap-2 items-center"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              disabled={loading}
              className="
                flex-1 bg-[#112240] text-[#ccd6f6] placeholder-[#8892b0]/60
                border border-[#64ffda]/20 rounded-xl px-4 py-2.5 text-sm
                focus:outline-none focus:border-[#64ffda]/60
                disabled:opacity-50 transition-colors font-mono
              "
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              aria-label="Send message"
              className="
                w-10 h-10 rounded-xl flex-shrink-0
                bg-[#64ffda]/10 border border-[#64ffda]/30 text-[#64ffda]
                hover:bg-[#64ffda] hover:text-[#0a192f]
                disabled:opacity-30 disabled:cursor-not-allowed
                flex items-center justify-center
                transition-all duration-200
              "
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
