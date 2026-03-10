import Head from 'next/head';
import { useState } from 'react';

const projects = [
  {
    title: 'MERN Blog Platform',
    desc: 'Full-stack blog with JWT auth, CRUD, likes & comments using MongoDB, Express, React, Node.js.',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
    link: 'https://github.com/tejosharan/mern-blog'
  },
  {
    title: 'Real-Time Chat App',
    desc: 'Live chat application with Socket.IO, typing indicators, and read receipts built with MERN stack.',
    tags: ['React', 'Node.js', 'Socket.IO', 'MongoDB'],
    link: 'https://github.com/tejosharan/realtime-chat'
  },
  {
    title: 'COVID Vaccine Booking',
    desc: 'Full-stack slot booking system for COVID vaccination with real-time availability and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
    link: 'https://github.com/tejosharan/covid-vaccine-booking'
  },
  {
    title: 'AI Health Monitor',
    desc: 'IoT-based real-time health monitoring app tracking heart rate and body temperature with ML alerts.',
    tags: ['Python', 'React', 'IoT', 'ML'],
    link: 'https://github.com/tejosharan/iot-health-monitor'
  },
  {
    title: 'ML Price Predictor',
    desc: 'Machine learning models for house price and health metric prediction using Scikit-learn and Python.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'ML'],
    link: 'https://github.com/tejosharan/ml-price-predictor'
  },
  {
    title: 'RL Life Plan Optimiser',
    desc: 'Reinforcement Learning system using SAC & PPO to optimise career, finance and health decisions.',
    tags: ['Python', 'PyTorch', 'TensorFlow', 'RL'],
    link: 'https://github.com/tejosharan/rl-life-planner'
  },
];

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'HTML5', 'CSS3', 'JavaScript'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'Socket.IO'] },
  { category: 'Database', items: ['MongoDB', 'Firebase', 'SQL'] },
  { category: 'ML / AI', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Postman', 'Power BI'] },
  { category: 'Cloud', items: ['AWS (learning)', 'GCP (learning)', 'Azure (learning)'] },
];

