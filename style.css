:root {
  --bg-color: #0b0d17;
  --card-bg: rgba(22, 27, 46, 0.6);
  --card-border: rgba(255, 255, 255, 0.08);
  --accent-purple: #a855f7;
  --accent-pink: #ec4899;
  --accent-cyan: #06b6d4;
  --text-main: #f3f4f6;
  --text-muted: #9ca3af;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

body {
  background-color: var(--bg-color);
  color: var(--text-main);
  overflow-x: hidden;
  line-height: 1.6;
}

/* Ambient Background Glows */
.glow {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(120px);
  z-index: -1;
  opacity: 0.35;
}

.glow-1 {
  top: -100px;
  left: -100px;
  background: var(--accent-purple);
}

.glow-2 {
  top: 30%;
  right: -100px;
  background: var(--accent-pink);
}

.glow-3 {
  bottom: 0;
  left: 20%;
  background: var(--accent-cyan);
}

/* Navigation Bar */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 8%;
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid var(--card-border);
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 2px;
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links a {
  color: var(--text-muted);
  text-decoration: none;
  margin-left: 2rem;
  transition: color 0.3s;
  font-weight: 500;
}

.nav-links a:hover {
  color: var(--text-main);
}

/* Layout Container */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

/* Hero Section */
.hero {
  text-align: center;
  margin-bottom: 4rem;
}

.location-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--card-border);
  border-radius: 50px;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.hero h1 span {
  background: linear-gradient(135deg, var(--accent-purple), var(--accent-pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

/* Interest Tags */
.tags-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.tag {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--card-border);
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Social Buttons */
.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.social-btn {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--card-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-main);
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-3px);
  background: linear-gradient(135deg, var(--accent-purple), var(--accent-pink));
  border-color: transparent;
}

/* Current Focus Banner */
.focus-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);
  margin-bottom: 4rem;
}

.focus-card h3 {
  margin-bottom: 0.25rem;
}

.focus-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.focus-badge {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.2);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Section Styling */
.section-title {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

/* Cards */
.card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 1.75rem;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.2);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.card-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(168, 85, 247, 0.1);
  color: var(--accent-purple);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.card-list {
  list-style: none;
}

.card-list li {
  margin-bottom: 0.75rem;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.card-list strong {
  color: var(--text-main);
}

/* Scroll Animation Classes */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive Rules */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  .focus-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
