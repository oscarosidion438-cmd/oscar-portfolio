import { useState, useEffect } from "react";

const ROLES = ["AI Automation Builder","n8n Workflow Engineer","LLM Integration Specialist","Frontend Developer"];

const PROJECTS = [
  { id:1, title:"Day Trader AI Agent", description:"Telegram-triggered trading assistant that pulls multi-timeframe OHLC data, runs GPT-powered sentiment analysis, and outputs structured trade setups — without a single manual step.", tags:["n8n","GPT-4","Telegram Bot","OHLC Analysis","AI Agent"], category:"AI Agent", link:"https://www.linkedin.com/posts/osarodion-igbinigie-724a67393_ai-aiagents-automation-activity-7469728174449434624-9Vik" },
  { id:2, title:"Nutrition AI Coach", description:"Conversational fitness coach agent deployed on Telegram. Handles text queries, food photo analysis, and voice note transcription to deliver personalised macro tracking and meal advice.", tags:["n8n","Telegram","OpenAI Vision","Voice Processing","LLM"], category:"AI Agent", link:"https://www.linkedin.com/posts/osarodion-igbinigie-724a67393_n8n-aiautomation-workflowautomation-activity-7468640639577014272-TO5X" },
  { id:3, title:"RAG Agent with Long-Term Memory", description:"Production-grade retrieval-augmented AI agent backed by Supabase and Postgres. Stores and retrieves contextual memory across sessions — giving the AI genuine continuity.", tags:["n8n","Supabase","PostgreSQL","RAG","Vector Embeddings"], category:"AI Infrastructure", link:"https://www.linkedin.com/posts/osarodion-igbinigie-724a67393_built-a-rag-agent-with-long-term-memory-this-activity-7464315613633638400-jaMe" },
  { id:4, title:"Rachel — Restaurant Booking Agent", description:"End-to-end AI customer support and reservation system for Bella Vista. Handles enquiries, checks availability, confirms bookings, and follows up — zero human intervention.", tags:["n8n","GPT-4","WhatsApp API","Automation","CRM"], category:"Business Automation", link:"https://www.linkedin.com/posts/osarodion-igbinigie-724a67393_heres-rachel-the-ai-restaurant-support-activity-7464992296053252096-4o98" },
  { id:5, title:"Invoice Tracking System", description:"Automated pipeline that monitors Google Drive for new invoices, parses and logs them to Notion, and fires Gmail reminders on schedule. Finance admin on autopilot.", tags:["n8n","Google Drive","Notion","Gmail","Document AI"], category:"Business Automation", link:"https://www.linkedin.com/posts/osarodion-igbinigie-724a67393_n8n-aiautomation-workflowautomation-activity-7465363021008244737-bcGJ" },
  { id:6, title:"Real Estate Investment Analyser", description:"AI agent that ingests property data, runs comparative market analysis, calculates ROI projections, and surfaces investment signals — built for speed-to-insight.", tags:["n8n","GPT-4","Data Analysis","AI Agent","API Integration"], category:"AI Agent", link:"https://www.linkedin.com/posts/osarodion-igbinigie-724a67393_realestatetech-ai-automation-activity-7466014516573827073-Rw1G" },
  { id:7, title:"Bella Vista — Restaurant Website", description:"Dark luxury website built with React, Vite, Tailwind CSS, and Framer Motion. Features smooth scroll animations, an immersive menu experience, and a reservation flow.", tags:["React","Vite","Tailwind CSS","Framer Motion","UI/UX"], category:"Web Development", link:"https://www.linkedin.com/posts/osarodion-igbinigie-724a67393_ai-aiagents-automation-activity-7464990099974467585-YjY3" },
];