export default function Portfolio() {
  const [active, setActive] = useState('home');

  return (
    <>
      <Head>
        <title>Tejo Sharan | Full Stack Developer & AI Engineer</title>
        <meta name="description" content="Portfolio of Tejo Sharan A.M — Full Stack Developer and AI Engineer" />
      </Head>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', sans-serif; background: #0a0a0a; color: #eee; }
        :root { --accent: #6c63ff; --accent2: #ff6584; }
        .nav { position: fixed; top: 0; width: 100%; background: rgba(10,10,10,0.95);
          backdrop-filter: blur(10px); z-index: 100; border-bottom: 1px solid #222; }
        .nav-inner { max-width: 1100px; margin: 0 auto; padding: 1rem 2rem;
          display: flex; justify-content: space-between; align-items: center; }
        .brand { color: var(--accent); font-weight: 800; font-size: 1.3rem; }
        .nav-links a { color: #ccc; text-decoration: none; margin-left: 2rem; font-size: 0.95rem; transition: color 0.2s; }
        .nav-links a:hover { color: var(--accent); }
        section { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 5rem 2rem; }
        .container { max-width: 1100px; width: 100%; margin: 0 auto; }
        .hero { text-align: center; }
        .hero h1 { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 800; line-height: 1.1;
          background: linear-gradient(135deg, var(--accent), var(--accent2)); -webkit-background-clip: text;
          -webkit-text-fill-color: transparent; margin-bottom: 1rem; }
        .hero p { font-size: 1.2rem; color: #aaa; max-width: 600px; margin: 0 auto 2rem; line-height: 1.7; }
        .btn-group { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .btn { padding: 0.8rem 2rem; border-radius: 8px; font-size: 1rem; cursor: pointer;
          text-decoration: none; display: inline-block; transition: all 0.2s; }
        .btn-primary { background: var(--accent); color: #fff; border: none; }
        .btn-primary:hover { background: #5a52d5; transform: translateY(-2px); }
        .btn-outline { background: transparent; color: var(--accent); border: 2px solid var(--accent); }
        .btn-outline:hover { background: var(--accent); color: #fff; }
        .section-title { font-size: 2.2rem; font-weight: 700; margin-bottom: 0.5rem; }
        .section-title span { color: var(--accent); }
        .underline { width: 60px; height: 4px; background: var(--accent); border-radius: 2px; margin-bottom: 3rem; }
        .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
        .card { background: #111; border: 1px solid #222; border-radius: 12px; padding: 1.5rem;
          transition: all 0.3s; }
        .card:hover { border-color: var(--accent); transform: translateY(-4px); box-shadow: 0 8px 30px rgba(108,99,255,0.15); }
        .card h3 { color: var(--accent); margin-bottom: 0.5rem; font-size: 1.1rem; }
        .card p { color: #aaa; font-size: 0.9rem; line-height: 1.6; margin-bottom: 1rem; }
        .tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .tag { background: #1a1a2e; color: var(--accent); padding: 2px 10px; border-radius: 20px; font-size: 0.75rem; }
        .proj-link { display: inline-block; margin-top: 1rem; color: var(--accent2); font-size: 0.85rem; text-decoration: none; }
        .proj-link:hover { text-decoration: underline; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; }
        .skill-cat h4 { color: var(--accent); margin-bottom: 0.8rem; font-size: 1rem; }
        .skill-items { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .skill-item { background: #1a1a1a; border: 1px solid #333; color: #ccc; padding: 4px 12px;
          border-radius: 6px; font-size: 0.85rem; }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
        .about-text h2 { font-size: 2rem; margin-bottom: 1rem; }
        .about-text p { color: #aaa; line-height: 1.8; margin-bottom: 1rem; }
        .stats { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem; }
        .stat { background: #111; border: 1px solid #222; border-radius: 10px; padding: 1.2rem; text-align: center; }
        .stat-num { font-size: 2rem; font-weight: 800; color: var(--accent); }
        .stat-label { color: #888; font-size: 0.85rem; margin-top: 0.2rem; }
        .contact-form { max-width: 600px; margin: 0 auto; }
        .form-group { margin-bottom: 1.2rem; }
        .form-group input, .form-group textarea {
          width: 100%; padding: 0.9rem; background: #111; border: 1px solid #333;
          border-radius: 8px; color: #eee; font-size: 1rem; outline: none; }
        .form-group input:focus, .form-group textarea:focus { border-color: var(--accent); }
        .form-group textarea { min-height: 140px; resize: vertical; }
        footer { text-align: center; padding: 2rem; color: #555; border-top: 1px solid #111; }
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; } }
      `}</style>

      <nav className="nav">
        <div className="nav-inner">
          <span className="brand">Tejo Sharan</span>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{ background: 'radial-gradient(ellipse at center, #0d0d1a 0%, #0a0a0a 70%)' }}>
        <div className="container hero">
          <p style={{ color: 'var(--accent)', marginBottom: '0.5rem', letterSpacing: '3px', fontSize: '0.9rem' }}>HELLO, I AM</p>
          <h1>Tejo Sharan A.M</h1>
          <p>Full Stack Developer & AI Engineer passionate about building scalable web applications and intelligent systems using React, Node.js, Python, and ML frameworks.</p>
          <div className="btn-group">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2 className="section-title">About <span>Me</span></h2>
              <div className="underline"></div>
              <p>I'm a Computer Science graduate (B.Tech, 2025) from Hindustan Institute of Technology and Science with a GPA of 9.04/10. I have hands-on experience building production-grade full-stack applications and AI/ML models through internships.</p>
              <p>I specialize in the MERN stack, REST API development, and machine learning model deployment. I'm currently expanding my skills in Next.js, cloud platforms (AWS/GCP/Azure), and DevOps practices.</p>
              <a href="mailto:tejosharan2003@gmail.com" className="btn btn-primary" style={{ marginTop: '1rem' }}>Download CV</a>
            </div>
            <div>
              <div className="stats">
                {[['9.04', 'GPA / 10.0'], ['2+', 'Internships'], ['5+', 'Projects'], ['2', 'Hackathons']].map(([n, l]) => (
                  <div className="stat" key={l}><div className="stat-num">{n}</div><div className="stat-label">{l}</div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ background: '#050505' }}>
        <div className="container">
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="underline"></div>
          <div className="grid-3">
            {projects.map((p, i) => (
              <div className="card" key={i}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                <a className="proj-link" href={p.link} target="_blank" rel="noreferrer">→ View on GitHub</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="container">
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <div className="underline"></div>
          <div className="skills-grid">
            {skills.map((s, i) => (
              <div className="skill-cat" key={i}>
                <h4>{s.category}</h4>
                <div className="skill-items">{s.items.map(item => <span className="skill-item" key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: '#050505' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Get In <span>Touch</span></h2>
          <div className="underline" style={{ margin: '0 auto 3rem' }}></div>
          <div className="contact-form">
            <div className="form-group"><input placeholder="Your Name" /></div>
            <div className="form-group"><input placeholder="Your Email" /></div>
            <div className="form-group"><input placeholder="Subject" /></div>
            <div className="form-group"><textarea placeholder="Your Message"></textarea></div>
            <button className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            <p style={{ textAlign: 'center', marginTop: '2rem', color: '#666' }}>
              Or reach me at: <a href="mailto:tejosharan2003@gmail.com" style={{ color: 'var(--accent)' }}>tejosharan2003@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 Tejo Sharan A.M · Built with Next.js · Chennai, India</p>
      </footer>
    </>
  );
}
