// ============================================================
//  EDIT YOUR PROJECTS HERE
//  - cover: an image URL/path (falls back to the emoji if omitted)
//  - metric: a headline result shown on the card
//  - links: any number of { label, url, icon } — icon is one of
//           "video", "paper", "demo", "github", "doc"
// ============================================================
const PROJECTS = [
  {
    title: "Vision-Based Drone Collision Avoidance",
    org: "Stanford Safe and Intelligent Autonomy Lab",
    description:
      "Autonomous drone controller that uses a finetuned DINOv2 model to predict whether an action is safe, trained with 10 rounds of DAgger on 100M+ state-action pairs.",
    metric: "Flight success 16.7% → 83.3%",
    tags: ["Computer Vision", "Robotics", "PyTorch"],
    cover: "https://img.youtube.com/vi/bEk-tr6aKcg/hqdefault.jpg",
    links: [{ label: "Demo video", url: "https://youtu.be/bEk-tr6aKcg", icon: "video" }],
  },
  {
    title: "Collaborative LLM Reasoning in Lean Theorem Proving",
    org: "Stanford CS229 · with Tom Liu",
    description:
      "Tree-of-Thoughts search with LLM prover and evaluator agents. Each candidate tactic is verified in Lean 4, and only the most promising proof paths are kept. I built the search framework, the prompts, and the Lean environment.",
    metric: "Proved 4× more theorems with Gemini 2.5 Flash (47 vs. 11 of 126)",
    tags: ["LLMs", "Lean 4", "Search", "Python"],
    cover: "images/lean-tot-poster.jpg",
    coverPosition: "top",
    links: [
      { label: "Report", url: "files/lean-tot-report.pdf", icon: "paper" },
      { label: "Poster", url: "files/lean-tot-poster.pdf", icon: "doc" },
      { label: "Code", url: "https://github.com/pianomaster99/Fermats2ndLastTheorem", icon: "github" },
    ],
  },
  {
    title: "SMesh Radio-Connected Air Quality Sensors for Prescribed Burns",
    org: "Stanford Radio Club",
    description:
      "Live dashboard of radio-connected sensors that tracks air quality during prescribed burns for local firefighters.",
    metric: "Presented at AGU25 · Accepted to AGU26",
    tags: ["Data Science", "XGBoost", "GIS"],
    cover: "images/smesh-burn.jpg",
    links: [
      { label: "Dashboard", url: "https://smeshpepperwood2025.streamlit.app/", icon: "demo" },
      { label: "AGU25 abstract", url: "https://studio.m-anage.com/agu/agu25/meetingapp.cgi/Paper/1957727?clearcache=1", icon: "doc" },
    ],
  },
  {
    title: "Wearable Blood Pressure Estimation",
    org: "UNC Wearable Bioelectronics Lab",
    description:
      "CNN-LSTM model that estimates blood pressure from photoplethysmography signals on a wearable device, validated against gold-standard Vicorder measurements.",
    metric: "Published in IEEE J-FLEX",
    tags: ["Deep Learning", "Signal Processing", "TensorFlow"],
    cover: "https://img.youtube.com/vi/dA5jr4LaCaA/hqdefault.jpg",
    links: [
      { label: "IEEE paper", url: "https://doi.org/10.1109/jflex.2025.3614515", icon: "paper" },
      { label: "Demo video", url: "https://youtu.be/dA5jr4LaCaA", icon: "video" },
    ],
  },
];

// Words cycled in the hero "I build ___"
const TYPED_WORDS = ["safer drones.", "theorem provers.", "ML models.", "data dashboards."];

// ============================================================

const ICONS = {
  github:
    '<svg viewBox="0 0 24 24"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>',
  demo:
    '<svg viewBox="0 0 24 24"><path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3ZM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/></svg>',
  video: '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7L8 5Z"/></svg>',
  paper:
    '<svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 1.5V8h4.5L14 3.5ZM7 12h10v1.5H7V12Zm0 3.5h10V17H7v-1.5Z"/></svg>',
  doc:
    '<svg viewBox="0 0 24 24"><path d="M4 4h16v2H4V4Zm0 4h16v2H4V8Zm0 4h10v2H4v-2Zm0 4h16v2H4v-2Z"/></svg>',
};