const SKILLS = ["n8n","OpenAI / GPT-4","LangChain","Supabase","PostgreSQL","RAG Systems","Telegram Bot API","WhatsApp Business API","Google Workspace APIs","Notion API","React","Vite","Tailwind CSS","Framer Motion","JavaScript / TypeScript","REST APIs","Webhooks","Prompt Engineering"];
const CATEGORIES = ["All","AI Agent","AI Infrastructure","Business Automation","Web Development"];
const CAT_COLORS = { "AI Agent":"#F5A623","AI Infrastructure":"#7C6AF5","Business Automation":"#22D3A5","Web Development":"#60A5FA" };

function TypingText({ words }) {
  const [displayed, setDisplayed] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = words[wi];
    let t;
    if (!del && ci < cur.length) t = setTimeout(() => setCi(c=>c+1), 75);
    else if (!del && ci === cur.length) t = setTimeout(() => setDel(true), 2000);
    else if (del && ci > 0) t = setTimeout(() => setCi(c=>c-1), 40);
    else if (del && ci === 0) { setDel(false); setWi(w=>(w+1)%words.length); }
    setDisplayed(cur.slice(0, ci));
    return () => clearTimeout(t);
  }, [ci, del, wi, words]);
  return <span>{displayed}<span style={{color:"#F5A623",animation:"blink 1s infinite"}}>|</span></span>;
}

function ProjectCard({ p }) {
  return (
    <div className="card" onClick={() => window.open(p.link,"_blank")}>
      <span className="cat-badge" style={{color:CAT_COLORS[p.category],borderColor:CAT_COLORS[p.category]+"44"}}>{p.category}</span>
      <h3 className="card-title">{p.title}</h3>
      <p className="card-desc">{p.description}</p>
      <div className="tags">{p.tags.map(t=><span key={t} className="tag">{t}</span>)}</div>
      <div className="card-cta">View on LinkedIn →</div>
    </div>
  );
}

