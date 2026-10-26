// ============================================================
//  EDIT YOUR PROJECTS HERE
//  - cover: an image URL/path
//  - metric: a headline result shown on the card
//  - paper: optional paper title shown under the metric
//  - links: any number of { label, url, icon } — icon is one of
//           "video", "paper", "demo", "github", "doc"
// ============================================================
const PROJECTS = [
  {
    title: "Learned Visual Safety Filter for Collision-Free Drone Flight",
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
      "Tree-of-Thoughts search with LLM prover and evaluator agents. Each candidate tactic is verified in Lean 4, and only the most promising proof paths are kept. Evaluated on 126 Lean Mathlib theorems against a one-shot Gemini 2.5 Flash baseline.",
    metric: "Proved 4× theorems with Gemini 2.5 Flash (47 vs. 11)",
    tags: ["LLMs", "Lean 4", "Python"],
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
    tags: ["Data Science", "XGBoost", "QGIS"],
    cover: "images/smesh-burn.jpg",
    coverPosition: "center top",
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
    paper: "A Pilot Human Study on Dual Photoplethysmography for Continuously Monitoring Pulse Wave Velocity and Blood Pressure",
    tags: ["Deep Learning", "Signal Processing", "TensorFlow"],
    cover: "https://img.youtube.com/vi/dA5jr4LaCaA/hqdefault.jpg",
    links: [
      { label: "IEEE paper", url: "https://doi.org/10.1109/jflex.2025.3614515", icon: "paper" },
      { label: "Demo video", url: "https://youtu.be/dA5jr4LaCaA", icon: "video" },
    ],
  },
];

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
      : "";
    const video = (p.links || []).find((l) => l.icon === "video");
    const coverInner = video
      ? `<a href="${escapeHTML(video.url)}" target="_blank" rel="noopener" aria-label="Watch ${escapeHTML(p.title)} video">${cover}<span class="play">${ICONS.video}</span></a>`
      : cover;
    const links = (p.links || [])
      .map((l) => `<a class="pill" href="${escapeHTML(l.url)}" target="_blank" rel="noopener">${ICONS[l.icon] || ICONS.demo}${escapeHTML(l.label)}</a>`)
      .join("");
    return `
      <article class="card">
        <div class="card-cover">${coverInner}</div>
        <div class="card-body">
          ${p.org ? `<p class="org mono">${escapeHTML(p.org)}</p>` : ""}
          <h4>${escapeHTML(p.title)}</h4>
          ${p.metric ? `<p class="metric">${escapeHTML(p.metric)}</p>` : ""}
          ${p.paper ? `<p class="paper-title">“${escapeHTML(p.paper)}”</p>` : ""}
          <p class="desc">${escapeHTML(p.description)}</p>
          <ul class="tags">${p.tags.map((t) => `<li>${escapeHTML(t)}</li>`).join("")}</ul>
          ${links ? `<div class="pills">${links}</div>` : ""}
        </div>
      </article>`;
  }).join("");
}

// ---------- Misc UI ----------
function ui() {
  // Copy email
  const copyBtn = document.getElementById("copy-email");
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyBtn.dataset.email);
      copyBtn.textContent = "Copied";
    } catch {
      copyBtn.textContent = "Copy failed";
    }
    setTimeout(() => (copyBtn.textContent = "Copy"), 1600);
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
}

renderProjects();
ui();