const escapeHTML = (s = "") =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// ---------- Projects ----------
function renderProjects() {
  const grid = document.getElementById("project-grid");
  grid.innerHTML = PROJECTS.map((p) => {
    const cover = p.cover
      ? `<img src="${escapeHTML(p.cover)}" alt="${escapeHTML(p.title)}" loading="lazy"${p.coverPosition ? ` style="object-position:${escapeHTML(p.coverPosition)}"` : ""} />`
      : `<span class="emoji">${p.emoji || "✨"}</span>`;
    const video = (p.links || []).find((l) => l.icon === "video");
    const coverInner = video
      ? `<a href="${escapeHTML(video.url)}" target="_blank" rel="noopener" aria-label="Watch ${escapeHTML(p.title)} video">${cover}<span class="play">${ICONS.video}</span></a>`
      : cover;
    const links = (p.links || [])
      .map((l) => `<a class="pill" href="${escapeHTML(l.url)}" target="_blank" rel="noopener">${ICONS[l.icon] || ICONS.demo}${escapeHTML(l.label)}</a>`)
      .join("");
    return `
      <article class="card">
        <div class="card-cover" style="background:${escapeHTML(p.color || "#eef")}">${coverInner}</div>
        <div class="card-body">
          ${p.org ? `<p class="org mono">${escapeHTML(p.org)}</p>` : ""}
          <h4>${escapeHTML(p.title)}</h4>
          ${p.metric ? `<p class="metric">${escapeHTML(p.metric)}</p>` : ""}
          <p class="desc">${escapeHTML(p.description)}</p>
          <ul class="tags">${p.tags.map((t) => `<li>${escapeHTML(t)}</li>`).join("")}</ul>
          ${links ? `<div class="pills">${links}</div>` : ""}
        </div>
      </article>`;
  }).join("");

  // 3D tilt on hover
  if (window.matchMedia("(hover: hover)").matches) {
    grid.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-4px)`;
      });
      card.addEventListener("mouseleave", () => (card.style.transform = ""));
    });
  }
}

// ---------- Typing effect ----------
function typeLoop() {
  const el = document.getElementById("typed");
  let word = 0, char = 0, deleting = false;
  (function tick() {
    const current = TYPED_WORDS[word];
    char += deleting ? -1 : 1;
    el.textContent = current.slice(0, char);
    let delay = deleting ? 45 : 90;
    if (!deleting && char === current.length) { deleting = true; delay = 1600; }
    else if (deleting && char === 0) { deleting = false; word = (word + 1) % TYPED_WORDS.length; delay = 300; }
    setTimeout(tick, delay);
  })();
}

// ---------- Background: drifting connected dots ----------
function background() {
  const canvas = document.getElementById("bg");
  const ctx = canvas.getContext("2d");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w, h, dots;
  const mouse = { x: -9999, y: -9999 };

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    w = canvas.width = innerWidth * dpr;
    h = canvas.height = innerHeight * dpr;
    canvas.style.width = innerWidth + "px";
    canvas.style.height = innerHeight + "px";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    const count = Math.min(80, Math.floor((innerWidth * innerHeight) / 18000));
    dots = Array.from({ length: count }, () => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (const d of dots) {
      d.x += d.vx; d.y += d.vy;
      if (d.x < 0 || d.x > innerWidth) d.vx *= -1;
      if (d.y < 0 || d.y > innerHeight) d.vy *= -1;
      // gentle push away from cursor
      const mx = d.x - mouse.x, my = d.y - mouse.y, md = Math.hypot(mx, my);
      if (md < 120) { d.x += (mx / md) * 1.2; d.y += (my / md) * 1.2; }
    }
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const a = dots[i], b = dots[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 140) {
          ctx.strokeStyle = `rgba(79, 70, 229, ${0.12 * (1 - dist / 140)})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    ctx.fillStyle = "rgba(79, 70, 229, 0.35)";
    for (const d of dots) { ctx.beginPath(); ctx.arc(d.x, d.y, 1.8, 0, Math.PI * 2); ctx.fill(); }
    if (!reduce) requestAnimationFrame(draw);
  }

  addEventListener("resize", resize);
  addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  resize();
  draw();
}

// ---------- Misc UI ----------
function ui() {
  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 20);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const glow = document.querySelector(".cursor-glow");
  addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });

  // Origami lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox.querySelector("img");
  document.querySelectorAll(".gallery button").forEach((btn) =>
    btn.addEventListener("click", () => {
      const img = btn.querySelector("img");
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.hidden = false;
    })
  );
  lightbox.addEventListener("click", () => (lightbox.hidden = true));
  addEventListener("keydown", (e) => e.key === "Escape" && (lightbox.hidden = true));

  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => en.isIntersecting && en.target.classList.add("visible")),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

}

renderProjects();
typeLoop();
background();
ui();