export default function Portfolio() {
  const [cat, setCat] = useState("All");
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(()=>setShow(true),80); }, []);
  const filtered = cat==="All" ? PROJECTS : PROJECTS.filter(p=>p.category===cat);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        :root{--bg:#0A0A0A;--surf:#141414;--card:#1A1A1A;--bdr:#242424;--acc:#F5A623;--text:#F0EDE6;--muted:#666;}
        body{background:var(--bg);color:var(--text);font-family:'Inter',sans-serif;}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}

        nav{position:fixed;top:0;left:0;right:0;z-index:99;display:flex;align-items:center;justify-content:space-between;padding:18px 48px;background:rgba(10,10,10,.92);backdrop-filter:blur(14px);border-bottom:1px solid var(--bdr);}
        .logo{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:17px;}
        .logo span{color:var(--acc);}
        .nav-links{display:flex;gap:28px;}
        .nav-links a{font-size:12px;color:var(--muted);text-decoration:none;font-family:'JetBrains Mono',monospace;transition:color .2s;}
        .nav-links a:hover{color:var(--text);}
        .hire-btn{font-size:13px;font-weight:600;padding:8px 18px;border-radius:6px;background:var(--acc);color:#000;text-decoration:none;font-family:'Space Grotesk',sans-serif;}

        .hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:0 48px;padding-top:80px;position:relative;overflow:hidden;opacity:0;transition:opacity .7s;}
        .hero.on{opacity:1;}
        .grid-bg{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(var(--bdr) 1px,transparent 1px),linear-gradient(90deg,var(--bdr) 1px,transparent 1px);background-size:56px 56px;mask-image:radial-gradient(ellipse 80% 70% at 40% 50%,black 10%,transparent 100%);opacity:.25;}
        .eyebrow{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--acc);letter-spacing:2px;text-transform:uppercase;margin-bottom:20px;}
        .hero-name{font-family:'Space Grotesk',sans-serif;font-size:clamp(42px,7vw,84px);font-weight:700;line-height:1;letter-spacing:-3px;margin-bottom:12px;}
        .hero-role{font-family:'Space Grotesk',sans-serif;font-size:clamp(18px,2.8vw,34px);font-weight:400;color:var(--muted);letter-spacing:-1px;margin-bottom:24px;min-height:40px;}
        .hero-bio{max-width:480px;color:var(--muted);font-size:15px;line-height:1.85;margin-bottom:40px;}
        .btns{display:flex;gap:14px;flex-wrap:wrap;}
        .btn-acc{padding:13px 30px;background:var(--acc);color:#000;border-radius:8px;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:14px;text-decoration:none;}
        .btn-out{padding:13px 30px;background:transparent;color:var(--text);border-radius:8px;font-family:'Space Grotesk',sans-serif;font-weight:500;font-size:14px;text-decoration:none;border:1px solid var(--bdr);transition:all .2s;}
        .btn-out:hover{border-color:var(--acc);color:var(--acc);}
        .stats{display:flex;gap:44px;margin-top:56px;padding-top:36px;border-top:1px solid var(--bdr);flex-wrap:wrap;}
        .stat-n{font-family:'Space Grotesk',sans-serif;font-size:32px;font-weight:700;letter-spacing:-1px;}
        .stat-n span{color:var(--acc);}
        .stat-l{font-size:11px;color:var(--muted);font-family:'JetBrains Mono',monospace;margin-top:2px;}

        sec{padding:88px 48px;}
        .lbl{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--acc);letter-spacing:3px;text-transform:uppercase;margin-bottom:14px;}
        .sec-title{font-family:'Space Grotesk',sans-serif;font-size:clamp(28px,4vw,50px);font-weight:700;letter-spacing:-2px;line-height:1.1;margin-bottom:14px;}
        .sec-sub{font-size:15px;color:var(--muted);max-width:480px;line-height:1.8;}

        .about-grid{display:grid;grid-template-columns:320px 1fr;gap:56px;margin-top:52px;align-items:start;}
        .photo-box{width:100%;border-radius:14px;overflow:hidden;border:1px solid var(--bdr);position:relative;}
        .photo-inner{width:100%;aspect-ratio:3/4;background:linear-gradient(135deg,#1a1a1a 0%,#222 50%,#1a1a1a 100%);display:flex;align-items:center;justify-content:center;font-family:'Space Grotesk',sans-serif;font-size:56px;font-weight:700;color:var(--acc);letter-spacing:-2px;}
        .photo-note{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);text-align:center;padding:10px;border-top:1px solid var(--bdr);}
        .loc-badge{display:inline-flex;align-items:center;gap:6px;background:var(--acc);color:#000;font-family:'Space Grotesk',sans-serif;font-size:12px;font-weight:600;padding:6px 14px;border-radius:100px;margin-top:14px;}
        .about-r{display:flex;flex-direction:column;gap:18px;padding-top:4px;}
        .about-p{color:var(--muted);font-size:15px;line-height:1.85;}
        .about-p strong{color:var(--text);font-weight:500;}
        .cert{display:flex;align-items:center;gap:12px;padding:14px 18px;background:var(--card);border:1px solid var(--bdr);border-radius:10px;margin-top:4px;}
        .cert-t{font-family:'Space Grotesk',sans-serif;font-size:13px;font-weight:600;}
        .cert-s{font-size:11px;color:var(--muted);font-family:'JetBrains Mono',monospace;margin-top:2px;}

        .filters{display:flex;gap:8px;flex-wrap:wrap;margin:32px 0;}
        .fbtn{padding:7px 16px;border-radius:100px;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;cursor:pointer;border:1px solid var(--bdr);background:transparent;color:var(--muted);transition:all .2s;}
        .fbtn:hover,.fbtn.on{border-color:var(--acc);color:var(--acc);}
        .fbtn.on{background:var(--acc);color:#000;}
        .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px;}
        .card{background:var(--card);border:1px solid var(--bdr);border-radius:12px;padding:24px;cursor:pointer;transition:border-color .2s,transform .18s;display:flex;flex-direction:column;gap:12px;}
        .card:hover{border-color:var(--acc);transform:translateY(-3px);}
        .cat-badge{font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;padding:3px 9px;border-radius:100px;border:1px solid;display:inline-block;margin-bottom:4px;}
        .card-title{font-family:'Space Grotesk',sans-serif;font-size:17px;font-weight:600;letter-spacing:-0.4px;}
        .card-desc{font-size:13px;color:var(--muted);line-height:1.75;flex:1;}
        .tags{display:flex;flex-wrap:wrap;gap:5px;}
        .tag{font-family:'JetBrains Mono',monospace;font-size:9px;padding:3px 8px;background:var(--surf);border:1px solid var(--bdr);border-radius:3px;color:var(--muted);}
        .card-cta{font-family:'Space Grotesk',sans-serif;font-size:11px;font-weight:600;color:var(--acc);}

        .skill-pills{display:flex;flex-wrap:wrap;gap:9px;margin-top:40px;}
        .pill{padding:9px 16px;font-family:'Space Grotesk',sans-serif;font-size:13px;font-weight:500;background:var(--card);border:1px solid var(--bdr);border-radius:100px;color:var(--text);transition:all .2s;cursor:default;}
        .pill:hover{border-color:var(--acc);color:var(--acc);}

        .contact-wrap{max-width:580px;margin:0 auto;text-align:center;}
        .contact-sub{color:var(--muted);font-size:15px;line-height:1.8;margin:18px 0 40px;}
        .clinks{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;}
        .clink{display:flex;align-items:center;gap:7px;padding:12px 22px;border-radius:9px;border:1px solid var(--bdr);color:var(--text);text-decoration:none;font-family:'Space Grotesk',sans-serif;font-size:13px;font-weight:500;background:var(--card);transition:all .2s;}
        .clink:hover{border-color:var(--acc);color:var(--acc);}
        .clink.p{background:var(--acc);color:#000;border-color:var(--acc);}
        .clink.p:hover{opacity:.85;color:#000;}

        footer{padding:24px 48px;border-top:1px solid var(--bdr);display:flex;justify-content:space-between;align-items:center;}
        .fl{font-family:'Space Grotesk',sans-serif;font-size:12px;color:var(--muted);}
        .fr{font-family:'JetBrains Mono',monospace;font-size:10px;color:#2a2a2a;}

        @media(max-width:768px){
          nav{padding:14px 20px;} .nav-links{display:none;}
          .hero,.hero sec{padding-left:20px;padding-right:20px;}
          sec{padding:60px 20px;}
          .about-grid{grid-template-columns:1fr;gap:28px;}
          .stats{gap:24px;}
          footer{padding:18px 20px;flex-direction:column;gap:6px;text-align:center;}
        }
      `}</style>

      <nav>
        <div className="logo">Oscar<span>.</span></div>
        <div className="nav-links">
          <a href="#about">About</a><a href="#projects">Projects</a>
          <a href="#skills">Skills</a><a href="#contact">Contact</a>
        </div>
        <a href="mailto:Osarodionigbinigie438@gmail.com" className="hire-btn">Hire Me</a>
      </nav>

      <div className={`hero ${show?"on":""}`} id="home">
        <div className="grid-bg"/>
        <div className="eyebrow">— Available for freelance · Remote</div>
        <h1 className="hero-name">Osarodion<br/>Igbinigie</h1>
        <div className="hero-role"><TypingText words={ROLES}/></div>
        <p className="hero-bio">I build AI automations and intelligent workflows that eliminate repetitive work — using n8n, GPT-4, and custom integrations that connect the tools your business already uses.</p>
        <div className="btns">
          <a href="#projects" className="btn-acc">See My Work</a>
          <a href="#contact" className="btn-out">Get in Touch</a>
        </div>
        <div className="stats">
          <div><div className="stat-n">7<span>+</span></div><div className="stat-l">Projects Built</div></div>
          <div><div className="stat-n">4<span>+</span></div><div className="stat-l">Industries</div></div>
          <div><div className="stat-n">100<span>%</span></div><div className="stat-l">Remote Ready</div></div>
        </div>
      </div>

      <sec id="about" style={{background:"var(--surf)",display:"block",padding:"88px 48px"}}>
        <div className="lbl">About</div>
        <h2 className="sec-title">I build workflows.<br/>Not just tools.</h2>
        <div className="about-grid">
          <div>
            <div className="photo-box">
              <div className="photo-inner">OI</div>
              <div className="photo-note">Add photo: src/assets/oscar.jpg</div>
            </div>
            <div className="loc-badge">📍 Abuja, Nigeria</div>
          </div>
          <div className="about-r">
            <p className="about-p">I'm an <strong>AI Automation Builder</strong> focused on designing n8n-powered systems that eliminate manual work for businesses — from intelligent customer support bots to multi-step data pipelines.</p>
            <p className="about-p">My background spans <strong>computer science fundamentals</strong>, frontend engineering with React, and hands-on AI development. I've shipped production agents, RAG memory systems, and workflow automations that connect real APIs to real outcomes.</p>
            <p className="about-p">I also run <strong>Blackdawg Media</strong>, a cinematography and media production brand — so I bring both technical depth and creative thinking to every project.</p>
            <div className="cert">
              <div style={{fontSize:"22px"}}>🎓</div>
              <div>
                <div className="cert-t">Udemy Certified</div>
                <div className="cert-s">AI Automation & Workflow Engineering</div>
              </div>
            </div>
          </div>
        </div>
      </sec>

      <sec id="projects" style={{display:"block",padding:"88px 48px"}}>
        <div className="lbl">Projects</div>
        <h2 className="sec-title">Things I've built</h2>
        <p className="sec-sub">Every project below is documented on LinkedIn — click any card to see the workflow breakdown and proof of work.</p>
        <div className="filters">
          {CATEGORIES.map(c=>(
            <button key={c} className={`fbtn ${cat===c?"on":""}`} onClick={()=>setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="grid">{filtered.map(p=><ProjectCard key={p.id} p={p}/>)}</div>
      </sec>

      <sec id="skills" style={{background:"var(--surf)",display:"block",padding:"88px 48px"}}>
        <div className="lbl">Stack & Skills</div>
        <h2 className="sec-title">What I work with</h2>
        <div className="skill-pills">{SKILLS.map(s=><div key={s} className="pill">{s}</div>)}</div>
      </sec>

      <sec id="contact" style={{display:"block",padding:"88px 48px"}}>
        <div className="contact-wrap">
          <div className="lbl" style={{textAlign:"center"}}>Contact</div>
          <h2 className="sec-title" style={{textAlign:"center"}}>Let's build something</h2>
          <p className="contact-sub">Got a manual process eating your team's time? A customer support backlog that shouldn't exist? Let's talk about automating it.</p>
          <div className="clinks">
            <a href="mailto:Osarodionigbinigie438@gmail.com" className="clink p">✉ Email Me</a>
            <a href="https://wa.me/2349112907806" target="_blank" rel="noreferrer" className="clink">💬 WhatsApp</a>
            <a href="https://www.linkedin.com/in/osarodion-igbinigie-724a67393" target="_blank" rel="noreferrer" className="clink">LinkedIn</a>
            <a href="https://www.upwork.com/freelancers/~013aa911fa46b6e257" target="_blank" rel="noreferrer" className="clink">Upwork</a>
            <a href="https://instagram.com/igramwithoxcar" target="_blank" rel="noreferrer" className="clink">Instagram</a>
          </div>
        </div>
      </sec>

      <footer>
        <div className="fl">Osarodion Igbinigie · Abuja, Nigeria · Open to Remote Work</div>
        <div className="fr">AI Automation Builder · n8n · LLMs · React</div>
      </footer>
    </>
  );
}
